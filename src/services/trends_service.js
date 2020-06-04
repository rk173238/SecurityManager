import {userService} from '../services';
import {urlConstants } from '../constants';
import Api from '../api/api';
export const trendService = {
    getTechTrends,
    setTechTrends,
};
function getTechTrends(){
  // console.log('get'+weightageType);
  const url=urlConstants.TRENDS_URL+urlConstants.TRENDS_READ_URL;
  const token=userService.getToken();
  return Api.get(url,{headers: {Authorization : `JWT ${token}`}})
}
function setTechTrends(payload){
  // console.log('SET '+weightageType);
  const url=urlConstants.TRENDS_URL+urlConstants.TRENDS_WRITE_URL;
  const token=userService.getToken();
  return Api.post(url,payload,{headers: {Authorization : `JWT ${token}`}})
  // return getTechTrends()
}
