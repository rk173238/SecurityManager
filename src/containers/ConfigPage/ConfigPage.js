import React,{Component} from 'react';
import classes from './ConfigPage.css';
import Loading from '../../common-components/Loading/Loading';

import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TechnologyConfig from './components/TechnologyConfig/TechnologyConfig';
import SubCategoryConfig from './components/SubCategoryConfig/SubCategoryConfig';
import UseCaseConfig from './components/UseCaseConfig/UseCaseConfig';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from '@material-ui/core/Button';
import {weightageService} from '../../services';
import {dataConstants} from '../../constants';
import { dataActions } from '../../actions';
import { connect } from 'react-redux';
class ConfigPage extends Component{
  constructor(props){
    super(props);
    this.state={
      technologyWeightageList:[
        {
          "aws-s3": 5
        },
        {
          "aws-ec2": 5
        },
        {
          "dlp_mcafee": 5
        },
        {
          "hips_mcafee": 5
        },
        {
          "firewall_pan": 5
        },
        {
          "firewall_tufin": 5
        },
        {
          "cmdb_servicenow": 5
        },
        {
          "antivirus_mcafee": 5
        },
        {
          "firewall_algosec": 5
        },
        {
          "firewall_firemon": 5
        },
        {
          "load balancer_f5": 5
        },
        {
          "antivirus_symantec": 5
        },
        {
          "antivirus_microsoft": 5
        },
        {
          "antivirus_trendmicro": 5
        },
        {
          "ticketing_servicenow": 5
        },
        {
          "drive-encryption_mcafee": 5
        },
        {
          "load balancer_barracuda": 5
        },
        {
          "firewall_skybox_security": 5
        },
        {
          "systems management_solarwinds": 5
        },
        {
          "vulnerability_management_tenableio": 5
        }
      ],
      subCategoryWeightageList:[
                                  {
                                    "operational_risk": [
                                      {
                                        "attack_surface": 0
                                      },
                                      {
                                        "insider_threats": 30
                                      },
                                      {
                                        "version_and_patch": 40
                                      },
                                      {
                                        "repetitive_issues": 0
                                      },
                                      {
                                        "baseline_configuration": 10
                                      },
                                      {
                                        "critical_configuration": 20
                                      }
                                    ]
                                  },
                                  {
                                    "operational_efficiency": [
                                      {
                                        "service_sla": 20
                                      },
                                      {
                                        "service_back_logs": 10
                                      },
                                      {
                                        "protection_readiness": 20
                                      },
                                      {
                                        "improvement_in_service": 20
                                      },
                                      {
                                        "resolution_effectiveness": 10
                                      },
                                      {
                                        "availability_of_artifacts": 20
                                      }
                                    ]
                                  },
                                  {
                                    "operational_reliability": [
                                      {
                                        "device_inventory": 10
                                      },
                                      {
                                        "persistent_issues": 20
                                      },
                                      {
                                        "capacity_management": 20
                                      },
                                      {
                                        "service_performance": 0
                                      },
                                      {
                                        "service_availability": 50
                                      }
                                    ]
                                  }
                                ],
      useCaseWeightageList:[
        {
          "AWS-s3": [
            {
              "policy": 15
            },
            {
              "storage": 10
            },
            {
              "location": 15
            },
            {
              "lifecycle": 15
            },
            {
              "encryption": 15
            },
            {
              "versioning": 15
            },
            {
              "replication": 15
            }
          ]
        },
        {
          "AWS-ec2": [
            {
              "state": 16.6
            },
            {
              "location": 16.6
            },
            {
              "monitoring": 16.6
            },
            {
              "cpu_options": 16.6
            },
            {
              "vpc_details": 17
            },
            {
              "security_details": 16.6
            }
          ]
        },
        {
          "DLP_Mcafee": [
            {
              "last_update": 50
            },
            {
              "product_version": 50
            }
          ]
        },
        {
          "HIPS_Mcafee": [
            {
              "fw_fault": 10
            },
            {
              "fw_status": 10
            },
            {
              "hips_status": 10
            },
            {
              "nips_status": 10
            },
            {
              "product_status": 5
            },
            {
              "content_version": 10
            },
            {
              "product_version": 5
            },
            {
              "reboot_required": 5
            },
            {
              "service_running": 5
            },
            {
              "blocked_attackers": 10
            },
            {
              "fw_audit_mode_status": 10
            },
            {
              "ips_audit_mode_status": 10
            }
          ]
        },
        {
          "Firewall_PAN": [
            {
              "dns_config": 5
            },
            {
              "ntp_config": 5
            },
            {
              "sw_version": 10
            },
            {
              "risky_rules": 10
            },
            {
              "unused_rules": 10
            },
            {
              "banner_enabled": 5
            },
            {
              "untagged_rules": 10
            },
            {
              "logging_disabled": 10
            },
            {
              "threat_signature": 10
            },
            {
              "app_id_configuration": 5
            },
            {
              "firewall_availability": 10
            },
            {
              "unsecured_admin_access": 5
            },
            {
              "threat_profiles_enabled": 5
            }
          ]
        },
        {
          "Firewall_Tufin": [
            {
              "risky_rules": 10
            },
            {
              "unused_rules": 20
            },
            {
              "disabled_rules": 10
            },
            {
              "shadowed_rules": 20
            },
            {
              "snmp_compliance": 10
            },
            {
              "logging_disabled": 10
            },
            {
              "unsecured_features": 10
            },
            {
              "unattached_network_object": 10
            }
          ]
        },
        {
          "cmdb_ServiceNow": [
            {
              "monitor": 10
            },
            {
              "unverified": 20
            },
            {
              "fault_count": 10
            },
            {
              "install_status": 20
            },
            {
              "hardware_status": 20
            },
            {
              "operational_status": 20
            }
          ]
        },
        {
          "Antivirus_Mcafee": [
            {
              "dat_ver": 10
            },
            {
              "ap_enabled": 10
            },
            {
              "engine_ver": 10
            },
            {
              "last_update": 20
            },
            {
              "oas_enabled": 10
            },
            {
              "agent_version": 20
            },
            {
              "managed_state": 10
            },
            {
              "product_version": 10
            }
          ]
        },
        {
          "Firewall_Algosec": [
            {
              "PCI": 10
            },
            {
              "SOX": 10
            },
            {
              "GLBA": 10
            },
            {
              "NERC": 10
            },
            {
              "HIPAA": 10
            },
            {
              "ISO27001": 10
            },
            {
              "risky_rules": 10
            },
            {
              "NIST_800_171": 10
            },
            {
              "disabled_rules": 10
            },
            {
              "unlogged_rules": 10
            }
          ]
        },
        {
          "Firewall_Firemon": [
            {
              "status": 10
            },
            {
              "deny_rule": 10
            },
            {
              "stealth_rule": 10
            },
            {
              "unused_rules": 10
            },
            {
              "disabled_rules": 10
            },
            {
              "shadowed_rules": 10
            },
            {
              "redundant_rules": 5
            },
            {
              "snmp_compliance": 5
            },
            {
              "unsecured_features": 5
            },
            {
              "unauthorized_changes": 5
            },
            {
              "regulatory_compliance": 10
            },
            {
              "security_concern_index": 10
            }
          ]
        },
        {
          "Load Balancer_F5": [
            {
              "memory_used": 20
            },
            {
              "nat_enabled": 10
            },
            {
              "ntp_service": 20
            },
            {
              "snat_enabled": 10
            },
            {
              "product_version": 10
            },
            {
              "available_disk_space": 20
            },
            {
              "node_logging_disabled": 10
            }
          ]
        },
        {
          "Antivirus_Symantec": [
            {
              "status": 5
            },
            {
              "infected": 5
            },
            {
              "hi_status": 5
            },
            {
              "ap_enabled": 5
            },
            {
              "da_enabled": 5
            },
            {
              "edr_status": 5
            },
            {
              "ids_version": 5
            },
            {
              "ptp_enabled": 5
            },
            {
              "agent_version": 5
            },
            {
              "deploy_status": 5
            },
            {
              "last_scan_time": 5
            },
            {
              "tamper_enabled": 5
            },
            {
              "profile_version": 5
            },
            {
              "reboot_required": 5
            },
            {
              "avengine_enabled": 5
            },
            {
              "cids_drv_enabled": 5
            },
            {
              "firewall_enabled": 5
            },
            {
              "last_update_time": 5
            },
            {
              "worstinfection_idx": 10
            }
          ]
        },
        {
          "Antivirus_Microsoft": [
            {
              "version": 5
            },
            {
              "rtp_enabled": 5
            },
            {
              "engine_version": 5
            },
            {
              "pending_reboot": 5
            },
            {
              "product_status": 5
            },
            {
              "computer_status": 5
            },
            {
              "pending_fullscan": 5
            },
            {
              "antivirus_enabled": 5
            },
            {
              "last_quickscan_age": 5
            },
            {
              "antispyware_enabled": 5
            },
            {
              "pending_offlinescan": 5
            },
            {
              "antivirus_signature_age": 10
            },
            {
              "ioav_protection_enabled": 5
            },
            {
              "behavior_monitor_enabled": 5
            },
            {
              "antispyware_signature_age": 10
            },
            {
              "onaccess_protection_enabled": 5
            },
          ]
        },
        {
          "Antivirus_TrendMicro": [
            {
              "rootkit": 10
            },
            {
              "dlp_status": 10
            },
            {
              "agent_program": 5
            },
            {
              "falcon_engine": 5
            },
            {
              "virus_scan_engine": 10
            },
            {
              "intelli_trap_pattern": 10
            },
            {
              "data_protection_module": 5
            },
            {
              "smart_scan_agent_pattern": 10
            },
            {
              "advanced_threat_scan_engine": 5
            },
            {
              "spyware_grayware_scan_engine": 10
            },
            {
              "web_reputation_service_status": 10
            },
            {
              "file_reputation_service_status": 10
            }
          ]
        },
        {
          "Ticketing_Servicenow": [
            {
              "work_resolution_time": 25
            },
            {
              "total_resolution_time": 25
            },
            {
              "number_of_tickets_open": 25
            },
            {
              "number_of_tickets_closed": 25
            }
          ]
        },
        {
          "Drive-Encryption_Mcafee": [
            {
              "state_disk": 25
            },
            {
              "encryption_provider": 25
            },
            {
              "product_version_agent": 25
            },
            {
              "product_version_windows": 25
            }
          ]
        },
        {
          "Load Balancer_Barracuda": [
            {
              "secure_cookie": 20
            },
            {
              "request_limits": 10
            },
            {
              "url_protection": 10
            },
            {
              "double_decodeing": 20
            },
            {
              "parameter_protection": 20
            },
            {
              "suppress_return_code": 20
            }
          ]
        },
        {
          "Firewall_Skybox_Security": [
            {
              "deny_rule": 10
            },
            {
              "risky_rules": 10
            },
            {
              "stealth_rule": 10
            },
            {
              "disabled_rules": 10
            },
            {
              "shadowed_rules": 10
            },
            {
              "unlogged_rules": 20
            },
            {
              "redundant_rules": 10
            },
            {
              "symmetric_rules": 10
            },
            {
              "bidirectional_rules": 10
            }
          ]
        },
        {
          "Systems Management_Solarwinds": [
            {
              "cpu_usage": 10
            },
            {
              "node_status": 20
            },
            {
              "memory_usage": 20
            },
            {
              "peak_cpu_usage": 10
            },
            {
              "node_availability": 20
            },
            {
              "average_response_time": 20
            }
          ]
        },
        {
          "Vulnerability_Management_Tenableio": [
            {
              "has_agent": 25
            },
            {
              "last_scan_date": 25
            },
            {
              "last_update_performed": 25
            },
            {
              "vulnerability_severities": 25
            }
          ]
        }
      ],
      antivirus:false,
      dlp:false,
      monitoring:false,
      hips:false,
      firewall:false,
      encryption:false,
      valid:false,
      error:false,
      validSubCat0:false,
      errorSubCat0:false,
      validSubCat1:false,
      errorSubCat1:false,
      validSubCat2:false,
      errorSubCat2:false,
      validUseCase0:false,
      errorUseCase0:false,
      validUseCase1:false,
      errorUseCase1:false,
      validUseCase2:false,
      errorUseCase2:false,
      validUseCase3:false,
      errorUseCase3:false,
      validUseCase4:false,
      errorUseCase4:false,
      validUseCase5:false,
      errorUseCase5:false,
      newData:[]
    }
    this.initTechWeights()
    this.initSubCatWeights()
    this.initUseCaseWeights()
  }
  static getDerivedStateFromProps(nextProps,prevState){
    if(nextProps.newData.length!==0){
      // console.log('new data not 0');
      return {newData:nextProps.newData}
    }
    else{
      return prevState;
    }
  }
  getDateWithTimeZone=()=>{
    let m = new Date();
    let tz=m.toString().split('GMT')[1].split(' ')[0]
    let dateString = m.getUTCFullYear() + "-" +
                    ("0" + (m.getMonth()+1)).slice(-2) + "-" +
                    ("0" + m.getDate()).slice(-2) + " " +
                    ("0" + m.getHours()).slice(-2) + ":" +
                    ("0" + m.getMinutes()).slice(-2) + ":" +
                    ("0" + m.getSeconds()).slice(-2)
                    +tz.slice(0,3)+':'+tz.slice(3);
                    // console.log(dateString);
    return dateString;
  }
  technologySubmitHandler=(techData)=>{
    //convert techWeights to API POST
    let x={}
    techData.forEach(e=>{
      if(e){
        x[Object.keys(e)]=e[Object.keys(e)]
      }
    })
    const payload={'time':this.getDateWithTimeZone(),'tech_weightage':x}
    // console.log(payload);
    this.props.onSetWeightage('tech',payload);
    // weightageService.setWeightage('tech',payload)
  }
  subCatSubmitHandler=(subCatData)=>{
    let x={}
    // console.log(subCatData);
    subCatData.forEach(e=>{
      if(e){
        let y={}
        e[Object.keys(e)].forEach(se=>{
          if(se){
            y[Object.keys(se)]=se[Object.keys(se)]
          }
        })
        x[Object.keys(e)]=y
      }

    })
    const payload={'time':this.getDateWithTimeZone(),'subcat_weightage':x}
    // console.log(payload);
    this.props.onSetWeightage('subcat',payload);
  }
  useCaseSubmitHandler=(useCaseData)=>{
    let x={}
    useCaseData.forEach(e=>{
      if(e){
        let y={}
        e[Object.keys(e)].forEach(se=>{
          if(se){
            y[Object.keys(se)]=se[Object.keys(se)]
          }
        })
        x[Object.keys(e)]=y
      }
    })
    const payload={'time':this.getDateWithTimeZone(),'usecase_weightage':x}
    // console.log(payload);
    this.props.onSetWeightage('usecase',payload);
  }
  initTechWeights=()=>{
    weightageService.getWeightage('tech').then(res=>{
      let weightage=res.data['tech_weightage']
      let tech=[]
      Object.keys(weightage).forEach((t,i)=>{
          tech[i]={[t]:weightage[t]}
      })
      console.log(tech);
      this.setState({technologyWeightageList:tech})
    })

  }
  initSubCatWeights=()=>{
    weightageService.getWeightage('subcat').then(res=>{
      let weightage=res.data['subcat_weightage']
      let subcat=[]
      Object.keys(weightage).forEach((t,i)=>{
      let subcats=[]
      Object.keys(weightage[t]).forEach((s,j)=>{
      	subcats[j]={[s]:weightage[t][s]}
      })
      subcat[i]={[t]:subcats}
      })
      console.log(subcat);
      this.setState({subCategoryWeightageList:subcat})
    })
  }
  initUseCaseWeights=()=>{
    weightageService.getWeightage('usecase').then(res=>{
      let weightage=res.data['usecase_weightage']
      let usecase=[]
      Object.keys(weightage).forEach((t,i)=>{
      let usecases=[]
      Object.keys(weightage[t]).forEach((s,j)=>{
        usecases[j]={[s]:weightage[t][s]}
      })
      usecase[i]={[t]:usecases}
      })
      console.log(usecase);
      this.setState({useCaseWeightageList:usecase})
    })
  }
  onChangeTechnologyWeightage=(techName,event)=>{
    let technologyWeightageList=[...this.state.technologyWeightageList]
    let i=technologyWeightageList.indexOf(technologyWeightageList.find(t=>Object.keys(t).includes(techName)))
    technologyWeightageList[i] = {[event.target.name]:event.currentTarget.value===''?0:parseInt(event.currentTarget.value,10)}
    this.setState({ technologyWeightageList });
  }
  onChangeSubCatWeightage=(subCatName,catName,event)=>{
    let subCategoryWeightageList=[...this.state.subCategoryWeightageList]
    let c=subCategoryWeightageList.indexOf(subCategoryWeightageList.find(t=>Object.keys(t).includes(catName)))
    let subCatList=Object.keys({...this.state.subCategoryWeightageList[c]}).length!==0?{...this.state.subCategoryWeightageList[c]}:[]
    subCatList=subCatList[catName]?[...subCatList[catName]]:[]
    let i=subCatList.indexOf(subCatList.find(t=>Object.keys(t).includes(subCatName)))
    subCatList[i] = {[event.target.name]:event.currentTarget.value===''?0:parseInt(event.currentTarget.value,10)}
    subCategoryWeightageList[c] = {[catName]:subCatList}
    this.setState({ subCategoryWeightageList });
    // console.log(this.state.subCategoryWeightageList);
  }
  onChangeUseCaseWeightage=(useCaseName,techName,event)=>{
    let useCaseWeightageList=[...this.state.useCaseWeightageList]
    let t=useCaseWeightageList.indexOf(useCaseWeightageList.find(t=>Object.keys(t).includes(techName)))
    let useCaseList=Object.keys({...this.state.useCaseWeightageList[t]}).length!==0?{...this.state.useCaseWeightageList[t]}:[]
    useCaseList=useCaseList[techName]?[...useCaseList[techName]]:[]
    let i=useCaseList.indexOf(useCaseList.find(t=>Object.keys(t).includes(useCaseName)))
    useCaseList[i] = {[event.target.name]:event.currentTarget.value===''?0:parseInt(event.currentTarget.value,10)}
    useCaseWeightageList[t]={[techName]:useCaseList}
    this.setState({ useCaseWeightageList });
    // console.log(this.state.useCaseWeightageList);
  }
  onChangeCheckBox=(e,checked)=>{
    let weightage=e.target.name+'Weightage'
    checked?this.setState({
              [e.target.name] : checked,
              valid:false
            }):this.setState({
                      [e.target.name] : checked,
                      [weightage]:'',
                      valid:false
                    })

  }
  handleSubCatWeightageValidate=(i,catName,e)=>{
    let catWeightageList=this.state.subCategoryWeightageList.filter(t=>t?Object.keys(t)[0]===catName:false)
    // console.log(e);
    let subCatWeightage=catWeightageList[0]?Object.values(catWeightageList[0])[0].reduce((total, sc) => {
                                                             total += sc?Object.values(sc)[0]:0;
                                                             return total;
                                                           },0):0
    if(subCatWeightage===100){
      this.setState({['validSubCat'+i]:true,errorSubCat:false})
    }
    else{
      this.setState({errorSubCat:true,['validSubCat'+i]:false})
    }
  }
  handleTechnologyWeightageValidate=(e)=>{
    let techWeightage=this.state.technologyWeightageList.reduce((total, tech) => {
                             total += tech?Object.values(tech)[0]:0;
                             return total;
                      },0)
    if(techWeightage===100){
      this.setState({valid:true,error:false})
    }
    else{
      this.setState({error:true,valid:false})
    }
  }
  handleUseCaseWeightageValidate=(t,techName,e)=>{
    let technologyUseCaseWeightageList=this.state.useCaseWeightageList.filter(t=>t?Object.keys(t)[0]===techName:false)
    let useCaseWeightage=technologyUseCaseWeightageList[0]?Object.values(technologyUseCaseWeightageList[0])[0].reduce((total, uc) => {
                                                             total += uc?Object.values(uc)[0]:0;
                                                             return total;
                                                           },0):0
    if(useCaseWeightage===100){
      this.setState({['validUseCase'+t]:true,errorUseCase:false})
    }
    else{
      this.setState({errorUseCase:true,['validUseCase'+t]:false})
    }
  }
  techWiseUseCaseDataMaker=(data)=>{
    let techWiseUseCases=[];
    dataConstants.technologyList.forEach(techName=>{
      let techUseCases=[];
      data.forEach(main=>{
        main.subCatData.forEach(subCat=>{
          subCat.technologyData.filter(tech=>tech.techName===techName).forEach(techData=>{
            techUseCases.push(...techData.useCaseData)
          })
        })
      })
      techWiseUseCases.push({technology:techName,useCases:techUseCases})
    })
    return techWiseUseCases
  }
  componentWillUnmount(){
    // console.log('unmount');
    if(this.props.setWeightage){
      console.log('componentWillUnmount');
      localStorage.removeItem('data');
      window.location.reload();
    }
  }
  render(){
    if(this.props.settingWeightage){
      return (<Loading/>)
    }
    else{
      return (
        <Paper className={classes.flexContainer}>
          <h1 style={{width:'100%',height: '10%',textAlign:'center',color:'rgba(233, 220, 220, 0.88)'}}>ConfigPage</h1>
          <div style={{width:'100%',padding:10}}>
            <ExpansionPanel >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{fill:'#fff'}}/>} style={{backgroundColor:'#2c3e50',color:'#fff',height:48,minHeight:48}}>
                <Typography style={{color:'#fff'}}>Technology Weightage</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{backgroundColor:'rgb(65, 81, 97)',color:'#fff'}}>
                <TechnologyConfig state={this.state}
                                  data={this.techWiseUseCaseDataMaker(this.state.newData)}
                                  handleTechnologyWeightageValidate={this.handleTechnologyWeightageValidate}
                                  onChangeCheckBox={this.onChangeCheckBox}
                                  onChangeTechnologyWeightage={this.onChangeTechnologyWeightage}/>
              </ExpansionPanelDetails>
              {this.state.valid&&(<ExpansionPanelActions  style={{backgroundColor:'rgb(65, 81, 97)',color:'#fff'}}>
                <Button size="small" variant="contained">Cancel</Button>
              <Button size="small" variant="contained" onClick={()=>this.technologySubmitHandler(this.state.technologyWeightageList)}>
                  Submit
                </Button>
              </ExpansionPanelActions>)}
            </ExpansionPanel>
          </div>
          <div style={{width:'100%',padding:10}}>
            <ExpansionPanel >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{fill:'#fff'}}/>} style={{backgroundColor:'#2c3e50',color:'#fff',height:48,minHeight:48}}>
                <Typography style={{color:'#fff'}}>SubCategory Weightage</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{backgroundColor:'rgb(65, 81, 97)',color:'#fff'}}>
                {this.state.newData.length!==0?<SubCategoryConfig data={this.state.newData}
                                                                  handleTechnologyWeightageValidate={this.handleSubCatWeightageValidate}
                                                                  onChangeTechnologyWeightage={this.onChangeSubCatWeightage}
                                                                  state={this.state}/>:<div></div>}
              </ExpansionPanelDetails>
              {this.state.validSubCat0&&this.state.validSubCat1&&<ExpansionPanelActions  style={{backgroundColor:'rgb(65, 81, 97)',color:'#fff'}}>
                <Button size="small" variant="contained">Cancel</Button>
              <Button size="small" variant="contained" onClick={()=>this.subCatSubmitHandler(this.state.subCategoryWeightageList)}>
                  Submit
                </Button>
              </ExpansionPanelActions>}
            </ExpansionPanel>
          </div>
          <div style={{width:'100%',padding:10}}>
            <ExpansionPanel >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{fill:'#fff'}}/>} style={{backgroundColor:'#2c3e50',color:'#fff',height:48,minHeight:48}}>
                <Typography style={{color:'#fff'}}>UseCase Weightage</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{backgroundColor:'rgb(65, 81, 97)',color:'#fff'}}>
                {this.state.newData.length!==0?<UseCaseConfig data={this.techWiseUseCaseDataMaker(this.state.newData)}
                                                              onChangeUseCaseWeightage={this.onChangeUseCaseWeightage}
                                                              handleUseCaseWeightageValidate={this.handleUseCaseWeightageValidate}
                                                              state={this.state}/>:<div></div>}
              </ExpansionPanelDetails>
              {this.state.validUseCase0&&
                <ExpansionPanelActions  style={{backgroundColor:'rgb(65, 81, 97)',color:'#fff'}}>
                  <Button size="small" variant="contained">Cancel</Button>
                  <Button size="small" variant="contained" onClick={()=>this.useCaseSubmitHandler(this.state.useCaseWeightageList)}>
                    Submit
                  </Button>
                </ExpansionPanelActions>}
            </ExpansionPanel>
          </div>
        </Paper>
      )
    }

  }
}
// this.state.validUseCase2&&this.state.validUseCase3&&
// this.state.validUseCase4&&this.state.validUseCase5&&
const mapStateToProps=(state)=> {
    const {
            settingWeightage,
            setWeightage} = state.fetchData;
    return {
              settingWeightage,
              setWeightage,
              alert: state.alert
            };
}
const mapDispatchToProps = dispatch => {
    return {
      onSetWeightage: (weightageType,payload) =>  dispatch(dataActions.setWeightage(weightageType,payload))
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ConfigPage);
