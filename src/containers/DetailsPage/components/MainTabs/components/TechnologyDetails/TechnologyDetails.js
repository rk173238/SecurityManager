import React,{Component,Fragment} from 'react'
import Paper from 'material-ui/Paper';
import classes from './TechnologyDetails.css'
import TechnologiesWithUsecases from '../TechnologiesWithUsecases/TechnologiesWithUsecases'
import TechnologyTracker from '../../../../../../common-components/TechnologyTracker/NewTechnologyTracker'
import GroupedUsecasesBarChart from '../../../../../../common-components/GroupedUsecasesBarChart/GroupedUsecasesBarChart'
import DeviceList from '../../../../../../common-components/DeviceList/DeviceList'
import UseCases from '../../../../../../common-components/UseCases/Usecases';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {scrollbar} from '../../../../../../commonfiles/scrollbar.css';

class TechnologyDetails extends Component{

  state={
    showTechOnTracker:'',
    showDeviceList:false,
    selectedUsecase:'',
    usecaseProperty:{},
    usecaseScore:0,
    technologyScore:0
  }
  myRef = React.createRef();
  showTechOnTracker=(tech)=>{
    this.setState({showTechOnTracker:tech})
    // console.log(tech)
  }
  showDeviceList=(tech,usecase,score,techScore)=>{
    console.log(techScore)
    this.setState(
      {showTechOnTracker:tech,
      selectedUsecase:usecase,
      showDeviceList:true,
      usecaseProperty:usecase,
      usecaseScore:score,
      technologyScore:techScore
    })
  }
  


    render(){
        return(
          <Fragment>
            <Row style={{height:"100%"}} noGutters>
              <Col md={2} style={{backgroundColor:'transparent',}}>
                <TechnologyTracker 
                  choosenSubCategory={this.props.choosenSubCategory} 
                  showTechOnTracker={this.state.showTechOnTracker} 
                  technologyScore={this.state.technologyScore} 
                  categoriesData={this.props.techScoreData}/>
              </Col>
              <Col md={10} 
                   className={classes.technologySection + ' ' + scrollbar} 
                   style={{backgroundColor:'transparent',boxShadow: "-1px 0 10px #0000007a"}}>
                {this.state.showTechOnTracker?
                    this.state.showDeviceList && this.state.selectedUsecase?
                      <div>
                        <DeviceList 
                          techName={this.state.showTechOnTracker} 
                          usecase={this.state.selectedUsecase} 
                          usecaseScore={this.state.usecaseScore} />
                      </div>
                      :
                      <div>
                        {/* <GroupedUsecasesBarChart technology={this.state.showTechOnTracker}  showDeviceList={this.showDeviceList}></GroupedUsecasesBarChart> */}
                        No Content
                      </div>
                  :
                  <div className={classes.technologieswithusecases} >
                    {console.log(this.props.choosenSubCategory)}
                    <TechnologiesWithUsecases 
                      choosenSubCategory={this.props.choosenSubCategory} 
                      showDeviceList={this.showDeviceList} 
                      showTechOnTracker={this.showTechOnTracker} 
                      subCatData={this.props.choosenSubCategory.split('_')[0]==='Technology'?
                                  techdummyUsecase[this.props.choosenSubCategory.split('_')[2]]
                                  :processdummyUsecase[this.props.choosenSubCategory.split('_')[2]]}
                      // processSubcatData={processdummyUsecase[this.props.choosenSubCategory.split('_')[2]]}
                      // techSubcatData={techdummyUsecase[this.props.choosenSubCategory.split('_')[2]]}
                      />
                  </div>
                }
              </Col>
            </Row>
          </Fragment>
            // <Fragment>
            //   <div style={{display:'flex'}}>
            //     <Paper style={{width:'20%',backgroundColor:'transparent',}}>
            //       <TechnologyTracker choosenSubCategory={this.props.choosenSubCategory} showTechOnTracker={this.state.showTechOnTracker} technologyScore={this.state.technologyScore}></TechnologyTracker>
            //     </Paper>
            //     <Paper className={classes.technologySection} style={{backgroundColor:'transparent'}}>
            //       {this.state.showTechOnTracker?
            //           this.state.showDeviceList && this.state.selectedUsecase?
            //             <Paper style={{backgroundColor:'transparent'}}>
                         
            //               <DeviceList techName={this.state.showTechOnTracker} usecase={this.state.selectedUsecase} usecaseScore={this.state.usecaseScore}></DeviceList>
            //             </Paper>
            //             :
            //             <Paper style={{backgroundColor:'transparent'}}>
            //               {/* <GroupedUsecasesBarChart technology={this.state.showTechOnTracker}  showDeviceList={this.showDeviceList}></GroupedUsecasesBarChart> */}
            //             tttttttttttttttttttt
            //             </Paper>
            //         :
            //         <Paper className={classes.technologieswithusecases} style={{backgroundColor:'transparent'}}>
            //           <TechnologiesWithUsecases choosenSubCategory={this.props.choosenSubCategory} showDeviceList={this.showDeviceList} showTechOnTracker={this.showTechOnTracker}></TechnologiesWithUsecases>
            //         </Paper>
            //       }

            //     </Paper>
                
            //   </div>
            // </Fragment>
        )
    }
}
const mapStateToProps=state=>{
  // console.log(state)
  return{
    subCategoryData:state.fetchSubCategoryData.subCategoryData,
  }
}

