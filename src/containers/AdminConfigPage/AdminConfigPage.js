import React,{Component} from 'react';
import classes from './AdminConfigPage.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import UseCaseList from './components/UseCaseList/UseCaseList.js'
import {adminValuesService} from '../../services';
import {dataConstants } from '../../constants';

export default class AdminConfigPage extends Component{
  constructor(props){
    super(props);
    this.state={value:0,
                config:[],
                useCases:{'Antivirus':[],'HIPS':[],'Drive Encryption':[],'DLP':[]}
                }
    this.initAdminConfig()

  }
  getDateWithTimeZone=()=>{
    let m = new Date();
    let tz=m.toString().split('GMT')[1].split(' ')[0]
    let dateString = m.getUTCFullYear() + "-" +
                    ("0" + (m.getMonth()+1)).slice(-2) + "-" +
                    ("0" + m.getDate()).slice(-2) + "T" +
                    ("0" + m.getHours()).slice(-2) + ":" +
                    ("0" + m.getMinutes()).slice(-2) + ":" +
                    ("0" + m.getSeconds()).slice(-2)
                    +tz.slice(0,3)+':'+tz.slice(3);
                    // console.log(dateString);
    return dateString;
  }
  handleChangeTabs = (event, value) => {
    this.setState({ value });
  };
  initAdminConfig=()=>{
    Promise.all([
      adminValuesService.getAdminValues('Antivirus'),
      adminValuesService.getAdminValues('HIPS'),
      adminValuesService.getAdminValues('Drive Encryption'),
      adminValuesService.getAdminValues('DLP')
    ]).then(([
              av,
              hips,
              de,
              dlp
            ])=>{
              let tmUcs=[]
              let ucs={}
              if(av.status!==204){
                const avData=av.data
                Object.keys(avData).slice(1).forEach(u=>{
                  // console.log(u);
                  let uc=dataConstants.useCaseFieldMapFull.find(ucf=>ucf.use_case_field===u)
                  tmUcs.push({
                                name:uc.use_case,
                                uc_name:u,
                                value:avData[u],
                                tech:'Antivirus'
                          })
                })
                ucs['Antivirus']=tmUcs
              }
              tmUcs=[]
              if(hips.status!==204){
                const avData=hips.data
                Object.keys(avData).slice(1).forEach(u=>{
                  // console.log(u);
                  let uc=dataConstants.useCaseFieldMapFull.find(ucf=>ucf.use_case_field===u)
                  tmUcs.push({
                                name:uc.use_case,
                                uc_name:u,
                                value:avData[u],
                                tech:'HIPS'
                          })
                })
                ucs['HIPS']=tmUcs
              }
              tmUcs=[]
              if(de.status!==204){
                const avData=de.data
                Object.keys(avData).slice(1).forEach(u=>{
                  // console.log(u);
                  let uc=dataConstants.useCaseFieldMapFull.find(ucf=>ucf.use_case_field===u)
                  tmUcs.push({
                                name:uc.use_case,
                                uc_name:u,
                                value:avData[u],
                                tech:'Drive Encryption'
                          })
                })
                ucs['Drive Encryption']=tmUcs
              }
              tmUcs=[]
              if(dlp.status!==204){
                const avData=dlp.data
                Object.keys(avData).slice(1).forEach(u=>{
                  // console.log(u);
                  let uc=dataConstants.useCaseFieldMapFull.find(ucf=>ucf.use_case_field===u)
                  tmUcs.push({
                                name:uc.use_case,
                                uc_name:u,
                                value:avData[u],
                                tech:'DLP'
                          })
                })
                ucs['DLP']=tmUcs
              }
              this.setState({useCases:ucs})
             // console.log(ucs)
    })
  }
  onChangeAdminValues=(techName,event)=>{
    let useCaseList={...this.state.useCases}
    console.log(useCaseList[techName].find(u=>u.uc_name===event.target.name));
    useCaseList[techName].find(u=>u.uc_name===event.target.name).value=event.currentTarget.value===''?0:event.currentTarget.value
    this.setState({ useCases:useCaseList });
  }
  adminValueSubmitHandler=(tech,useCaseConfigData)=>{
    let payload={'time':this.getDateWithTimeZone()}
    useCaseConfigData.forEach(e=>{
      payload[e.uc_name]=e.value
    })
    adminValuesService.setAdminValues(tech,payload).then(response => {
            if (response.status===201) {
                alert('Successfully set Admin Values. Please refresh from the Home Page to reflect the changes.')
            }
        }).catch(err =>{
            alert('Failed to set Admin Values. Please logout, refresh the page, and login to try again.')
        });
  }
  render(){
    return (
      <Paper className={classes.flexContainer}>
        <h1 style={{width:'100%',height: '10%',textAlign:'center',color:'rgba(233, 220, 220, 0.88)'}}>AdminConfigPage</h1>
      <div style={{width:'100%',padding:10}}>
        <Card className={'classes.card'} style={{width:'98%',display:'inline-block',backgroundColor:'rgb(86, 100, 114)',margin:'1%',color:'#fff'}}>
          <Typography variant="subheading" className={'classes.title'} style={{color:'#ddd',backgroundColor:'rgb(44, 62, 80)',padding:'1.5%'}}>
            Administrator Configurations
          </Typography>
          <CardContent  style={{textAlign:'center',
                                margin:'1%',
                                width:'98%',
                                borderRadius:'4px',
                                boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
                                padding:0,backgroundColor:'rgb(86, 100, 114)'}} >
            <AppBar position="static" style={{flexGrow: 1,backgroundColor: '#2c3e50',borderRadius:' 4px',color: '#fff',height: 48}}>
              <Tabs value={this.state.value} onChange={this.handleChangeTabs}>
                {Object.keys(this.state.useCases).map((t,i)=><Tab key={i} label={t} />)}
              </Tabs>
            </AppBar>
            {this.state.value === 0 && <UseCaseList usecases={this.state.useCases['Antivirus']} tech='Antivirus' onChange={this.onChangeAdminValues} adminValueSubmitHandler={this.adminValueSubmitHandler}/>}
            {this.state.value === 1 && <UseCaseList usecases={this.state.useCases['HIPS']} tech='HIPS' onChange={this.onChangeAdminValues} adminValueSubmitHandler={this.adminValueSubmitHandler}/>}
            {this.state.value === 2 && <UseCaseList usecases={this.state.useCases['Drive Encryption']} tech='Drive Encryption' onChange={this.onChangeAdminValues} adminValueSubmitHandler={this.adminValueSubmitHandler}/>}
            {this.state.value === 3 && <UseCaseList usecases={this.state.useCases['DLP']} tech='DLP' onChange={this.onChangeAdminValues} adminValueSubmitHandler={this.adminValueSubmitHandler}/>}
          </CardContent>
        </Card>
      </div>
      </Paper>
    )
  }
}
// this.state.validUseCase2&&this.state.validUseCase3&&
// this.state.validUseCase4&&this.state.validUseCase5&&
