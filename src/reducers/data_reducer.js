import { dataConstants } from '../constants';
const initialState = {
                      fetchingData:false,
                      fetchedData:false,
                      data:'',
                      error:[],
                    };
export function fetchData(state = initialState, action) {
  switch (action.type) {
    case dataConstants.DATA_REQUEST:
      return {
        fetchingData: true,
        data: action.data,
        error:[]
      };
    case dataConstants.DATA_SUCCESS:
      return {
        fetchedData: true,
        error:[],
        data: action.data
      };
    case dataConstants.DATA_FAILURE:
      return {
        fetchedData: false,
        error: action.error,
      };
    default:
      return state
  }
}
