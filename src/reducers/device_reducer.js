import { deviceConstants } from '../constants';
const initialState = {fetchingDeviceData:false,fetchedDeviceData:false,devData:[],error:[]} ;

export function fetchDeviceData(state = initialState, action) {
  // console.log(action.data)
  switch (action.type) {
    case deviceConstants.DEVICE_DATA_REQUEST:
      return {
        fetchingDeviceData: true,
        devData: action.data,
        error:[]
      };
    case deviceConstants.DEVICE_DATA_SUCCESS:
      return {
        fetchedDeviceData: true,
        error:[],
        devData: action.data
      };
    case deviceConstants.DEVICE_DATA_FAILURE:
    // console.log(action);
      return {
        fetchedDeviceData: false,
        error: action.error,
      };
    case deviceConstants.DEVICE_DATA_CLEAR:
    // console.log(action);
      return initialState;
    default:
      return state
  }
}
