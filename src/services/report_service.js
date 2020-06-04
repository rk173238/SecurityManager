import {dataService} from './data_service'
import {deviceService} from './device_service'
export const reportService={
    fetchCloudData,
    // fetchTopOffendersRepository
}
function currentQuarter(data){
    if(new Date(data[0].time)>new Date(data[1].time)) return data[0]
    return data[1];
}
//Cloud Dashboard under report page
function fetchCloudData(){
    // console.log('sajdgjhsag')
    var dateRange=[JSON.parse(localStorage.getItem('date'))[1],JSON.parse(localStorage.getItem('date'))[2]]
    return Promise.all(
        [
            dataService.fetchTechnologyData('s3-aws',[],dateRange,false),
            dataService.fetchTechnologyData('ec2-aws',[],dateRange,false),
            deviceService.fetchDevices('EC2-AWS','','all',dateRange,''),
            deviceService.fetchDevices('S3-AWS','','all',dateRange,'')
        ]
    ).then(res=>{
        console.log(res);
        var s3Data=res[0][0];
        var ec2Data=res[1][0];
        var ec2Total=0,s3Total=0,awsTotal=0,awsLow=0,awsCritical=0,awsMedium=0,ec2LowCount=0,ec2MediumCount=0,ec2CriticalCount=0,s3LowCount=0,s3MediumCount=0,s3CriticalCount=0;
        /*START Make data for scores Div*/
        var anyUsecase=Object.keys(ec2Data['usecase_compliance'])[0]
        ec2LowCount=ec2Data['usecase_compliance'][anyUsecase]['device_count']['low']
        ec2MediumCount=ec2Data['usecase_compliance'][anyUsecase]['device_count']['medium']
        ec2CriticalCount=ec2Data['usecase_compliance'][anyUsecase]['device_count']['critical']
        ec2Total=ec2MediumCount+ec2LowCount+ec2CriticalCount;

        anyUsecase=Object.keys(s3Data['usecase_compliance'])[0]
        s3LowCount=s3Data['usecase_compliance'][anyUsecase]['device_count']['low']
        s3MediumCount=s3Data['usecase_compliance'][anyUsecase]['device_count']['medium']
        s3CriticalCount=s3Data['usecase_compliance'][anyUsecase]['device_count']['critical']
        s3Total=s3MediumCount+s3LowCount+s3CriticalCount;

        awsTotal=s3Total+ec2Total;

        var encryption=s3Data['usecase_compliance']['encryption']['compliance_score']
        var encryptionLow=s3Data['usecase_compliance']['encryption']['device_count']['low']
        var storage=s3Data['usecase_compliance']['storage']['compliance_score']
        var storageLow=s3Data['usecase_compliance']['storage']['device_count']['low']
        var monitoring=ec2Data['usecase_compliance']['monitoring']['compliance_score']
        var monitoringLow=ec2Data['usecase_compliance']['monitoring']['device_count']['low']
        /*END Data for scores*/
        var ec2DeviceData=(res[2]);
        var s3DeviceData=(res[3]);
        //START Make Data for bar chart
        var locationMap={}
        ec2DeviceData.map(device=>{
            if(!locationMap.hasOwnProperty(device.location.data)){
                locationMap[device.location.data]={
                    'ec2':0,
                    's3':0
                }
            }
            locationMap[device.location.data]['ec2']=locationMap[device.location.data]['ec2']+1;
        })
        s3DeviceData.map(device=>{
            if(!locationMap.hasOwnProperty(device.location.data)){
                locationMap[device.location.data]={
                    'ec2':0,
                    's3':0
                }
            }
            locationMap[device.location.data]['s3']=locationMap[device.location.data]['s3']+1;
        })/*END Data for location bar chart*/ 
        /*START Make Data for  pie chart*/
        var vpcDetails={}
        var securityGroup={}
        ec2DeviceData.map((device,i)=>{
            if(!vpcDetails.hasOwnProperty(device['vpc_details'].data['vpc_id'])){
                vpcDetails[device['vpc_details'].data['vpc_id']]={
                    value:0,
                    deviceData:[]
                }
            }
            vpcDetails[device['vpc_details'].data['vpc_id']].value=vpcDetails[device['vpc_details'].data['vpc_id']].value+1
            vpcDetails[device['vpc_details'].data['vpc_id']].deviceData.push(device);
            if(!securityGroup.hasOwnProperty(device['security_groups_id'])){
                securityGroup[device['security_groups_id']]={
                    value:0,
                    deviceData:[]
                }
            }
            securityGroup[device['security_groups_id']].value=securityGroup[device['security_groups_id']].value+1;
            securityGroup[device['security_groups_id']].deviceData.push(device);
        })

        /*END data for pie chart*/
        console.log(ec2DeviceData,s3DeviceData,locationMap,ec2Total,s3Total,ec2Data,s3Data,vpcDetails,securityGroup)
        return {awsTotal,ec2Total,s3Total,encryption,encryptionLow,monitoring,monitoringLow,storage,storageLow,locationMap,vpcDetails,securityGroup};
    })
}
//KPI Dashboard under report page
export function fetchKPIData(techologyName, usecases) {
    var type = "data";
    var dateRange=[JSON.parse(localStorage.getItem('date'))[1],JSON.parse(localStorage.getItem('date'))[2]]
    // var usecases = 'dat_ver,last_update,agent_version,engine_ver';
    // var usecases = 'dat_ver';
    return Promise.all([
        deviceService.fetchDevices(techologyName, usecases, 'all', dateRange, '')
    ]).then(res => {
        //  console.log("RESPONSE:", res, usecases.split(","))

        var pieInfo = {}
        //make an object for each usecase and add it in pieInfo
        usecases.split(",").map(usecase => {
            if (usecase === 'unused_rules' || usecase === 'node_logging_disabled') {
                type = "compliance_score"
            }
            var uc = {}
            res[0].map(device=>{
                if(!uc.hasOwnProperty(device[usecase][type])){
                    uc[device[usecase][type]] = {
                        value:0,
                        deviceData:[],
                    }
                }
                uc[device[usecase][type]].value+=1;
                uc[device[usecase][type]].deviceData.push(device)
            })
            pieInfo[usecase] = uc
        })
        return pieInfo
    })
}
//Data Security Under Report Page
// function fetchTopOffendersRepository(type){
//     var startDate=new Date(JSON.parse(localStorage.getItem('date'))[0]);
//     var endDate= JSON.parse(localStorage.getItem('date'))[1];
//     if(type==='Weekly') startDate.setDate(startDate.getDate()-7)
//     else if(type==='Monthly') startDate.setDate(startDate.getDate()-30)
//     var year=startDate.getFullYear()
//     var month=startDate.getMonth()+1;if(month<10) month='0'+month
//     var day=startDate.getDate();if(day<10) day='0'+day
//     var dateRange=[year+'-'+month+'-'+day+' '+'00:00:00',endDate]
    
