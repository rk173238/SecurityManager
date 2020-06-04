import { deviceConstants } from '../constants';
import { alertActions } from './alert_actions';
import {deviceService, dataService} from '../services';
export const deviceActions = {
    // fetchDeviceData,
    fetchDevices,
    fetchDeviceDataWithDate,
    clearDeviceData
};

function fetchDevices(technology,usecase,type,dateRange,systemName){
  // console.log(technology,usecase,type,dateRange)
  return dispatch=>{
    dispatch({type:'DEVICES_DATA_FETCH_REQUEST',data:[]})
    deviceService.fetchDevices(technology,usecase,type,dateRange,systemName).then(
      res=>{
        console.log(res)
        dispatch({type:'DEVICE_DATA_FETCH_SUCCESS',data:res})
      },
      error=>{
        dispatch({type:'DEVICE_DATA_FETCH_FAILURE',error})
      })
  }
}
function fetchDeviceDataWithDate(devName,techName,dateRange) {
  // console.log('logging out');
  return dispatch => {
    dispatch(request([]));
    deviceService.fetchDeviceDataWithDate(devName,techName,dateRange)
        .then(
            res => {
                // console.log(res);
                if(res.status===200){
                  dispatch(success(res.data));
                  dispatch(alertActions.success('Fetched Device Data Successfully'));
                }
                else{
                  dispatch(failure(res));
                  dispatch(alertActions.error(res.statusText));
                }
            },
            error => {
                console.log(error);
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            }
        );

    function request(data) { return { type: deviceConstants.DEVICE_DATA_REQUEST, data } }
    function success(data) { return { type: deviceConstants.DEVICE_DATA_SUCCESS, data } }
    function failure(error) { return { type: deviceConstants.DEVICE_DATA_FAILURE, error } }
  }
}

function clearDeviceData() {
  // console.log('logging out');
  return dispatch => {
    dispatch(clear());
    function clear() { return { type: deviceConstants.DEVICE_DATA_CLEAR,data:[]} }
  }
}
