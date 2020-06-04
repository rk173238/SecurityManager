import { userConstants } from '../constants';
const initialState = {changingPass:false, changedPass:false,error:[],user:''} ;
export function changePassword(state = initialState, action) {

  switch (action.type) {
    case userConstants.CHANGE_PASSWORD_REQUEST:
      return {
        changingPass: true,
        user: action.user,
        error:[]
      };
    case userConstants.CHANGE_PASSWORD_SUCCESS:
      return {
        changedPass: true,
        error:[],
        user: action.user
      };
    case userConstants.CHANGE_PASSWORD_FAILURE:
    // console.log(action);
      return {
        changedPass: false,
        error: action.error,
      };
    default:
      return state
  }
}
