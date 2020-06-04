import React,{Fragment, Component} from 'react';
import ScoreDetailsTabs from './components/ScoreDetailsTabs/ScoreDetailsTabs'
import classes from './MainTabs.css'
import TechnologyDetails from './components/TechnologyDetails/TechnologyDetails'
import { Route,Switch, withRouter } from 'react-router';

const getMainTabSelectedIndex=(location)=>{
  let mainTabSelectedIndex=null;
  switch(location.pathname.split('/')[2]){
    case 'opeff': mainTabSelectedIndex=2;break;
    case 'opris': mainTabSelectedIndex=0;break;
    case 'oprel': mainTabSelectedIndex=1;break;
    default: mainTabSelectedIndex=null;break;
  }
  return mainTabSelectedIndex;
}

const catSelected=(location,data)=>{
  let subCatData= data[getMainTabSelectedIndex(location)].subCatData;
  // console.log(subCatData);
  // return subCatData.filter((subCat,i)=>
  //                             (subCat.subCatName.split(' ')[0][0]+
  //                               subCat.subCatName.split(' ')[1][0])
  //                               .toLowerCase()===location.search.split('?')[1]
  //                                                 .split('&')[0])[0].useCaseData
  return subCatData.filter((subCat,i)=>
                              (subCat.subCatName.split(' ')[0][0]+
                                subCat.subCatName.split(' ')[1][0])
                                .toLowerCase()===location.search.split('?')[1]
                                                  .split('&')[0])[0].technologyData

}

const getSubCatSelectedName=(location,subCatData)=>{
  return subCatData.filter(data=>(data.subCatName.split(' ')[0][0]+data.subCatName.split(' ')[1][0]).toLowerCase()===location.search.split('?')[1].split('&')[0])[0].subCatName
}
const setChoosenSubCategory=(pathname)=>{
  return pathname.split('/')[3]
        +'_'+pathname.split('/')[5]
        +'_'+pathname.split('/')[6]
}

class MainTabs extends Component {

  state={
    choosenSubCategory:setChoosenSubCategory(this.props.history.location.pathname),
    selectedTab:'',
    tabsHeight:''
  }
  
  arrowClicked=(type,mainCategory,subCategory)=>{
    console.log("arrowclicked",type,mainCategory,subCategory)
    this.setState({choosenSubCategory:type+'_'+mainCategory+'_'+subCategory})
    this.props.history.push({pathname:'/home/details/'+type+'/techdetails/'+mainCategory+'/'+subCategory})

  }
  selectTab=()=>{
    // console.log(this.props.history.location.pathname)
    var selectedTab=this.props.history.location.pathname.split('/')[3]
    // this.setState({selectedTab:selectedTab})
    switch (selectedTab) {
      case 'process': return 2;
      case 'technology': return 0;
      case 'people': return 1;
      default: return 0;
    }
  }
  categoryScore=(props)=>{
    console.log(this.state.choosenSubCategory,props)
    let currentData='';
    let category=this.state.choosenSubCategory.split('_')[1]
    if(props.length>0){
      let t1=new Date(props[0].time)
      let t2=new Date(props[1].time)
      if(t1>t2) currentData= props[0].values
      currentData= props[1].values
      console.log(currentData[category],category)
      return{
        score:currentData[category].score,
        choosenSubCategory:this.state.choosenSubCategory
      }
    }
    
  }
  changeView=()=>{
    // this.props.history.push({pathname:'/home/details/people/scoredetails'})
    this.props.history.push({pathname:'/home/details/technology/scoredetails'})
  }



