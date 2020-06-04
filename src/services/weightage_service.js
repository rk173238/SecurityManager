import {userService} from '../services';
import {urlConstants } from '../constants';
import Api from '../api/api';
export const weightageService = {
    getWeightage,
    setWeightage,
};
function getWeightage(weightageType){
  // console.log('get'+weightageType);
  const url=urlConstants.SITE_URL+'/'+urlConstants.ADMIN_URL+weightageType+'-weightage/';
  const token=userService.getToken();
  if(weightageType==='tech'){
    return Api.get(url,{headers: {Authorization : `JWT ${token}`}})
  }
  else if(weightageType==='subcat'){
    return Api.get(url,{headers: {Authorization : `JWT ${token}`}})
  }
  else if(weightageType==='usecase'){
    return Api.get(url,{headers: {Authorization : `JWT ${token}`}})
  }
  else{
    return Promise.resolve({})
  }
}
function setWeightage(weightageType,payload){
  // console.log('SET '+weightageType);
  const url=urlConstants.SITE_URL+'/'+urlConstants.ADMIN_URL+weightageType+'-weightage/';
  const token=userService.getToken();
  if(weightageType==='tech'){
    return Api.post(url,payload,{headers: {Authorization : `JWT ${token}`}})
  }
  else if(weightageType==='subcat'){
    return Api.post(url,payload,{headers: {Authorization : `JWT ${token}`}})
  }
  else if(weightageType==='usecase'){
    return Api.post(url,payload,{headers: {Authorization : `JWT ${token}`}})
  }
  else{
    return Promise.resolve({})
  }

}
