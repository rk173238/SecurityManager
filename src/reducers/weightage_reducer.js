import { dataConstants } from '../constants';
const initialState = {
                      error:[],
                      fetchedWeightage:false,
                      fetchingWeightage:false,
                      weightageData:[],
                      settingWeightage:false,
                      setWeightage:false
                    };
export function fetchWeightage(state = initialState, action) {
  switch (action.type) {
    case dataConstants.WEIGHTAGE_SET_REQUEST:
      return {
        settingWeightage: true,
        error:[]
      };
    case dataConstants.WEIGHTAGE_SET_SUCCESS:
      return {
        setWeightage: true,
        error:[],
      };
    case dataConstants.WEIGHTAGE_SET_FAILURE:
      return {
        setWeightage: false,
        error: action.error,
      };
    case dataConstants.WEIGHTAGE_GET_REQUEST:
      return {
        fetchingWeightage: true,
        error:[]
      };
    case dataConstants.WEIGHTAGE_GET_SUCCESS:
      return {
        fetchedWeightage: true,
        error:[],
        weightageData: action.data
      };
    case dataConstants.WEIGHTAGE_GET_FAILURE:
      return {
        fetchedWeightage: false,
        error: action.error,
      };
    default:
      return state
  }
}
