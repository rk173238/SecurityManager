import React,{Component,Fragment} from 'react';
import { withRouter } from 'react-router';
import classes from './HeatMapPage.css';
import Paper from 'material-ui/Paper';
// import LinePlot from '../../common-components/echarts/LinePlot/LinePlot';
import Loading from '../../common-components/Loading/Loading';
// import DeviceModal from '../../common-components/DeviceModal/DeviceModal';
import {dataConstants} from '../../constants'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const col=(v)=>{
  if (v < 40 ||v==='Critical'){
    return '#c0392b';
  }
  else if ((v > 40 && v <= 60)||v==='Medium'){
    return '#f39c12';
  }
  else if (v > 60 || v==='Low') {
    return '#27ae60';
  }
  else{
    return '';
  }
};
class HeatMapPage extends Component{
  constructor(props){
    super(props);
    this.state={
      newData:[],
      techValue:0,
      devValue:0,
      devList:['None'],
      lineData:[],
      weightage:[]
    }
  }
  static getDerivedStateFromProps(nextProps,prevState){
    console.log(nextProps,prevState)
    if(nextProps.history.location.search!==""){
      let searchParams=nextProps.history.location.search.split('?')[1].split('&')
      prevState.techValue=dataConstants.technologyList.sort().findIndex(a=>a==searchParams[0])+1
      console.log(dataConstants.technologyList[prevState.techValue-1])
      if(!nextProps.fetchedUseCaseData&&!nextProps.fetchingUseCaseData){
        nextProps.fetchUCD('DT','ST',dataConstants.technologyList[prevState.techValue-1],null,'All',null,JSON.parse(localStorage.date),null)
        nextProps.onFetchWeightage('usecase')
      }
      if(nextProps.ucd?nextProps.ucd.length!==0:false){
        prevState.devValue=nextProps.ucd.sort().findIndex(a=>a==searchParams[1])+1
        if(prevState.devValue>0&&!nextProps.fetchedDeviceData&&!nextProps.fetchingDeviceData){
          nextProps.fetchDevData(nextProps.ucd[prevState.devValue-1],dataConstants.technologyList[prevState.techValue-1],[])
        }
      }
    } 
    return prevState
  }
  getData=(lineData,key)=>{
    let final=null
    final=lineData.reduce(function(obj,item,i){
          Object.keys(item.values).filter(k=>k===key).forEach(k=>{
            let j=k.split('_').map(k=>k=k[0].toUpperCase()+k.slice(1)).join(' ')
            if(obj[j]){
              obj[j][i]=item.values[k]
            }
            else{
              obj[j]=[]
              obj[j][i]=item.values[k]
            }
          })
      return obj
      },
    {})
    return final
  }
  getLinePlotTrends=(techTrends)=>{
    let ds=[]
    techTrends.forEach(t=>{
      let d=new Date(t.time)
      let mm= d.getMonth()+1
      mm=mm<10?'0'+mm:mm
      let day=mm+'/'+d.getDate()+'/'+d.getFullYear()
      if(!ds.includes(day)){
        ds.push(day)
      }
      t.day=day
    })
    ds=ds.reverse()
    let lineData=[]
    let counts=null
    console.log(ds)
    ds.forEach(d=>{
        let sU=techTrends.filter(t=>t.day===d)
        counts=sU.reduce((obj,i)=>{ Object.keys(i).filter(value =>{
                                      for(var i=0; i < dataConstants.useCaseFieldMapFull.length; i++){
                                        if(value === dataConstants.useCaseFieldMapFull[i].use_case_field){
                                          return true;
                                        }
                                      }
                                      return false;
                                    }).forEach(k=>{
                                        if(obj[k]){
                                          obj[k]=obj[k]+1
                                        }
                                        else{
                                          obj[k]=1
                                        }
                                    })
                                  return obj;
                                },
        {})
        // console.log(counts);
        let final=sU.reduce(function(obj,item){
                                                Object.keys(item).filter(value =>{
                                                  for(var i=0; i < dataConstants.useCaseFieldMapFull.length; i++){
                                                    if(value === dataConstants.useCaseFieldMapFull[i].use_case_field){
                                                      return true;
                                                    }
                                                  }
                                                  return false;
                                                }).forEach(k=>{
                                                  if(obj[k]){
                                                    obj[k]=obj[k]+item[k].compliance_score/counts[k]
                                                  }
                                                  else{
                                                    obj[k]=item[k].compliance_score/counts[k]
                                                  }
                                                })
                                            return obj
                                            },
        {})
        let w=this.props.weightageData['usecase_weightage'][dataConstants.technologyList[this.state.techValue-1]]
        let dc = 0
        console.log(w)
        Object.keys(final).forEach((uc, index, array) => {
          dc += final[uc]*w[uc]/100;
          console.log(dc)
          // if(index===array.length-1){
          //   dc=dc/array.length
          // }
        })
        final.device_compliance=dc
        lineData.push({day:d,values:final});
    });
    console.log(lineData);
    return [lineData,ds]
  }
  handleChange = (event, index, value) => {
    let tech=dataConstants.technologyList[value-1]
    console.log(this.props,tech)
    this.props.fetchUCD('DT','ST',tech,null,'All',null,JSON.parse(localStorage.date),null)
    this.setState({techValue:value,devValue:0})
    this.props.onFetchWeightage('usecase')
    this.props.history.push({pathname:'/deviceTrends',search:""})
    this.props.onClearDeviceData()
    this.props.onClearUseCaseData()
  };
  handleDevChange = (event, index, value) => {
    console.log()
    let tech=dataConstants.technologyList[this.state.techValue-1]
    let dev=this.props.ucd[value-1]
    if(value>0){
      this.props.fetchDevData(dev,tech,[])
    }
    this.props.history.push({pathname:'/deviceTrends',search:'?'+tech+'&'+dev})
    this.setState({devValue:value})
  };
  componentWillUnmount(){
    this.props.onClearDeviceData()
    this.props.onClearUseCaseData()
  }
  render(){
    if(this.props.newData.length!==0){
      console.log(this.props.devData)
      let ucTrend=this.props.devData?this.props.devData.length!==0?this.getLinePlotTrends(this.props.devData):[]:[]
      let currScore=this.props.devData.filter(t=>{
        let c= new Date(t.time)
        let cl=new Date(JSON.parse(localStorage.date)[0])
        let ch=new Date(JSON.parse(localStorage.date)[1])
        return c.getTime() <= ch.getTime() && c.getTime() >= cl.getTime()
      })[0]
      // console.log(currScore)
      return(
        <Paper className={classes.flexContainer}>
          <h3 style={{width:'100%',height: '10%',textAlign:'center',color:'rgba(233, 220, 220, 0.88)'}}>Device Trend View</h3>
          <div className={classes.dateSection}>
            <div className={classes.dateBanner}>
              <SelectField  value={this.state.techValue}
                            onChange={this.handleChange}
                            autoWidth={false}
                            className={classes.timeQuadrant}
                            floatingLabelFixed={true}
                            floatingLabelText='Technology'
                            floatingLabelStyle={{top: '62.7%',left: 0, color:'rgba(255, 255, 255, 0.48)'}}
                            labelStyle={{color:'#fff',top:9,textAlign: 'left'}}
                            >
                {dataConstants.technologyList.sort().map((t,i)=>(<MenuItem key={i} value={i+1} label={t} primaryText={t} />))}
              </SelectField>
              <br/>
              <SelectField  value={this.state.devValue}
                            onChange={this.handleDevChange}
                            autoWidth={false}
                            className={classes.timeQuadrant1}
                            floatingLabelFixed={true}
                            floatingLabelText='Device'
                            floatingLabelStyle={{top: '62.7%',left: 0, color:'rgba(255, 255, 255, 0.48)'}}
                            labelStyle={{color:'#fff',top:9,textAlign: 'left'}}
                            >
                <MenuItem key={0} value={0} label={'None'} primaryText={'None'} />
                {this.props.ucd?this.props.ucd.sort().map((t,i)=>(<MenuItem key={i+1} value={i+1} label={t} primaryText={t} />)):null}
              </SelectField>
            </div>
            <br/>
            <hr/>
          </div>
          <br></br>

          {ucTrend[0]?Object.keys(ucTrend[0][0].values).map((k,i)=>{
            return (
              <Fragment key={i}>
              <div  style={{width:'44%',margin:'3%'}}>
              {console.log(k)}
                <Card className={classes.cardHalf}>
                  <CardContent  style={{textAlign:'center',margin:0,padding:0}} >
                    <Typography variant="subheading" className={'classes.title'} style={{color:'#ddd',backgroundColor:'rgb(44, 62, 80)',padding:'4%'}}>
                      {k.split('_').map(k=>k=k[0].toUpperCase()+k.slice(1)).join(' ')+" Today's Status"}
                    </Typography>
                    {currScore[k]?(
                      <Fragment>
                    <Card className={'classes.card'} style={{width:'42%',display:'inline-block',margin:'3%',backgroundColor:col(currScore[k].compliance_score),color:'#fff'}}>
                    <CardContent  style={{textAlign:'center',margin:0,padding:0}} >
                      <Typography variant="subheading" className={'classes.title'} style={{color:'#ddd',backgroundColor:'rgb(44, 62, 80)',padding:'4%'}}>
                        {'Data'}
                      </Typography>
                      <p style={{fontSize:21,margin:'4% 0',padding:'1.5%'}}>{currScore[k].data?currScore[k].data.toString():"No Data"}</p>
                    </CardContent>
                    </Card>
                    <Card className={'classes.card'} style={{width:'42%',display:'inline-block',margin:'3%',backgroundColor:col(currScore[k].compliance_score),color:'#fff'}}>
                    <CardContent  style={{textAlign:'center',margin:0,padding:0}} >
                      <Typography variant="subheading" className={'classes.title'} style={{color:'#ddd',backgroundColor:'rgb(44, 62, 80)',padding:'4%'}}>
                        {'Compliance Score'}
                      </Typography>
                      <p style={{fontSize:21,margin:'4% 0',padding:'1.5%'}}>{currScore[k].compliance_score}</p>
                    </CardContent>
                    </Card>
                    </Fragment>
                    ):(
                      <Fragment>
                    <Card className={'classes.card'} style={{width:'42%',display:'inline-block',margin:'3%',backgroundColor:'rgb(65, 81, 97)',color:'#fff'}}>
                    <CardContent  style={{textAlign:'center',margin:0,padding:0}} >
                      <Typography variant="subheading" className={'classes.title'} style={{color:'#ddd',backgroundColor:'rgb(44, 62, 80)',padding:'4%'}}>
                        {'System Name'}
                      </Typography>
                      <p style={{fontSize:21,margin:'4% 0',padding:'1.5%'}}>{currScore['system_name']}</p>
                    </CardContent>
                    </Card>
                    <Card className={'classes.card'} style={{width:'42%',display:'inline-block',margin:'3%',backgroundColor:'rgb(65, 81, 97)',color:'#fff'}}>
                    <CardContent  style={{textAlign:'center',margin:0,padding:0}} >
                      <Typography variant="subheading" className={'classes.title'} style={{color:'#ddd',backgroundColor:'rgb(44, 62, 80)',padding:'4%'}}>
                        {'IP Address'}
                      </Typography>
                      <p style={{fontSize:21,margin:'4% 0',padding:'1.5%'}}>{currScore['ip_address']}</p>
                    </CardContent>
                    </Card>
                    </Fragment>
                    )}
                  </CardContent>
                </Card>
              </div>
              <div style={{width:'44%',margin:'3%'}}>
                <Card className={classes.cardHalf}>
                  <CardContent  style={{textAlign:'center',margin:0,padding:0}} >
                    <Typography variant="subheading" className={'classes.title'} style={{color:'#ddd',backgroundColor:'rgb(44, 62, 80)',padding:'4%'}}>
                      {k.split('_').map(k=>k=k[0].toUpperCase()+k.slice(1)).join(' ')+' Compliance Trend'}
                    </Typography>
                    {/* <LinePlot data={this.getData(ucTrend[0],k)} xAxis={ucTrend[1]} area={true}/> */}
                  </CardContent>
                </Card>
              </div>
              </Fragment>
            )
          }):null}

          
          

          {/* {this.props.showModal?(<DeviceModal  moreDetailsHandler={this.props.moreDetaivvlsHandler}
                                                moreDetails={this.props.moreDetails}
                                                fetchingUseCaseData={this.props.fetchingUseCaseData}
                                                fetchedUseCaseData={this.props.fetchedUseCaseData}
                                                devClickHandler={this.props.devClickHandler}
                                                handleToggleDevDetailsModal={this.props.handleToggleDevDetailsModal}
                                                showDeviceDetails={this.props.showDeviceDetails}
                                                showModal={this.props.showModal}
                                                handleToggleModal={this.props.handleToggleModal}
                                                devicesData={this.props.devData}
                                                devDetailData={this.props.deviceData} />):null} */}

        </Paper>
      );
    }
    else{
      return (<Loading/>)
    }
  }
}
export default withRouter(HeatMapPage)
/* <div style={{width:'94%',margin:'3%'}}>
<Card className={classes.cardHalf}>
  <CardContent  style={{textAlign:'center',margin:0,padding:0}} >
    <Typography variant="subheading" className={'classes.title'} style={{color:'#ddd',backgroundColor:'rgb(44, 62, 80)',padding:'2%'}}>
      {'Technology Usecase Status'}
    </Typography>
    <TrendBar donutClick={this.props.donutClickHandler} data={[]}/>
  </CardContent>
</Card>
</div> */