  render(){
    // console.log(this.props.history.location.pathname)
    let activeUrl = this.props.location.pathname.split('/')[3];
    // activeUrl = activeUrl[activeUrl.length - 2];
    return(
      <Fragment>
        <div 
          className={classes.tabs}
        >
          <div className={classes.tabItem} style={{paddingLeft:"35px"}} onClick={()=>this.props.history.push({pathname:'/home/details/technology/scoredetails'})}>
            <span style={{
              borderBottom: (activeUrl==="technology"||activeUrl==="Technology")?"2px solid #0881dd":"",
              color: (activeUrl==="technology"||activeUrl==="Technology")?"#0881dd":"#fff"
            }}>
              Technology
            </span>
          </div>
          <div className={classes.tabItem} onClick={()=>this.props.history.push({pathname:'/home/details/people/scoredetails'})}>
            <span style={{
              borderBottom:(activeUrl==="people"||activeUrl==="People")?"2px solid #0881dd":"",
              color: (activeUrl==="people"||activeUrl==="People")?"#0881dd":"#fff"
            }}>
              People
            </span>
          </div>
          <div className={classes.tabItem} onClick={()=>this.props.history.push({pathname:'/home/details/process/scoredetails'})}>
            <span style={{
              borderBottom:(activeUrl==="process"||activeUrl==="Process")?"2px solid #0881dd":"",
              color: (activeUrl==="process"||activeUrl==="Process")?"#0881dd":"#fff"
            }}>
              Process
            </span>
          </div>
        </div>
        <div 
          className={classes.baseTabs}
        >
          <Switch>
            <Route path='/home/details/technology/scoredetails' exact render={()=>
              <ScoreDetailsTabs arrowClicked={this.arrowClicked} data={this.props.techScoreData} type={'Technology'} />}/>
            <Route path='/home/details/technology/techdetails' render={()=>
              <TechnologyDetails choosenSubCategory={this.state.choosenSubCategory} />}/>

            <Route path='/home/details/people/scoredetails' exact render={()=>
                <ScoreDetailsTabs arrowClicked={this.arrowClicked} data={this.props.peopleScoreData} type={'People'} />}/>
            <Route path='/home/details/people/techdetails'  render={()=>
              <TechnologyDetails choosenSubCategory={this.state.choosenSubCategory} />}/>
            
            <Route path='/home/details/process/scoredetails' exact render={()=>
              <ScoreDetailsTabs arrowClicked={this.arrowClicked} data={this.props.processScoreData} type={'Process'} />}/>
            <Route path='/home/details/process/techdetails' render={()=>
              <TechnologyDetails choosenSubCategory={this.state.choosenSubCategory} />}/>
          </Switch>
          </div>
          {/* <Tabs className={classes.baseTabs} initialSelectedIndex={this.selectTab()} tabItemContainerStyle={{backgroundColor:'transparent',width:'600px'}} /*onChange={()=>this.setState({choosenSubCategory:''})}> */}
          
            {/* <Tab fullWidth={false} label="Technology" className={classes.headTab} data-route={"/home/details/technology/scoredetails"} onActive={this.props.active} style={{backgroundColor:this.selectTab()===0?'rgba(255,255,255,0.1)':'transparent',width:'20%'}}>
              
              <Switch>
                  <Route path='/home/details/technology/scoredetails' exact render={()=>
                    <ScoreDetailsTabs arrowClicked={this.arrowClicked} data={this.props.techScoreData} type={'technology'}></ScoreDetailsTabs>}/>

                  <Route path='/home/details/technology/techdetails' render={()=>
                  <TechnologyDetails choosenSubCategory={this.state.choosenSubCategory}></TechnologyDetails>}/>
              </Switch>
              
            </Tab>
            <Tab label='People' className={classes.headTab} data-route={"/home/details/people/scoredetails"} onActive={this.props.active} style={{backgroundColor:this.selectTab()===1?'rgba(255,255,255,0.1)':'transparent'}}>
            <Switch>
                  <Route path='/home/details/people/scoredetails' exact render={()=>
                    <ScoreDetailsTabs arrowClicked={this.arrowClicked} data={this.props.techScoreData} type={'people'}></ScoreDetailsTabs>}/>
                  <Route path='/home/details/people/techdetails'  render={()=>
                    <TechnologyDetails choosenSubCategory={this.state.choosenSubCategory}></TechnologyDetails>}/>
              </Switch>
            </Tab>
            <Tab label='Process' className={classes.headTab} data-route={"/home/details/process/scoredetails"} onActive={this.props.active} style={{backgroundColor:this.selectTab()===2?'rgba(255,255,255,0.1)':'transparent'}}>
            <Switch>
                  <Route path='/home/details/process/scoredetails' exact render={()=>
                    <ScoreDetailsTabs arrowClicked={this.arrowClicked} data={this.props.techScoreData} type={'process'}></ScoreDetailsTabs>}/>
                  <Route path='/home/details/process/techdetails' render={()=>
                    <TechnologyDetails choosenSubCategory={this.state.choosenSubCategory}></TechnologyDetails>}/>
              </Switch>
            </Tab>
         */}
          {/* </Tabs> */}

            
        
        </Fragment>
      );
    }
}

export default withRouter(MainTabs);
