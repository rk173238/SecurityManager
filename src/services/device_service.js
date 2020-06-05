import {userService} from '../services';
import { urlConstants,dataConstants } from '../constants';
import Api from '../api/api';
export const deviceService = {
    fetchDevices,
    // fetchTechAData,
};
function classifyUseCase(complianceScore){
        if (complianceScore>=67&&complianceScore<=100){
          return 'low';
        }
        else if (complianceScore>=34&&complianceScore<67){
          return 'medium';

        }
        else if(complianceScore>=0&&complianceScore<34){
          return 'critical';
        }
        else{
          return 'none';
        }
}
function classifySystemName(technology){
  if(technology==="ec2-aws") return 'instance_name'
  else if(technology==='s3-aws') return 'bucket_name'
  else if(technology==='ticketing-servicenow') return 'engineer_name'
  else if(technology==='dlpdiscover-symantec') return 'incident_id'
  else if(technology==='dlpendpoint-symantec') return 'incident_id'
  else if(technology==='people-people') return 'username'
  else if(technology==='dlp-symantec') return 'ip_address'
  else if(technology==='av-mcafee') return 'nodename'
  else if(technology==='cmdb-servicenow') return 'name'
  else return 'system_name'
}
function classifyIMPFilter(technology){
  if(technology==="firewallanalyzer-firemon") return ',time,system_name,ip_address,total_rules,'
  else if(technology==='loadbalancer-f5') return ',total_nodes,total_memory,total_disk_space,time,system_name,ip_address,'
  else if(technology==='s3-aws') return ',time,bucket_name,ip_address,'
  else if(technology==='ec2-aws') return ',time,instance_name,ip_address,'
  else if(technology==='ticketing-servicenow') return ',work_resolution_time,total_resolution_time,number_of_tickets_assigned,time,engineer_name,ip_address,'
  else if(technology==='dlpdiscover-symantec') return ',time,incident_id,ip_address,'
  else if(technology==='dlpendpoint-symantec') return ',time,incident_id,ip_address,'
  else if(technology==='people-people') return ',time,username,'
  else if(technology==='dlp-symantec') return ',time,ip_address,'
  else if(technology==='cmdb-servicenow') return ',time,name,ip_address,'
  else return ',time,system_name,ip_address,'
}
function fetchDevices(technology,usecase,type,dateRange,systemName){
  if(type==='all') return Promise.resolve(deviceData)
  if(systemName) return Promise.resolve(deviceData.filter(d=>d.system_name===systemName))
  var devData=deviceData.filter(device=>classifyUseCase(device.compliance_score)===type)
  return Promise.resolve(devData)
  return fetchTechDevices(technology,usecase,dateRange,systemName).then(res=>{
    console.log(res.data)
      if(type==='all') return Promise.resolve;
      var devicesData=res.data.filter(device=>classifyUseCase(device[usecase].compliance_score)===type)
      return devicesData
  })
}
function fetchTechDevices(technology,usecase,dateRange,systemName){
  technology=technology.toLowerCase();
  let url=urlConstants.SITE_URL+urlConstants[technology]
  let FILTER_SYSTEM_NAME=classifySystemName(technology)
  let IMP_FILTER=classifyIMPFilter(technology)
  if(dateRange.length===0)
    url=url+'?'+FILTER_SYSTEM_NAME+'=&'+dataConstants.FILTER_START_DATE+'=2018-07-18'
  else if(usecase)
    url=url+'?'+'fields='+usecase+IMP_FILTER+'&'+FILTER_SYSTEM_NAME+'='+systemName+'&'+dataConstants.FILTER_LOCATION+'=&'+dataConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
  else if(systemName)
    url=url+'?'+FILTER_SYSTEM_NAME+'='+systemName+'&'+dataConstants.FILTER_LOCATION+'=&'+dataConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
  else
    url=url+'?'+FILTER_SYSTEM_NAME+'='+systemName+'&'+dataConstants.FILTER_LOCATION+'=&'+dataConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
  // console.log(url);
  const token=userService.getToken();
  return Api.get(url,{headers: {Authorization : `JWT ${token}`}})
}
let deviceData=[
  {
    "time": "2020-04-15T00:01:02Z",
    "tags": null,
    "location": null,
    'compliance_score':100,
    "system_name": "IND_WIP_01",
    "ap_enabled": {
      "data": 0,
      "compliance_score": 0
    },
    "tamper_enabled": {
      "data": 0,
      "compliance_score": 0
    },
    "firewall_enabled": {
      "data": 0,
      "compliance_score": 0
    },
    "infected": {
      "data": 0,
      "compliance_score": 100
    },
    "agent_version": {
      "data": "0",
      "compliance_score": 0
    },
    "last_scan_time": {
      "data": "",
      "compliance_score": 0
    },
    "worstinfection_idx": {
      "data": 0,
      "compliance_score": 0
    },
    "profile_version": {
      "data": "0",
      "compliance_score": 0
    },
    "ids_version": {
      "data": "",
      "compliance_score": 0
    },
    "hi_status": {
      "data": 0,
      "compliance_score": 0
    },
    "last_update_time": {
      "data": "",
      "compliance_score": 0
    },
    "status": {
      "data": 0,
      "compliance_score": 0
    },
    "cids_drv_enabled": {
      "data": 0,
      "compliance_score": 0
    },
    "edr_status": {
      "data": 0,
      "compliance_score": 0
    },
    "deploy_status": {
      "data": "Unknown status",
      "compliance_score": 0
    },
    "da_enabled": {
      "data": 0,
      "compliance_score": 0
    },
    "ptp_enabled": {
      "data": 0,
      "compliance_score": 0
    },
    "reboot_required": {
      "data": 0,
      "compliance_score": 100
    },
    "avengine_enabled": {
      "data": 0,
      "compliance_score": 0
    }
  },
  {
    "time": "2020-04-15T00:01:02Z",
    "tags": null,
    "location": null,
    "system_name": "IND_WIP_02",
    'compliance_score':100,
    "ap_enabled": {
      "data": 0,
      "compliance_score": 0
    },
    "tamper_enabled": {
      "data": 0,
      "compliance_score": 0
    },
    "firewall_enabled": {
      "data": 0,
      "compliance_score": 0
    },
    "infected": {
      "data": 0,
      "compliance_score": 100
    },
    "agent_version": {
      "data": "0",
      "compliance_score": 0
    },
    "last_scan_time": {
      "data": "",
      "compliance_score": 0
    },
    "worstinfection_idx": {
      "data": 0,
      "compliance_score": 0
    },
    "profile_version": {
      "data": "0",
      "compliance_score": 0
    },
    "ids_version": {
      "data": "",
      "compliance_score": 0
    },
    "hi_status": {
      "data": 0,
      "compliance_score": 0
    },
    "last_update_time": {
      "data": "",
      "compliance_score": 0
    },
    "status": {
      "data": 0,
      "compliance_score": 0
    },
    "cids_drv_enabled": {
      "data": 0,
      "compliance_score": 0
    },
    "edr_status": {
      "data": 0,
      "compliance_score": 0
    },
    "deploy_status": {
      "data": "Unknown status",
      "compliance_score": 0
    },
    "da_enabled": {
      "data": 0,
      "compliance_score": 0
    },
    "ptp_enabled": {
      "data": 0,
      "compliance_score": 0
    },
    "reboot_required": {
      "data": 0,
      "compliance_score": 100
    },
    "avengine_enabled": {
      "data": 0,
      "compliance_score": 0
    }
  },
  {
    "time": "2020-04-15T00:01:02Z",
    "tags": null,
    "location": null,
    'compliance_score':0,
    "system_name": "IND_WIP_03",
    "ap_enabled": {
      "data": 1,
      "compliance_score": 100
    },
    "tamper_enabled": {
      "data": 1,
      "compliance_score": 100
    },
    "firewall_enabled": {
      "data": 3,
      "compliance_score": 0
    },
    "infected": {
      "data": 0,
      "compliance_score": 100
    },
    "agent_version": {
      "data": "14.0.3876.1100",
      "compliance_score": 0
    },
    "last_scan_time": {
      "data": "2019-01-10 09:12:03",
      "compliance_score": 0
    },
    "worstinfection_idx": {
      "data": 9999,
      "compliance_score": 100
    },
    "profile_version": {
      "data": "14.0.3876",
      "compliance_score": 0
    },
    "ids_version": {
      "data": "",
      "compliance_score": 0
    },
    "hi_status": {
      "data": 3,
      "compliance_score": 0
    },
    "last_update_time": {
      "data": "2019-01-10",
      "compliance_score": 0
    },
    "status": {
      "data": 1,
      "compliance_score": 100
    },
    "cids_drv_enabled": {
      "data": 3,
      "compliance_score": 0
    },
    "edr_status": {
      "data": 0,
      "compliance_score": 0
    },
    "deploy_status": {
      "data": "Install successful.",
      "compliance_score": 100
    },
    "da_enabled": {
      "data": 1,
      "compliance_score": 100
    },
    "ptp_enabled": {
      "data": 1,
      "compliance_score": 100
    },
    "reboot_required": {
      "data": 0,
      "compliance_score": 100
    },
    "avengine_enabled": {
      "data": 1,
      "compliance_score": 100
    }
  },
  {
    "time": "2020-04-15T00:01:02Z",
    "tags": null,
    "location": null,
    'compliance_score':50,
    "system_name": "IND_WIP_04",
    "ap_enabled": {
      "data": 1,
      "compliance_score": 100
    },
    "tamper_enabled": {
      "data": 1,
      "compliance_score": 100
    },
    "firewall_enabled": {
      "data": 1,
      "compliance_score": 100
    },
    "infected": {
      "data": 0,
      "compliance_score": 100
    },
    "agent_version": {
      "data": "14.0.3876.1100",
      "compliance_score": 0
    },
    "last_scan_time": {
      "data": "2019-01-09 19:05:00",
      "compliance_score": 0
    },
    "worstinfection_idx": {
      "data": 9999,
      "compliance_score": 100
    },
    "profile_version": {
      "data": "14.0.3876",
      "compliance_score": 0
    },
    "ids_version": {
      "data": "",
      "compliance_score": 0
    },
    "hi_status": {
      "data": 3,
      "compliance_score": 0
    },
    "last_update_time": {
      "data": "2019-01-10",
      "compliance_score": 0
    },
    "status": {
      "data": 1,
      "compliance_score": 100
    },
    "cids_drv_enabled": {
      "data": 3,
      "compliance_score": 0
    },
    "edr_status": {
      "data": 0,
      "compliance_score": 0
    },
    "deploy_status": {
      "data": "Install successful.",
      "compliance_score": 100
    },
    "da_enabled": {
      "data": 3,
      "compliance_score": 0
    },
    "ptp_enabled": {
      "data": 3,
      "compliance_score": 0
    },
    "reboot_required": {
      "data": 0,
      "compliance_score": 100
    },
    "avengine_enabled": {
      "data": 1,
      "compliance_score": 100
    }
  },
  {
    "time": "2020-04-15T00:01:02Z",
    "tags": null,
    "location": null,
    'compliance_score':50,
    "system_name": "IND_WIP_05",
    "ap_enabled": {
      "data": 1,
      "compliance_score": 100
    },
    "tamper_enabled": {
      "data": 1,
      "compliance_score": 100
    },
    "firewall_enabled": {
      "data": 1,
      "compliance_score": 100
    },
    "infected": {
      "data": 0,
      "compliance_score": 100
    },
    "agent_version": {
      "data": "14.0.3876.1100",
      "compliance_score": 0
    },
    "last_scan_time": {
      "data": "2019-01-09 19:06:02",
      "compliance_score": 0
    },
    "worstinfection_idx": {
      "data": 0,
      "compliance_score": 0
    },
    "profile_version": {
      "data": "14.0.3876",
      "compliance_score": 0
    },
    "ids_version": {
      "data": "",
      "compliance_score": 0
    },
    "hi_status": {
      "data": 3,
      "compliance_score": 0
    },
    "last_update_time": {
      "data": "2019-01-10",
      "compliance_score": 0
    },
    "status": {
      "data": 1,
      "compliance_score": 100
    },
    "cids_drv_enabled": {
      "data": 3,
      "compliance_score": 0
    },
    "edr_status": {
      "data": 0,
      "compliance_score": 0
    },
    "deploy_status": {
      "data": "Install successful.",
      "compliance_score": 100
    },
    "da_enabled": {
      "data": 3,
      "compliance_score": 0
    },
    "ptp_enabled": {
      "data": 3,
      "compliance_score": 0
    },
    "reboot_required": {
      "data": 0,
      "compliance_score": 100
    },
    "avengine_enabled": {
      "data": 1,
      "compliance_score": 100
    }
  }
]