export default connect(mapStateToProps)(TechnologyDetails);
let techdummyUsecase={
  // Management
  "Insider Threats": {
    "HIPS-McAfee": {
        "score": 100.0,
        "usecases": {
            "fw_fault": 100.0,
            "blocked_attackers": 100.0
        }
    },
    "Antivirus-Symantec": {
        "score": 13.33,
        "usecases": {
            "last_scan_time": 0.0,
            "firewall_enabled": 40.0,
            "last_update_time": 0.0
        }
    },
    "FirewallAnalyzer-Firemon": {
        "score": 60.0,
        "usecases": {
            "deny_rule": 0.0,
            "stealth_rule": 80.0,
            "unsecured_features": 60.0,
            "unauthorized_changes": 100.0
        }
    }
  },
  "Service SLA": {
    "CMDB-ServiceNow": {
        "score": 100.0,
        "usecases": {
            "monitor": 100.0,
            "unverified": 100.0,
            "fault_count": 100.0,
            "install_status": 100.0,
            "hardware_status": 100.0,
            "operational_status": 100.0
        }
    },
    "Ticketing-ServiceNow": {
        "score": 53.33,
        "usecases": {
            "work_resolution_time": 80.0,
            "total_resolution_time": 0.0,
            "number_of_tickets_closed": 80.0
        }
    }
},
  "Attack Surface": {
    "HIPS-McAfee": {
        "score": 100.0,
        "usecases": {
            "reboot_required": 100.0
        }
    },
    "Antivirus-Symantec": {
        "score": 80.0,
        "usecases": {
            "infected": 100.0,
            "reboot_required": 100.0,
            "worstinfection_idx": 40.0
        }
    },
    "DLPDiscover-Symantec": {
        "score": 6.98,
        "usecases": {
            "rule_violation_count": 6.98
        }
    },
    "DLPEndpoint-Symantec": {
        "score": 0.0,
        "usecases": {
            "rule_violation_count": 0.0
        }
    }
},
"Cyber Insurance": {
    "Process-Process": {
        "score": 100.0,
        "usecases": {
            "insurance_coverage": 100.0,
            "insurance_liabilities": 100.0
        }
    }
},
  "Device Inventory": {
    "Monitoring-Solarwinds": {
        "score": 100.0,
        "usecases": {
            "node_status": 100.0
        }
    }
},
"Persistent Issues": {
    "Monitoring-Solarwinds": {
        "score": 100.0,
        "usecases": {
            "average_response_time": 100.0
        }
    }
},
"Version and Patch": {
  "AV-McAfee": {
      "score": 25.0,
      "usecases": {
          "dat_ver": 0.0,
          "engine_ver": 0.0,
          "agent_version": 100.0,
          "product_version": 0.0
      }
  },
  "HIPS-McAfee": {
      "score": 100.0,
      "usecases": {
          "content_version": 100.0,
          "product_version": 100.0
      }
  },
  "DLP-Symantec": {
      "score": 100.0,
      "usecases": {
          "enforce_version": 100.0
      }
  },
  "LoadBalancer-F5": {
      "score": 0.0,
      "usecases": {
          "product_version": 0.0
      }
  },
  "Antivirus-Symantec": {
      "score": 0.0,
      "usecases": {
          "ids_version": 0.0,
          "agent_version": 0.0
      }
  }
},
"Service Performance": {
  "LoadBalancer-F5": {
      "score": 63.45,
      "usecases": {
          "memory_used": 66.73,
          "available_disk_space": 60.16
      }
  },
  "Monitoring-Solarwinds": {
      "score": 82.91,
      "usecases": {
          "cpu_usage": 91.4,
          "memory_usage": 85.94,
          "peak_cpu_usage": 71.4
      }
  }
},
"Service Availability": {
  "Monitoring-Solarwinds": {
      "score": 100.0,
      "usecases": {
          "node_availability": 100.0
      }
  }
},
"Baseline Configuration": {
  "S3-AWS": {
      "score": 25.0,
      "usecases": {
          "storage": 87.5,
          "location": 12.5,
          "versioning": 0.0,
          "replication": 0.0
      }
  },
  "EC2-AWS": {
      "score": 25.53,
      "usecases": {
          "state": 63.83,
          "location": 0.0,
          "monitoring": 0.0,
          "cpu_options": 38.3
      }
  },
  "AV-McAfee": {
      "score": 100.0,
      "usecases": {
          "last_update": 100.0,
          "managed_state": 100.0
      }
  },
  "HIPS-McAfee": {
      "score": 100.0,
      "usecases": {
          "service_running": 100.0
      }
  },
  "DLP-Symantec": {
      "score": 100.0,
      "usecases": {
          "agents": 100.0
      }
  },
  "LoadBalancer-F5": {
      "score": 74.75,
      "usecases": {
          "nat_enabled": 74.75,
          "snat_enabled": 74.75
      }
  },
  "Antivirus-Symantec": {
      "score": 36.67,
      "usecases": {
          "ap_enabled": 60.0,
          "da_enabled": 20.0,
          "ptp_enabled": 20.0,
          "tamper_enabled": 60.0,
          "avengine_enabled": 60.0,
          "cids_drv_enabled": 0.0
      }
  },
  "DLPDiscover-Symantec": {
      "score": 6.98,
      "usecases": {
          "severity": 6.98
      }
  },
  "DLPEndpoint-Symantec": {
      "score": 50.0,
      "usecases": {
          "severity": 0.0,
          "blocked_status": 100.0
      }
  },
  "FirewallAnalyzer-Firemon": {
      "score": 74.38,
      "usecases": {
          "status": 100.0,
          "snmp_compliance": 0.0,
          "regulatory_compliance": 100.0,
          "security_concern_index": 97.53
      }
  }
},
"Critical Configuration": {
  "S3-AWS": {
      "score": 0.0,
      "usecases": {
          "policy": 0.0,
          "lifecycle": 0.0,
          "encryption": 0.0
      }
  },
  "EC2-AWS": {
      "score": 0.0,
      "usecases": {
          "vpc_details": 0.0,
          "security_details": 0.0
      }
  },
  "AV-McAfee": {
      "score": 0.0,
      "usecases": {
          "ap_enabled": 0.0,
          "oas_enabled": 0.0
      }
  },
  "HIPS-McAfee": {
      "score": 66.67,
      "usecases": {
          "fw_status": 100.0,
          "hips_status": 100.0,
          "nips_status": 100.0,
          "product_status": 100.0,
          "fw_audit_mode_status": 0.0,
          "ips_audit_mode_status": 0.0
      }
  },
  "DLP-Symantec": {
      "score": 100.0,
      "usecases": {
          "scan_assignments": 100.0
      }
  },
  "LoadBalancer-F5": {
      "score": 8.49,
      "usecases": {
          "ntp_service": 16.99,
          "node_logging_disabled": 0.0
      }
  },
  "Antivirus-Symantec": {
      "score": 30.0,
      "usecases": {
          "status": 60.0,
          "hi_status": 0.0,
          "edr_status": 0.0,
          "deploy_status": 60.0
      }
  },
  "FirewallAnalyzer-Firemon": {
      "score": 91.65,
      "usecases": {
          "unused_rules": 66.95,
          "disabled_rules": 100.0,
          "shadowed_rules": 100.0,
          "redundant_rules": 99.64
      }
  }
},
"Improvement in Service": {
  "Ticketing-ServiceNow": {
      "score": 100.0,
      "usecases": {
          "number_of_tickets_open": 100.0
      }
  }
},

}
let processdummyUsecase={
  // Management
  "IT Assets Management":{
    "IT Assets Management":{
    'score':50,
    'usecases':{
      'asset_management_policy':40,
      'asset_non_compliance':40,
    }}
  },
  "Access Management":{
    "Access Management":{
    'score':50,
    'usecases':{
      'average_time':40,
      'user_ids':40,
      'privileged_user':40,
      'idle_user':40,
      'critical_system_review':40,
      'anomalies_detected':40,
      'new_user_id':40,
    }}
  },
  "Bussiness Continuity":{
    'score':50,
    'usecases':{
      'Security Monitoring Process':40
    }
  },
  //Governance
  'Security Monitoring':{
    'score':50,
    'usecases':{
      'Security Monitoring Process':40
    }
  },
  'Third Party Security':{
    'score':50,
    'usecases':{
      'Security Monitoring Process':40
    }
  },
  'Compliance Management':{
    'score':50,
    'usecases':{
      'Security Monitoring Process':40
    }
  },
  'Budget':{
    'score':50,
    'usecases':{
      'Security Monitoring Process':40
    }
  },
  'Cyber Insurance':{
    'score':50,
    'usecases':{
      'Security Monitoring Process':40
    }
  },
  'Control Testing':{
    'score':50,
    'usecases':{
      'Security Monitoring Process':40
    }
  },
  //Framework
  'Information Security Policy':{
    'score':50,
    'usecases':{
      'Security Monitoring Process':40
    }
  },
  'Security Incident':{
    'score':50,
    'usecases':{
      'Security Monitoring Process':40
    }
  },
}