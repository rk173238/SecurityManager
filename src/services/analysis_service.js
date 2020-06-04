import {dataService} from '../services'
export const analysisService={
    fetchAllTechnologyData,
}

function fetchAllTechnologyData(){
    var dateRange=[JSON.parse(localStorage.getItem('date'))[0],JSON.parse(localStorage.getItem('date'))[2]]
    console.log(dateRange)
    return Promise.all(
        [
            // dataService.fetchTechAData(dateRange),
            // dataService.fetchTechBData(dateRange),
            // dataService.fetchTechCData(dateRange),
            // dataService.fetchTechDData(dateRange),
            // dataService.fetchTechEData(dateRange),
            // dataService.fetchTechFData(dateRange),
            // dataService.fetchTechGData(dateRange),
            dataService.fetchComplianceData(dateRange,'av-mcafee'),
            dataService.fetchComplianceData(dateRange,'firewallanalyzer-firemon'),
            dataService.fetchComplianceData(dateRange,'dlp-symantec'),
            dataService.fetchComplianceData(dateRange,'dlpendpoint-symantec'),
            dataService.fetchComplianceData(dateRange,'dlpdiscover-symantec'),
            dataService.fetchComplianceData(dateRange,'antivirus-symantec'),
            dataService.fetchComplianceData(dateRange,'hips-mcafee'),
            dataService.fetchComplianceData(dateRange,'loadbalancer-f5'),
            dataService.fetchComplianceData(dateRange,'s3-aws'),
            dataService.fetchComplianceData(dateRange,'ec2-aws'),
            // dataService.fetchComplianceData(dateRange,'cmdb-servicenow'),
            // dataService.fetchComplianceData(dateRange,'ticketing-servicenow'),
            dataService.fetchComplianceData(dateRange,'people-people'),
            dataService.fetchComplianceData(dateRange,'monitoring-solarwinds'),
        ])
        .then((res)=>{
            console.log('response',res)
            var finalData=[]
            res=res.filter(res=>res.status===200&&res.data.length===2)
            res.map((res,i)=>{

                finalData.push(currentQuarter(res.data))
            })

            // console.log(finalData)
            return finalData
        },e=>console.log(e))

}
function currentQuarter(data){
    console.log(data)
    var t1=new Date(data[0].time)
    var t2=new Date(data[1].time)
    if(t1>t2){
        var technology=data[0].technology_name
        var compliance=data[0].technology_compliance
        var techScoreChanges=data[0].technology_compliance-data[1].technology_compliance
        var q1DeviceCount=data[0].usecase_compliance[Object.keys(data[0].usecase_compliance)[0]].device_count
        var q2DeviceCount=data[1].usecase_compliance[Object.keys(data[1].usecase_compliance)[1]].device_count
        var count=(q1DeviceCount.low+q1DeviceCount.medium+q1DeviceCount.critical)
        var deviceCountChanges=(q1DeviceCount.low+q1DeviceCount.medium+q1DeviceCount.critical)-(q2DeviceCount.low+q2DeviceCount.medium+q2DeviceCount.critical)
        return {data:data[0],technology,compliance,count,deviceCountChanges,techScoreChanges:techScoreChanges.toFixed(2)}
    }
    var technology=data[1].technology_name
    var compliance=data[1].technology_compliance
    var techScoreChanges=data[1].technology_compliance-data[0].technology_compliance
    var q1DeviceCount=data[1].usecase_compliance[Object.keys(data[1].usecase_compliance)[1]].device_count
    var q2DeviceCount=data[0].usecase_compliance[Object.keys(data[0].usecase_compliance)[0]].device_count
    var count=(q1DeviceCount.low+q1DeviceCount.medium+q1DeviceCount.critical)
    var deviceCountChanges=(q1DeviceCount.low+q1DeviceCount.medium+q1DeviceCount.critical)-(q2DeviceCount.low+q2DeviceCount.medium+q2DeviceCount.critical)
    return {data:data[1],technology,compliance,count,deviceCountChanges,techScoreChanges:techScoreChanges.toFixed(2)}
}