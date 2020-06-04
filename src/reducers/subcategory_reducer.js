import { dataConstants } from '../constants';
const initialState = {
                      error:[],
                      fetchedSubCategoryData:false,
                      fetchingSubCategoryData:false,
                      subcategoryData:[],
                    };
export function fetchSubCategoryData(state = initialState, action) {
  switch (action.type) {
    case "SUBCATEGORY_REQUEST":
      return {
        fetchingSubCategoryData: true,
        error:[]
      };
    case "SUBCATEGORY_SUCCESS":
      return {
        fetchedSubcategoryData: true,
        error:[],
        subCategoryData: action.data
      };
    case "SUBCATEGORY_ERROR":
      return {
        fetchedSubCategoryData: false,
        error: action.error,
      };
    case 'SUBCATEGORY_DATA_CLEAR':
      return initialState
    default:
      return state
  }
}
