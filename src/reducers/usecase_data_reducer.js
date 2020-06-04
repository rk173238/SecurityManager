import { dataConstants } from '../constants';
const initialState = {
                      error:[],
                      fetchedUseCaseData:false,
                      fetchingUseCaseData:false,
                      useCaseData:[],
                    };
export function fetchUseCaseData(state = initialState, action) {
  switch (action.type) {
    case dataConstants.USECASE_DATA_REQUEST:
      return {
        fetchingUseCaseData: true,
        error:[]
      };
    case dataConstants.USECASE_DATA_SUCCESS:
      var useCaseData={}
      useCaseData[action.data.technology]=action.data.data
      return {
        fetchedUseCaseData: true,
        error:[],
        useCaseData,
      };
    case dataConstants.USECASE_DATA_FAILURE:
      return {
        fetchedUseCaseData: false,
        error: action.error,
      };
    case 'USECASE_DATA_CLEAR':
      return initialState
    default:
      return state
  }
}
