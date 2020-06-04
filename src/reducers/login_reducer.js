import { userConstants } from '../constants';
// import {getToken,verifyToken} from '../services';
import {userService} from '../services'
const adminChecker=()=>{
  let token=userService.getToken()?userService.getToken().split('.')[1]:''
  return Buffer.from(token?token:'', 'base64').length > 0?JSON.parse(Buffer.from(token?token:'', 'base64').toString('ascii')).admin:0;
}
const initialState = {
                        isAdmin:adminChecker(),
                        isAuthenticated:sessionStorage.getItem('user')?true:false,
                        loggedIn:sessionStorage.getItem('user')?true: false,
                        loggingIn: false,
                        user:sessionStorage.getItem('user')?JSON.parse(sessionStorage.getItem('user')).user:''
                      };
userService.verifyToken(userService.getToken())
export function login(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        isAdmin:action.user.admin,
        user: action.user.user,
        isAuthenticated:true
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {isAuthenticated:false,loggedIn:false};
    default:
      return state
  }
}
