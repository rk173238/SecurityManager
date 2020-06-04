
import { urlConstants,dataConstants } from '../constants';
import {userService} from '.'
import {deviceService,weightageService} from '.';
import LZString from 'lz-string';
import Api from '../api/api';
import { object, func } from 'prop-types';
import UseCases from '../common-components/UseCases/Usecases';
// import localForage from 'localforage';
// import jsonm from 'jsonm';
export const dataService = {
    fetchDataWithDate,
    fetchSubCategoryData,
    fetchTechnologyData,
    fetchTechAData,
    fetchTechBData,
    fetchTechCData,
    fetchTechDData,
    fetchTechEData,
    fetchTechFData,
    fetchTechGData,
};
function classifyCount(technology){
  if(technology.includes('servicenow')&&technology.includes('cmdb')) return 'object_count'
  else if(technology.includes('servicenow')&&technology.includes('ticketing')) return "engineer's_count"
  else return 'device_count'
}
function filterUsecasesUnderTechnologyUnderSubCategory(technology,useCaseList,data){
  let useCases=[]
  // console.log(data,useCaseList,)
  useCaseList.map(usecase=>{
    useCases.push({name:usecase,score:data[usecase].compliance_score,count:data[usecase][classifyCount(technology)]})
  })
  // data[technology]=useCases
  data={}
  data[technology]=useCases
  // console.log(data)
  return {technology:technology,data:useCases}
}