//     return deviceService.fetchDevices('DLPDiscover-Symantec','target_server,repository,file,violated_policy_rule','all',dateRange,'').then(res=>{
//         console.log(res)
//         var targetServer={}
//         var repository={}
//         var violatedPolicyRule={}
//         // var targetServer1=[]
//         res.map(incident=>{
//             //Filter by Target server
//             if(targetServer.hasOwnProperty(incident.target_server))
//                 targetServer[incident.target_server]+=1;
//             else
//                 targetServer[incident.target_server]=1;
//             // if(targetServer.hasOwnProperty(incident.target_server)){
//             //     targetServer[incident.target_server].value+=1;
//             //     targetServer[incident.target_server].data.push({time:incident.time,incident:incident.incident_id,targetServer:incident.target_server,location:incident.location})
//             // }
//             // else{
//             //     targetServer[incident.target_server]={};
//             //     targetServer[incident.target_server].value=1;
//             //     targetServer[incident.target_server].data=[];
//             //     targetServer[incident.target_server].targetServer=incident.target_server;
//             // }
//             //Filter by Repository
//             if(repository.hasOwnProperty(incident.repository)){
//                 repository[incident.repository].value+=1;
//                 repository[incident.repository].data.push({time:incident.time,incident:incident.incident_id,repository:incident.repository,location:incident.location})
//             }
//             else{
//                 repository[incident.repository]={};
//                 repository[incident.repository].value=1;
//                 repository[incident.repository].data=[];
//                 repository[incident.repository].repository=incident.repository
//             }

//             //Fliter by Violated Policy Rule
//             if(violatedPolicyRule.hasOwnProperty(incident.violated_policy_rule.ruleId)){
//                 violatedPolicyRule[incident.violated_policy_rule.ruleId].value+=1;
//                 violatedPolicyRule[incident.violated_policy_rule.ruleId].data.push({time:incident.time,incident:incident.incident_id,violatedPolicyRule:incident.violated_policy_rule.ruleId,location:incident.location})
//             }
//             else{
//                 violatedPolicyRule[incident.violated_policy_rule.ruleId]={};
//                 violatedPolicyRule[incident.violated_policy_rule.ruleId].value=1;
//                 violatedPolicyRule[incident.violated_policy_rule.ruleId].data=[];
//                 violatedPolicyRule[incident.violated_policy_rule.ruleId].ruleId=incident.violated_policy_rule.ruleId;
//             }
//             // if(repository.hasOwnProperty(incident.repository))
//             //     repository[incident.repository]+=1;
//             // else
//             //     repository[incident.repository]=1;
                    
//             // if(violatedPolicyRule.hasOwnProperty(incident.violated_policy_rule.ruleId))
//             //     violatedPolicyRule[incident.violated_policy_rule.ruleId]+=1;
//             // else
//             //     violatedPolicyRule[incident.violated_policy_rule.ruleId]=1;
//         })
//         console.log(targetServer,repository,violatedPolicyRule)
//         return {targetServer,repository,violatedPolicyRule};
//     })
// }