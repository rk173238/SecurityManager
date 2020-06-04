import {userService} from '../services';
import {deviceService} from '../services';
import { urlConstants,dataConstants } from '../constants';
import Api from '../api/api';

export const dataSecurityService={
    dlpConfigData,
    fetchTopOffendersRepository,
}
function dlpConfigData(){
    return fetchDlpConfigData().then(res=>{
        // console.log(res);
        var data=res.data[0];
        var totalAgents=data.agents.data.length;
        var totalInformationMonitors=data.information_monitors.length;
        var totalEnforceVersion=data.enforce_version.data.length;
        var totalPolicies=data.policies.length;
        var totalApplications=data.applications.length;
        var totalScanAssignments=data.scan_assignments.data.length;

        return {totalAgents,totalApplications,totalEnforceVersion,totalInformationMonitors,totalPolicies,totalScanAssignments,
                agents:data.agents.data,informationMonitors:data.information_monitors,enforceVersion:data.enforce_version.data,policies:data.policies,
                applications:data.applications,scanAssignments:data.scan_assignments.data};
    })
}
function fetchDlpConfigData(){
    // var dateRange=localStorage.date[]
    var url=urlConstants.SITE_URL+urlConstants.INFRA_D_URL+urlConstants.TECH_L_URL
    const token=userService.getToken();
    return Api.get(url,{headers: {Authorization : `JWT ${token}`}})
}
function fetchTopOffendersRepository(type){
    var startDate=new Date(JSON.parse(localStorage.getItem('date'))[0]);
    var endDate= JSON.parse(localStorage.getItem('date'))[1];
    if(type==='Weekly') startDate.setDate(startDate.getDate()-7)
    else if(type==='Monthly') startDate.setDate(startDate.getDate()-30)
    var year=startDate.getFullYear()
    var month=startDate.getMonth()+1;if(month<10) month='0'+month
    var day=startDate.getDate();if(day<10) day='0'+day
    var dateRange=[year+'-'+month+'-'+day+' '+'00:00:00',endDate]
    
    return deviceService.fetchDevices('DLPDiscover-Symantec','target,target_server,repository,file,violated_policy_rule','all',dateRange,'').then(res=>{
        // console.log(res)
        var targetServer={}
        var repository={}
        var violatedPolicyRule={}
        // var targetServer1=[]
        res.map(incident=>{
            //Filter by Target server
            if(targetServer.hasOwnProperty(incident.target_server))
                targetServer[incident.target_server]+=1;
            else
                targetServer[incident.target_server]=1;
            // if(targetServer.hasOwnProperty(incident.target_server)){
            //     targetServer[incident.target_server].value+=1;
            //     targetServer[incident.target_server].data.push({time:incident.time,incident:incident.incident_id,targetServer:incident.target_server,location:incident.location})
            // }
            // else{
            //     targetServer[incident.target_server]={};
            //     targetServer[incident.target_server].value=1;
            //     targetServer[incident.target_server].data=[];
            //     targetServer[incident.target_server].targetServer=incident.target_server;
            // }
            //Filter by Repository
            if(repository.hasOwnProperty(incident.target)){
                repository[incident.target].value+=1;
                repository[incident.target].data.push({time:incident.time,incident:incident.incident_id,repository:incident.repository,location:incident.location})
            }
            else{
                repository[incident.target]={};
                repository[incident.target].value=1;
                repository[incident.target].data=[];
                repository[incident.target].target=incident.target
            }

            //Fliter by Violated Policy Rule
            if(violatedPolicyRule.hasOwnProperty(incident.violated_policy_rule.ruleId)){
                violatedPolicyRule[incident.violated_policy_rule.ruleId].value+=1;
                violatedPolicyRule[incident.violated_policy_rule.ruleId].data.push({time:incident.time,incident:incident.incident_id,violatedPolicyRule:incident.violated_policy_rule.ruleId,location:incident.location})
            }
            else{
                violatedPolicyRule[incident.violated_policy_rule.ruleId]={};
                violatedPolicyRule[incident.violated_policy_rule.ruleId].value=1;
                violatedPolicyRule[incident.violated_policy_rule.ruleId].data=[];
                violatedPolicyRule[incident.violated_policy_rule.ruleId].ruleId=incident.violated_policy_rule.ruleId;
            }
            // if(repository.hasOwnProperty(incident.repository))
            //     repository[incident.repository]+=1;
            // else
            //     repository[incident.repository]=1;
                    
            // if(violatedPolicyRule.hasOwnProperty(incident.violated_policy_rule.ruleId))
            //     violatedPolicyRule[incident.violated_policy_rule.ruleId]+=1;
            // else
            //     violatedPolicyRule[incident.violated_policy_rule.ruleId]=1;
        })
        console.log(targetServer,repository,violatedPolicyRule)
        return {targetServer,repository,violatedPolicyRule};
    })
}