//this function will make data for categories for tech,people,prosess with subcat % changes
function makeCategoryData(props){
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
  prevAwareness=prevData.values['Information Security'],
  prevCompliance=prevData.values['Compliance'];
  let currTraining=prevData.values['Training and Awareness'],
  currAwareness=prevData.values['Information Security'],
  currCompliance=prevData.values['Compliance'];

  currData.values['Training and Awareness']['changes']={}
  Object.keys(prevTraining['sub_categories']).map(subcat=>{
    currData.values['Training and Awareness']['changes'][subcat]=prevTraining['sub_categories'][subcat]-currTraining['sub_categories'][subcat]
  })
  currData.values['Information Security']['changes']={}
  Object.keys(prevAwareness['sub_categories']).map(subcat=>{
    currData.values['Information Security']['changes'][subcat]=prevAwareness['sub_categories'][subcat]-currAwareness['sub_categories'][subcat]
  })
  currData.values['Compliance']['changes']={}
  Object.keys(prevCompliance['sub_categories']).map(subcat=>{
    currData.values['Compliance']['changes'][subcat]=prevCompliance['sub_categories'][subcat]-currCompliance['sub_categories'][subcat]
  })
  data['People']['Training and Awareness']=currData.values['Training and Awareness']
  data['People']['Information Security']=currData.values['Information Security']
  data['People']['Compliance']=currData.values['Compliance']
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
    console.log(res)
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
  // console.log(filterUsecase)
  technology=technology.toLowerCase()
  if(technology==='hips-mcafee'){
      return fetchTechAData(dateRange).then(res=>{
        if(!filterUsecase) return res.data
        // console.log(res)
      return res&&res.data?filterUsecasesUnderTechnologyUnderSubCategory(technology,useCaseList,res.data[0].usecase_compliance):alert('Data not present for '+technology);return ''
      })
    
  }
  else if(technology.includes('solarwind')){
    if(technology.includes('systemsmanagement')){
      return fetchTechBData(dateRange).then(res=>{
        if(!filterUsecase) return res.data
      return res&&res.data?filterUsecasesUnderTechnologyUnderSubCategory(technology,useCaseList,res.data[0].usecase_compliance):alert('Data not present for '+technology);return ''
      })
    }
  }
  else if(technology.includes('firemon')){
      if(technology.includes('firewallanalyzer')){
        return fetchTechCData(dateRange).then(res=>{
          if(!filterUsecase) return res.data
          // console.log(res)
      return res&&res.data?filterUsecasesUnderTechnologyUnderSubCategory(technology,useCaseList,res.data[0].usecase_compliance):alert('Data not present for '+technology);return ''
        })
      }
  }
  else if(technology.includes('antivirus')){
    if(technology.includes('symantec')){
      return fetchTechDData(dateRange).then(res=>{
        if(!filterUsecase) return res.data
        return res.data?filterUsecasesUnderTechnologyUnderSubCategory(technology,useCaseList,res.data[0].usecase_compliance):alert('Data not present for '+technology);return ''
      })
    }
  }
  else if(technology.includes('f5')){
    if(technology.includes('loadbalancer')){
      return fetchTechEData(dateRange).then(res=>{
        if(!filterUsecase) return res.data
        return res.data?filterUsecasesUnderTechnologyUnderSubCategory(technology,useCaseList,res.data[0].usecase_compliance):alert('Data not present for '+technology);return ''
      },e=>console.log(e))
    }
  }
  else if(technology.includes('aws') && technology.includes('s3')){
      return fetchTechFData(dateRange).then(res=>{
        if(!filterUsecase) return res.data
      return res&&res.data?filterUsecasesUnderTechnologyUnderSubCategory(technology,useCaseList,res.data[0].usecase_compliance):alert('Data not present for '+technology);return ''
    },e=>console.log(e))
    
  }
  else if(technology.includes('aws') && technology.includes('ec2')){
      return fetchTechGData(dateRange).then(res=>{
        if(!filterUsecase) return res.data
      return res&&res.data?filterUsecasesUnderTechnologyUnderSubCategory(technology,useCaseList,res.data[0].usecase_compliance):alert('Data not present for '+technology);return ''
      },e=>console.log(e))
    
  }
  else if(technology.includes('servicenow') && technology.includes('cmdb')){
    return fetchTechHData(dateRange).then(res=>{
      if(!filterUsecase) return res.data
      return res&&res.data?filterUsecasesUnderTechnologyUnderSubCategory(technology,useCaseList,res.data[0].usecase_compliance):alert('Data not present for '+technology);return ''
    },e=>console.log(e))
  }
  else if(technology.includes('servicenow') && technology.includes('ticketing')){
    return fetchTechIData(dateRange).then(res=>{
      if(!filterUsecase) return res.data
      return res&&res.data?filterUsecasesUnderTechnologyUnderSubCategory(technology,useCaseList,res.data[0].usecase_compliance):alert('Data not present for '+technology);return ''
    },e=>console.log(e))
  }
  else if(technology==='av-mcafee'){
    return fetchTechMcafeeAvData(dateRange).then(res=>{
      if(!filterUsecase) return res.data
      return res.data?filterUsecasesUnderTechnologyUnderSubCategory(technology,useCaseList,res.data[0].usecase_compliance):alert('Data not present for '+technology);return ''
    },e=>console.log(e))
  }
  else if(technology==='dlpdiscover-symantec'){
    return fetchTechSymantecDiscoverData(dateRange).then(res=>{
      if(!filterUsecase) return res.data
      return res&&res.data?filterUsecasesUnderTechnologyUnderSubCategory(technology,useCaseList,res.data[0].usecase_compliance):null;return ''
    },e=>console.log(e))
  }
  else if(technology==='dlpendpoint-symantec'){
    return fetchTechSymantecEndpointData(dateRange).then(res=>{
      if(!filterUsecase) return res.data
      return res&&res.data?filterUsecasesUnderTechnologyUnderSubCategory(technology,useCaseList,res.data[0].usecase_compliance):null;return ''
    },e=>console.log(e))
  }
  else if(technology.includes('people') && technology.includes('people')){
    return fetchPeopleAData(dateRange).then(res=>{
      if(!filterUsecase) return res.data
      return res&&res.data?filterUsecasesUnderTechnologyUnderSubCategory(technology,useCaseList,res.data[0].usecase_compliance):alert('Data not present for '+technology);return ''
    },e=>console.log(e))
  }
  else if(technology==="dlp-symantec"){
    return fetchSymantecData(dateRange).then(res=>{
      if(!filterUsecase) return res.data
      return res&&res.data?filterUsecasesUnderTechnologyUnderSubCategory(technology,useCaseList,res.data[0].usecase_compliance):alert('Data not present for '+technology);return ''
    },e=>console.log(e))
  }
  console.log(technology)
  alert('Not fetched Compliance of '+technology)
  return Promise.resolve('')
}

