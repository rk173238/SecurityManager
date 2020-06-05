import React,{Component} from 'react'
import ProductView from './ProductView/ProductView';
import {analysisService} from '../../services/analysis_service';
import {scrollbar} from '../../commonfiles/scrollbar.css';
class InventoryPage extends Component{
    state={
        technologiesData:'',
    }
    componentWillMount=()=>{
        // analysisService.fetchAllTechnologyData().then(res=>{
        //     this.setState({technologiesData:res})
        // })
    }
    render(){

        return(
            <div style={{overflowY:"auto", height:"100%"}} className={scrollbar}>
                <ProductView data={data1}></ProductView>
            </div>
            
        )
    }
}
export default InventoryPage;
let data1=[
    {
      "data": {
        "time": "2020-04-15T00:30:00.833006Z",
        "technology_name": "AV-McAfee",
        "technology_compliance": 50,
        "usecase_compliance": {
          "dat_ver": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 5
            },
            "compliance_score": 0
          },
          "ap_enabled": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 5
            },
            "compliance_score": 0
          },
          "engine_ver": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 5
            },
            "compliance_score": 0
          },
          "last_update": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "oas_enabled": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 5
            },
            "compliance_score": 0
          },
          "agent_version": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "managed_state": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "product_version": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 5
            },
            "compliance_score": 0
          }
        }
      },
      "technology": "AV-McAfee",
      "compliance": 50,
      "count": 5,
      "deviceCountChanges": 0,
      "techScoreChanges": "0.00"
    },
    {
      "data": {
        "time": "2020-04-15T00:30:00.374000Z",
        "technology_name": "FirewallAnalyzer-Firemon",
        "technology_compliance": 77.43,
        "usecase_compliance": {
          "status": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "deny_rule": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 5
            },
            "compliance_score": 0
          },
          "stealth_rule": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "unused_rules": {
            "device_count": {
              "low": 2,
              "medium": 3,
              "critical": 0
            },
            "compliance_score": 66.95
          },
          "disabled_rules": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "shadowed_rules": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "redundant_rules": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 99.64
          },
          "snmp_compliance": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 5
            },
            "compliance_score": 0
          },
          "unsecured_features": {
            "device_count": {
              "low": 3,
              "medium": 0,
              "critical": 2
            },
            "compliance_score": 60
          },
          "unauthorized_changes": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "regulatory_compliance": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "security_concern_index": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 97.53
          }
        }
      },
      "technology": "FirewallAnalyzer-Firemon",
      "compliance": 77.43,
      "count": 5,
      "deviceCountChanges": 0,
      "techScoreChanges": "0.00"
    },
    {
      "data": {
        "time": "2020-04-15T00:30:01.044003Z",
        "technology_name": "DLP-Symantec",
        "technology_compliance": 100,
        "usecase_compliance": {
          "agents": {
            "device_count": {
              "low": 1,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "enforce_version": {
            "device_count": {
              "low": 1,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "scan_assignments": {
            "device_count": {
              "low": 1,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          }
        }
      },
      "technology": "DLP-Symantec",
      "compliance": 100,
      "count": 1,
      "deviceCountChanges": 0,
      "techScoreChanges": "0.00"
    },
    {
      "data": {
        "time": "2020-04-15T00:30:01.005004Z",
        "technology_name": "DLPEndpoint-Symantec",
        "technology_compliance": 40,
        "usecase_compliance": {
          "severity": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 8
            },
            "compliance_score": 0
          },
          "blocked_status": {
            "device_count": {
              "low": 8,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "rule_violation_count": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 8
            },
            "compliance_score": 0
          }
        }
      },
      "technology": "DLPEndpoint-Symantec",
      "compliance": 40,
      "count": 8,
      "deviceCountChanges": 0,
      "techScoreChanges": "0.00"
    },
    {
      "data": {
        "time": "2020-04-15T00:30:00.958010Z",
        "technology_name": "DLPDiscover-Symantec",
        "technology_compliance": 6.98,
        "usecase_compliance": {
          "severity": {
            "device_count": {
              "low": 3,
              "medium": 0,
              "critical": 40
            },
            "compliance_score": 6.98
          },
          "rule_violation_count": {
            "device_count": {
              "low": 3,
              "medium": 0,
              "critical": 40
            },
            "compliance_score": 6.98
          }
        }
      },
      "technology": "DLPDiscover-Symantec",
      "compliance": 6.98,
      "count": 43,
      "deviceCountChanges": 0,
      "techScoreChanges": "0.00"
    },
    {
      "data": {
        "time": "2020-04-15T00:30:00.655000Z",
        "technology_name": "Antivirus-Symantec",
        "technology_compliance": 33,
        "usecase_compliance": {
          "status": {
            "device_count": {
              "low": 3,
              "medium": 0,
              "critical": 2
            },
            "compliance_score": 60
          },
          "infected": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "hi_status": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 5
            },
            "compliance_score": 0
          },
          "ap_enabled": {
            "device_count": {
              "low": 3,
              "medium": 0,
              "critical": 2
            },
            "compliance_score": 60
          },
          "da_enabled": {
            "device_count": {
              "low": 1,
              "medium": 0,
              "critical": 4
            },
            "compliance_score": 20
          },
          "edr_status": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 5
            },
            "compliance_score": 0
          },
          "ids_version": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 5
            },
            "compliance_score": 0
          },
          "ptp_enabled": {
            "device_count": {
              "low": 1,
              "medium": 0,
              "critical": 4
            },
            "compliance_score": 20
          },
          "agent_version": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 5
            },
            "compliance_score": 0
          },
          "deploy_status": {
            "device_count": {
              "low": 3,
              "medium": 0,
              "critical": 2
            },
            "compliance_score": 60
          },
          "last_scan_time": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 5
            },
            "compliance_score": 0
          },
          "tamper_enabled": {
            "device_count": {
              "low": 3,
              "medium": 0,
              "critical": 2
            },
            "compliance_score": 60
          },
          "reboot_required": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "avengine_enabled": {
            "device_count": {
              "low": 3,
              "medium": 0,
              "critical": 2
            },
            "compliance_score": 60
          },
          "cids_drv_enabled": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 5
            },
            "compliance_score": 0
          },
          "firewall_enabled": {
            "device_count": {
              "low": 2,
              "medium": 0,
              "critical": 3
            },
            "compliance_score": 40
          },
          "last_update_time": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 5
            },
            "compliance_score": 0
          },
          "worstinfection_idx": {
            "device_count": {
              "low": 2,
              "medium": 0,
              "critical": 3
            },
            "compliance_score": 40
          }
        }
      },
      "technology": "Antivirus-Symantec",
      "compliance": 33,
      "count": 5,
      "deviceCountChanges": 0,
      "techScoreChanges": "0.00"
    },
    {
      "data": {
        "time": "2020-04-15T00:30:00.416004Z",
        "technology_name": "HIPS-McAfee",
        "technology_compliance": 80,
        "usecase_compliance": {
          "fw_fault": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "fw_status": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "hips_status": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "nips_status": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "product_status": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "content_version": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "product_version": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "reboot_required": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "service_running": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "blocked_attackers": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "fw_audit_mode_status": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 5
            },
            "compliance_score": 0
          },
          "ips_audit_mode_status": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 5
            },
            "compliance_score": 0
          }
        }
      },
      "technology": "HIPS-McAfee",
      "compliance": 80,
      "count": 5,
      "deviceCountChanges": 0,
      "techScoreChanges": "0.00"
    },
    {
      "data": {
        "time": "2020-04-15T00:30:00.702002Z",
        "technology_name": "LoadBalancer-F5",
        "technology_compliance": 43.73,
        "usecase_compliance": {
          "memory_used": {
            "device_count": {
              "low": 2,
              "medium": 3,
              "critical": 0
            },
            "compliance_score": 66.73
          },
          "nat_enabled": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 74.75
          },
          "ntp_service": {
            "device_count": {
              "low": 0,
              "medium": 2,
              "critical": 3
            },
            "compliance_score": 16.99
          },
          "snat_enabled": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 74.75
          },
          "product_version": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 5
            },
            "compliance_score": 0
          },
          "available_disk_space": {
            "device_count": {
              "low": 3,
              "medium": 0,
              "critical": 2
            },
            "compliance_score": 60.16
          },
          "node_logging_disabled": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 5
            },
            "compliance_score": 0
          }
        }
      },
      "technology": "LoadBalancer-F5",
      "compliance": 43.73,
      "count": 5,
      "deviceCountChanges": 0,
      "techScoreChanges": "0.00"
    },
    {
      "data": {
        "time": "2020-04-15T00:30:00.609000Z",
        "technology_name": "S3-AWS",
        "technology_compliance": 10.62,
        "usecase_compliance": {
          "policy": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 8
            },
            "compliance_score": 0
          },
          "storage": {
            "device_count": {
              "low": 7,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 87.5
          },
          "location": {
            "device_count": {
              "low": 1,
              "medium": 0,
              "critical": 7
            },
            "compliance_score": 12.5
          },
          "lifecycle": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 8
            },
            "compliance_score": 0
          },
          "encryption": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 8
            },
            "compliance_score": 0
          },
          "versioning": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 8
            },
            "compliance_score": 0
          },
          "replication": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 8
            },
            "compliance_score": 0
          }
        }
      },
      "technology": "S3-AWS",
      "compliance": 10.62,
      "count": 8,
      "deviceCountChanges": 0,
      "techScoreChanges": "0.00"
    },
    {
      "data": {
        "time": "2020-04-15T00:30:00.564003Z",
        "technology_name": "EC2-AWS",
        "technology_compliance": 11.19,
        "usecase_compliance": {
          "state": {
            "device_count": {
              "low": 14,
              "medium": 0,
              "critical": 32
            },
            "compliance_score": 30.43
          },
          "location": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 46
            },
            "compliance_score": 0
          },
          "monitoring": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 46
            },
            "compliance_score": 0
          },
          "cpu_options": {
            "device_count": {
              "low": 17,
              "medium": 0,
              "critical": 29
            },
            "compliance_score": 36.96
          },
          "vpc_details": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 46
            },
            "compliance_score": 0
          },
          "security_details": {
            "device_count": {
              "low": 0,
              "medium": 0,
              "critical": 46
            },
            "compliance_score": 0
          }
        }
      },
      "technology": "EC2-AWS",
      "compliance": 11.19,
      "count": 46,
      "deviceCountChanges": 0,
      "techScoreChanges": "0.00"
    },
    {
      "data": {
        "time": "2020-04-15T00:30:00.886000Z",
        "technology_name": "People-People",
        "technology_compliance": 75.6,
        "usecase_compliance": {
          "blocked_dl": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "dl_incidents": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "repeated_bgv": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "sign_off_nda": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "first_attempt": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "phishing_test": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "bgv_exceptions": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "content_viewed": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "nda_disclosure": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "violated_users": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "user_id_sharing": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "business_conduct": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "password_sharing": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "training_cleared": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "breach_of_ip_data": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "confidential_data": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "improvement_in_dl": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "phishing_campaign": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "policy_violations": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "repeated_phishing": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "training_attended": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "assets_declaration": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "bgv_non_compliance": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "email_usage_policy": {
            "device_count": {
              "low": 3,
              "medium": 0,
              "critical": 2
            },
            "compliance_score": 60
          },
          "security_awareness": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "training_completed": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "training_uncleared": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "customer_data_usage": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "repeated_responders": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "repeated_violations": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "reported_violations": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "customer_data_breach": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "external_media_usage": {
            "device_count": {
              "low": 3,
              "medium": 0,
              "critical": 2
            },
            "compliance_score": 60
          },
          "number_of_violations": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "response_to_phishing": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "internet_access_usage": {
            "device_count": {
              "low": 3,
              "medium": 0,
              "critical": 2
            },
            "compliance_score": 60
          },
          "training_not_attended": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "reported_violated_users": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "overall_policy_acceptance": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "training_average_attempts": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          },
          "confidential_data_handling": {
            "device_count": {
              "low": 4,
              "medium": 0,
              "critical": 1
            },
            "compliance_score": 80
          }
        }
      },
      "technology": "People-People",
      "compliance": 75.6,
      "count": 5,
      "deviceCountChanges": 0,
      "techScoreChanges": "0.00"
    },
    {
      "data": {
        "time": "2020-04-15T00:30:00.454002Z",
        "technology_name": "Monitoring-Solarwinds",
        "technology_compliance": 93.47,
        "usecase_compliance": {
          "cpu_usage": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 91.4
          },
          "node_status": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "memory_usage": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 85.94
          },
          "peak_cpu_usage": {
            "device_count": {
              "low": 1,
              "medium": 4,
              "critical": 0
            },
            "compliance_score": 71.4
          },
          "node_availability": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          },
          "average_response_time": {
            "device_count": {
              "low": 5,
              "medium": 0,
              "critical": 0
            },
            "compliance_score": 100
          }
        }
      },
      "technology": "Monitoring-Solarwinds",
      "compliance": 93.47,
      "count": 5,
      "deviceCountChanges": 0,
      "techScoreChanges": "0.00"
    }
  ]