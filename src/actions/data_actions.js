import { dataConstants } from '../constants';
import { alertActions } from './alert_actions';
import {dataService,weightageService,deviceService} from '../services';
import LZString from 'lz-string';
export const dataActions = {
    fetchUsecaseData,
    clearUseCaseData,
    fetchDataWithDate,
    fetchSubCategoryData,
    clearSubCategoryData,
    setWeightage,
    getWeightage
};
function fetchDataWithDate(dateRange,location) {
  // console.log('logging out');
  return dispatch => {
    dispatch(request(''));
    if(localStorage.getItem('data')&&localStorage.getItem('date')===dateRange[0]){
      let data=JSON.parse(LZString.decompressFromUTF16(localStorage.getItem('data')))
      // console.log('fetched from' +data);
      dispatch(success(data));
      dispatch(alertActions.success('Fetched Data Successfully'));
    }
    else{
      dataService.fetchDataWithDate(dateRange,location)
          .then(
              res => {
                  // console.log(res);
                  dispatch(success(res));
                  dispatch(alertActions.success('Fetched Data Successfully'));
              },
              error => {
                  console.log(error);
                  dispatch(failure(error));
                  dispatch(alertActions.error(error));
              }
          );
    }


    function request(data) { return { type: dataConstants.DATA_REQUEST, data } }
    function success(data) { return { type: dataConstants.DATA_SUCCESS, data } }
    function failure(error) { return { type: dataConstants.DATA_FAILURE, error } }
  }
}
function fetchSubCategoryData(props,type,date) {
  return dispatch => {
    dispatch(request([]));
    dataService.fetchSubCategoryData(props,type,date)
        .then(
            res => {
                // console.log(res);
                if(res.length!==0){
                  dispatch(success(res));
                  dispatch(alertActions.success('Fetched Subcategory Data Successfully'));
                }
            },
            error => {
                // console.log(error);
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            }
        );

    function request(data) { return { type: "SUBCATEGORY_REQUEST", data } }
    function success(data) { return { type: "SUBCATEGORY_SUCCESS", data } }
    function failure(error) { return { type: "SUBCATEGORY_ERROR", error } }
  }
}
function clearSubCategoryData() {
  return dispatch => {
    dispatch(clear());
    function clear() { return { type: 'SUBCATEGORY_DATA_CLEAR',data:[]} }
  }
}
function fetchUsecaseData(technology,useCaseList,date) {
  return dispatch => {
    dispatch(request([]));
    dataService.fetchUsecaseData(technology,useCaseList,date)
        .then(
            res => {
                console.log(res);
                if(res.length!==0){
                  dispatch(success(res));
                  dispatch(alertActions.success('Fetched UseCase Data Successfully'));
                }
            },
            error => {
                console.log(error);
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            }
        );

    function request(data) { return { type: dataConstants.USECASE_DATA_REQUEST, data } }
    function success(data) { return { type: dataConstants.USECASE_DATA_SUCCESS, data } }
    function failure(error) { return { type: dataConstants.USECASE_DATA_FAILURE, error } }
  }
}
function clearUseCaseData() {
  return dispatch => {
    dispatch(clear());
    function clear() { return { type: 'USECASE_DATA_CLEAR',data:[]} }
  }
}
function setWeightage(weightageType,payload) {
  return dispatch => {
    dispatch(request([]));
    weightageService.setWeightage(weightageType,payload)
        .then(
            res => {
                dispatch(success());
                dispatch(alertActions.success(weightageType+' Weightage Set Successfully'));
            },
            error => {
                console.log(error);
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            }
        );

    function request() { return { type: dataConstants.WEIGHTAGE_SET_REQUEST } }
    function success() { return { type: dataConstants.WEIGHTAGE_SET_SUCCESS } }
    function failure(error) { return { type: dataConstants.WEIGHTAGE_SET_FAILURE, error } }
  }
}
function getWeightage(weightageType) {
  return dispatch => {
    dispatch(request([]));
    weightageService.getWeightage(weightageType)
        .then(
            res => {
                dispatch(success(res.data));
                dispatch(alertActions.success(weightageType+' Weightage Fetched Successfully'));
            },
            error => {
                console.log(error);
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            }
        );

    function request(data) { return { type: dataConstants.WEIGHTAGE_GET_REQUEST,data } }
    function success(data) { return { type: dataConstants.WEIGHTAGE_GET_SUCCESS,data } }
    function failure(error) { return { type: dataConstants.WEIGHTAGE_GET_FAILURE, error } }
  }
}
