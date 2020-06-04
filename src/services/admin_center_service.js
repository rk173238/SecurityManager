import {userService} from '../services';
import {urlConstants} from '../constants';
import Api from '../api/api';
export const adminValuesService = {
    getAdminValues,
    setAdminValues,
};

function getAdminValues(tech){
  let url=urlConstants.SITE_URL
  const token=userService.getToken();
  if(tech==='HIPS'){
    url+=urlConstants.INFRA_A_URL+urlConstants.TECH_A_URL+urlConstants.ADMIN_URL
    return Api.get(url,{headers: {Authorization : `JWT ${token}`}})
  }
  else if(tech==='Antivirus'){
    url+=urlConstants.INFRA_A_URL+urlConstants.TECH_J_URL+urlConstants.ADMIN_URL
    return Api.get(url,{headers: {Authorization : `JWT ${token}`}})
  }
  else if(tech==='Drive Encryption'){
    url+=urlConstants.INFRA_A_URL+urlConstants.TECH_K_URL+urlConstants.ADMIN_URL
    return Api.get(url,{headers: {Authorization : `JWT ${token}`}})
  }
  else if(tech==='DLP'){
    url+=urlConstants.INFRA_A_URL+urlConstants.TECH_L_URL+urlConstants.ADMIN_URL
    return Api.get(url,{headers: {Authorization : `JWT ${token}`}})
  }
  else{
    return Promise.resolve({})
  }
}

function setAdminValues(tech,payload){
  let url=urlConstants.SITE_URL
  const token=userService.getToken();
  if(tech==='HIPS'){
    url+=urlConstants.INFRA_A_URL+urlConstants.TECH_A_URL+urlConstants.ADMIN_URL
    return Api.post(url,payload,{headers: {Authorization : `JWT ${token}`}})
  }
  else if(tech==='Antivirus'){
    url+=urlConstants.INFRA_A_URL+urlConstants.TECH_J_URL+urlConstants.ADMIN_URL
    return Api.post(url,payload,{headers: {Authorization : `JWT ${token}`}})
  }
  else if(tech==='Drive Encryption'){
    url+=urlConstants.INFRA_A_URL+urlConstants.TECH_D_URL+urlConstants.ADMIN_URL
    return Api.post(url,payload,{headers: {Authorization : `JWT ${token}`}})
  }
  else if(tech==='DLP'){
    url+=urlConstants.INFRA_A_URL+urlConstants.TECH_L_URL+urlConstants.ADMIN_URL
    return Api.post(url,payload,{headers: {Authorization : `JWT ${token}`}})
  }
  else{
    return Promise.resolve({})
  }
}