function fetchTechAData(dateRange){
  let url=urlConstants.SITE_URL
  const token=userService.getToken();
  url=url+urlConstants.INFRA_A_URL+urlConstants.TECH_A_URL+urlConstants.USECASE_COMPLIANCE+urlConstants.TRENDS_URL
  if(dateRange.length===0){
    url=url+'?'+urlConstants.FILTER_START_DATE+'=2019-12-04'
  }
  else{
    url=url+'?'+urlConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
  }
  console.log(url)
  return Api.get(url,{headers: {Authorization : `JWT ${token}`}}).then(res=>{
    return res;
  },e=>alert('Error while fetching compliance techA', e))
    
}
function fetchTechBData(dateRange){
  let url=urlConstants.SITE_URL
  const token=userService.getToken();
  url=url+urlConstants.INFRA_B_URL+urlConstants.TECH_B_URL+urlConstants.USECASE_COMPLIANCE+urlConstants.TRENDS_URL
  if(dateRange.length===0){
    url=url+'?'+urlConstants.FILTER_START_DATE+'=2019-12-04'
  }
  else{
    url=url+'?'+urlConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
  }
  console.log(url)
  return Api.get(url,{headers: {Authorization : `JWT ${token}`}}).then(res=>{
    console.log(res)
    return res;
  },e=>console.log(e)).catch(e=>console.log(e))
}
function fetchTechCData(dateRange){
  let url=urlConstants.SITE_URL
  const token=userService.getToken();
  url=url+urlConstants.INFRA_C_URL+urlConstants.TECH_C_URL+urlConstants.USECASE_COMPLIANCE+urlConstants.TRENDS_URL
  if(dateRange.length===0){
    url=url+'?'+urlConstants.FILTER_START_DATE+'=2019-12-04'
  }
  else{
    url=url+'?'+urlConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
  }
  // console.log(Api.get(url,{headers: {Authorization : `JWT ${token}`}}))
  return Api.get(url,{headers: {Authorization : `JWT ${token}`}}).then(res=>{
    // console.log(res)
    return res;
  },e=>console.log(e)).catch(e=>console.log(e))
}
function fetchTechDData(dateRange){
  let url=urlConstants.SITE_URL
  const token=userService.getToken();
  url=url+urlConstants.INFRA_D_URL+urlConstants.TECH_D_URL+urlConstants.USECASE_COMPLIANCE+urlConstants.TRENDS_URL
  if(dateRange.length===0){
    url=url+'?'+urlConstants.FILTER_START_DATE+'=2019-12-04'
  }
  else{
    url=url+'?'+urlConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
  }
  // console.log(Api.get(url,{headers: {Authorization : `JWT ${token}`}}))
  return Api.get(url,{headers: {Authorization : `JWT ${token}`}}).then(res=>{
    // console.log(res)
    return res;
  },e=>console.log(e)).catch(e=>console.log(e))
}
function fetchTechEData(dateRange){
  let url=urlConstants.SITE_URL
  const token=userService.getToken();
  url=url+urlConstants.INFRA_E_URL+urlConstants.TECH_E_URL+urlConstants.USECASE_COMPLIANCE+urlConstants.TRENDS_URL
  if(dateRange.length===0){
    url=url+'?'+urlConstants.FILTER_START_DATE+'=2019-12-04'
  }
  else{
    url=url+'?'+urlConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
  }
  // console.log(Api.get(url,{headers: {Authorization : `JWT ${token}`}}))
  return Api.get(url,{headers: {Authorization : `JWT ${token}`}}).then(res=>{
    // console.log(res)
    return res;
  },e=>console.log(e)).catch(e=>console.log(e))
}
function fetchTechFData(dateRange){
  let url=urlConstants.SITE_URL
  let token=userService.getToken();
  url=url+urlConstants.INFRA_F_URL+urlConstants.TECH_F_URL+urlConstants.USECASE_COMPLIANCE+urlConstants.TRENDS_URL
  if(dateRange.length===0){
    url=url+'?'+urlConstants.FILTER_START_DATE+'=2019-12-04'
  }
  else{
    url=url+'?'+urlConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
  }
  token='JWT '+token
  // console.log(token,url)
  return Api.get(url,{headers: {Authorization : token}}).then(res=>{
    // console.log(res)
    return res;
  },e=>console.log(e))
  .catch(e=>console.log(e))
}
function fetchTechGData(dateRange){
  let url=urlConstants.SITE_URL
  const token=userService.getToken();
  url=url+urlConstants.INFRA_F_URL+urlConstants.TECH_G_URL+urlConstants.USECASE_COMPLIANCE+urlConstants.TRENDS_URL
  if(dateRange.length===0){
    url=url+'?'+urlConstants.FILTER_START_DATE+'=2019-12-04'
  }
  else{
    url=url+'?'+urlConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
  }
  // console.log(Api.get(url,{headers: {Authorization : `JWT ${token}`}}))
  return Api.get(url,{headers: {Authorization : `JWT ${token}`}}).then(res=>{
    // console.log(res)
    return res;
  },e=>console.log(e)).catch(e=>console.log(e))
}
function fetchTechHData(dateRange){
  let url=urlConstants.SITE_URL
  const token=userService.getToken();
  url=url+urlConstants.INFRA_H_URL+urlConstants.TECH_H_URL+urlConstants.USECASE_COMPLIANCE+urlConstants.TRENDS_URL
  if(dateRange.length===0){
    url=url+'?'+urlConstants.FILTER_START_DATE+'=2019-12-04'
  }
  else{
    url=url+'?'+urlConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
  }
  // console.log(Api.get(url,{headers: {Authorization : `JWT ${token}`}}))
  return Api.get(url,{headers: {Authorization : `JWT ${token}`}}).then(res=>{
    console.log(res)
    return res;
  },e=>console.log(e)).catch(e=>console.log(e))
}
function fetchTechIData(dateRange){
  let url=urlConstants.SITE_URL
  const token=userService.getToken();
  url=url+urlConstants.INFRA_H_URL+urlConstants.TECH_I_URL+urlConstants.USECASE_COMPLIANCE+urlConstants.TRENDS_URL
  if(dateRange.length===0){
    url=url+'?'+urlConstants.FILTER_START_DATE+'=2019-12-04'
  }
  else{
    url=url+'?'+urlConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
  }
  // console.log(Api.get(url,{headers: {Authorization : `JWT ${token}`}}))
  return Api.get(url,{headers: {Authorization : `JWT ${token}`}}).then(res=>{
    console.log(res)
    return res;
  },e=>console.log(e)).catch(e=>console.log(e))
}
function fetchTechMcafeeAvData(dateRange){
  let url=urlConstants.SITE_URL
  const token=userService.getToken();
  url=url+urlConstants.INFRA_A_URL+urlConstants.TECH_J_URL+urlConstants.USECASE_COMPLIANCE+urlConstants.TRENDS_URL
  if(dateRange.length===0){
    url=url+'?'+urlConstants.FILTER_START_DATE+'=2019-12-04'
  }
  else{
    url=url+'?'+urlConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
  }
  return Api.get(url,{headers: {Authorization : `JWT ${token}`}}).then(res=>{
    return res;
  },e=>console.log(e)).catch(e=>console.log(e))
}
function fetchTechSymantecDiscoverData(dateRange){
  let url=urlConstants.SITE_URL
  const token=userService.getToken();
  url=url+urlConstants.INFRA_SYMANTEC_URL+urlConstants.TECH_DLP_DISCOVER_URL+urlConstants.USECASE_COMPLIANCE+urlConstants.TRENDS_URL
  if(dateRange.length===0){
    url=url+'?'+urlConstants.FILTER_START_DATE+'=2019-12-04'
  }
  else{
    url=url+'?'+urlConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
  }
  return Api.get(url,{headers: {Authorization : `JWT ${token}`}}).then(res=>{
    return res;
  },e=>console.log(e)).catch(e=>console.log(e))
}
function fetchTechSymantecEndpointData(dateRange){
  let url=urlConstants.SITE_URL
  const token=userService.getToken();
  url=url+urlConstants.INFRA_SYMANTEC_URL+urlConstants.TECH_DLP_ENDPOINT_URL+urlConstants.USECASE_COMPLIANCE+urlConstants.TRENDS_URL
  if(dateRange.length===0){
    url=url+'?'+urlConstants.FILTER_START_DATE+'=2019-12-04'
  }
  else{
    url=url+'?'+urlConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
  }
  return Api.get(url,{headers: {Authorization : `JWT ${token}`}}).then(res=>{
    console.log(res)
    return res;
  }).catch(e=>console.log(e))
}
function fetchPeopleAData(dateRange){
  let url=urlConstants.SITE_URL
  const token=userService.getToken();
  url=url+urlConstants.INFRA_PEOPLE_A_URL+urlConstants.TECH_PEOPLE_A_URL+urlConstants.USECASE_COMPLIANCE+urlConstants.TRENDS_URL
  if(dateRange.length===0){
    url=url+'?'+urlConstants.FILTER_START_DATE+'=2019-12-04'
  }
  else{
    url=url+'?'+urlConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
  }
  // console.log(Api.get(url,{headers: {Authorization : `JWT ${token}`}}))
  return Api.get(url,{headers: {Authorization : `JWT ${token}`}}).then(res=>{
    console.log(res)
    return res;
  },e=>console.log(e)).catch(e=>console.log(e))
}
function fetchSymantecData(dateRange){
  let url=urlConstants.SITE_URL
  const token=userService.getToken();
  url=url+urlConstants.INFRA_D_URL+urlConstants.TECH_L_URL+urlConstants.USECASE_COMPLIANCE+urlConstants.TRENDS_URL
  if(dateRange.length===0){
    url=url+'?'+urlConstants.FILTER_START_DATE+'=2019-12-04'
  }
  else{
    url=url+'?'+urlConstants.FILTER_START_DATE+'='+dateRange[0]+'&'+dataConstants.FILTER_END_DATE+'='+dateRange[1]
  }
  // console.log(Api.get(url,{headers: {Authorization : `JWT ${token}`}}))
  return Api.get(url,{headers: {Authorization : `JWT ${token}`}}).then(res=>{
    console.log(res)
    return res;
  },e=>console.log(e)).catch(e=>console.log(e))
}