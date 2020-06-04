import { urlConstants,dataConstants } from '../constants';
import {userService} from '.'
import {deviceService,weightageService} from '.';
import LZString from 'lz-string';
import Api from '../api/api';

export const dataService = {
    fetchDataWithDate,
    fetchSubCategoryData,
    fetchTechnologyData,
    fetchComplianceData,
};

function classifyCount(technology){
    if(technology.includes('servicenow')&&technology.includes('cmdb')) return 'object_count'
    else if(technology.includes('servicenow')&&technology.includes('ticketing')) return "engineer's_count"
    else return 'device_count'
}
function filterUsecasesUnderTechnologyUnderSubCategory(technology,useCaseList,data){
    let useCases=[]
    useCaseList.map(usecase=>{
      useCases.push({name:usecase,score:data[usecase].compliance_score,count:data[usecase][classifyCount(technology)]})
    })
    data={}
    data[technology]=useCases
    return {technology:technology,data:useCases}
}
  
  //this function will make data for categories for tech,people,prosess with subcat % changes
function makeCategoryData(props){
  console.log(props)
    let prevData,currData;
    if(props.length<2){
      // return fetchDataWithDate();
    }
    else if(new Date(props[0].time)>new Date(props[1].time)){
      prevData=props[1];currData=props[0]
    }else{
      prevData=props[0];currData=props[1]
    }
    let data={"Technology":{},"People":{},"Process":{}}
    //Make Technology Data
    let prevOPrisk=prevData.values['Operational Risk'],
    prevOPreliability=prevData.values['Operational Reliability'],
    prevOPefficiency=prevData.values['Operational Efficiency'];
    let currOPrisk=currData.values['Operational Risk'],
    currOPreliability=currData.values['Operational Reliability'],
    currOPefficiency=currData.values['Operational Efficiency'];
  
    currData.values['Operational Risk']['changes']={}
    Object.keys(prevOPrisk['sub_categories']).map(subcat=>{
      currData.values['Operational Risk']['changes'][subcat]=prevOPrisk['sub_categories'][subcat]-currOPrisk['sub_categories'][subcat]
    })
    currData.values['Operational Reliability']['changes']={}
    Object.keys(prevOPreliability['sub_categories']).map(subcat=>{
      currData.values['Operational Reliability']['changes'][subcat]=prevOPreliability['sub_categories'][subcat]-currOPreliability['sub_categories'][subcat]
    })
    currData.values['Operational Efficiency']['changes']={}
    Object.keys(prevOPefficiency['sub_categories']).map(subcat=>{
      currData.values['Operational Efficiency']['changes'][subcat]=prevOPefficiency['sub_categories'][subcat]-currOPefficiency['sub_categories'][subcat]
    })
    data['Technology']['Operational Risk']=currData.values['Operational Risk']
    data['Technology']['Operational Reliability']=currData.values['Operational Reliability']
    data['Technology']['Operational Efficiency']=currData.values['Operational Efficiency']
    //Make People Data
    let prevTraining=prevData.values['Training and Awareness'],
    prevInformationSecurity=prevData.values['Information Security'],
    prevCompliance=prevData.values['Compliance'];
    let currTraining=prevData.values['Training and Awareness'],
    currInformationSecurity=prevData.values['Information Security'],
    currCompliance=prevData.values['Compliance'];
  
    currData.values['Training and Awareness']['changes']={}
    Object.keys(prevTraining['sub_categories']).map(subcat=>{
      currData.values['Training and Awareness']['changes'][subcat]=prevTraining['sub_categories'][subcat]-currTraining['sub_categories'][subcat]
    })
    currData.values['Information Security']['changes']={}
    Object.keys(prevInformationSecurity['sub_categories']).map(subcat=>{
      currData.values['Information Security']['changes'][subcat]=prevInformationSecurity['sub_categories'][subcat]-currInformationSecurity['sub_categories'][subcat]
    })
    currData.values['Compliance']['changes']={}
    Object.keys(prevCompliance['sub_categories']).map(subcat=>{
      currData.values['Compliance']['changes'][subcat]=prevCompliance['sub_categories'][subcat]-currCompliance['sub_categories'][subcat]
    })
    data['People']['Training and Awareness']=currData.values['Training and Awareness']
    data['People']['Information Security']=currData.values['Information Security']
    data['People']['Compliance']=currData.values['Compliance']

    //Make Process Data
    let prevAudit=prevData.values['Audit'],
    prevFrameworks=prevData.values['Frameworks'],
    prevGovernance=prevData.values['Governance'];
    let currAudit=prevData.values['Audit'],
    currFrameworks=prevData.values['Frameworks'],
    currGovernance=prevData.values['Governance'];
  
    currData.values['Audit']['changes']={}
    Object.keys(prevAudit['sub_categories']).map(subcat=>{
      currData.values['Audit']['changes'][subcat]=prevAudit['sub_categories'][subcat]-currAudit['sub_categories'][subcat]
    })
    currData.values['Frameworks']['changes']={}
    Object.keys(prevFrameworks['sub_categories']).map(subcat=>{
      currData.values['Frameworks']['changes'][subcat]=prevFrameworks['sub_categories'][subcat]-currFrameworks['sub_categories'][subcat]
    })
    currData.values['Governance']['changes']={}
    Object.keys(prevGovernance['sub_categories']).map(subcat=>{
      currData.values['Governance']['changes'][subcat]=prevGovernance['sub_categories'][subcat]-currGovernance['sub_categories'][subcat]
    })
    data['Process']['Audit']=currData.values['Audit']
    data['Process']['Frameworks']=currData.values['Frameworks']
    data['Process']['Governance']=currData.values['Governance']

    console.log(data)
  
    return data;
}
function fetchDataWithDate(dateRange,location,trend=false){
      let url=urlConstants.SITE_URL+urlConstants.TRENDS_URL+urlConstants.TRENDS_READ_CATEGORY
      if(dateRange.length===0){
        url=url+'?'+urlConstants.FILTER_START_DATE+'=2019-12-04'
      }
      else{
        url=url+'?'+urlConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
      }
    const token=userService.getToken();
    console.log(url)
    return Api.get(url,{headers: {Authorization : `JWT ${token}`}}).then(res=>{
      // console.log(res)
      if(trend) return res.data
      return makeCategoryData(res.data)
      
    })
}
function fetchSubCategoryData(subCategory,type,dateRange){
      let url=urlConstants.SITE_URL+urlConstants.TRENDS_URL+urlConstants.TRENDS_READ_SUBCATEGORY
      if(dateRange.length===0){
        url=url+'?'+urlConstants.FILTER_START_DATE+'=2019-12-04'
      }
      else{
        url=url+'?'+urlConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
      }
      const token=userService.getToken();
      console.log(url,dateRange)
      return Api.get(url,{headers: {Authorization : `JWT ${token}`}}).then(res=>{
        console.log(res.data[0])
        if(type==='all') return res.data[0].values
        return res.data[0].values[subCategory]
      })
}

function fetchTechnologyData(technology,useCaseList,dateRange,filterUsecase){
    technology=technology.toLowerCase()
    return fetchComplianceData(dateRange,technology).then(res=>{
      if(!filterUsecase) return res.data
    return res&&res.data?filterUsecasesUnderTechnologyUnderSubCategory(technology,useCaseList,res.data[0].usecase_compliance):alert('Data not present for '+technology);return ''
    })
}
function fetchComplianceData(dateRange,technology){
    let url=urlConstants.SITE_URL
    const token=userService.getToken();
    
    url=url+urlConstants[technology]+urlConstants.USECASE_COMPLIANCE+urlConstants.TRENDS_URL
    if(dateRange.length===0){
      url=url+'?'+urlConstants.FILTER_START_DATE+'=2019-12-04'
    }
    else{
      url=url+'?'+urlConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
    }
    console.log(url)
    return Api.get(url,{headers: {Authorization : `JWT ${token}`}}).then(res=>{
      // console.log(res)
      return res;
    },e=>console.log(e)).catch(e=>console.log(e))
  }
