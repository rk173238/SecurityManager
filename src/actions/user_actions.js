import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './alert_actions';
import {history} from '../utility'

export const userActions = {
    login,
    logout,
    changePassword
};

function login(username, password){

    return dispatch => {
        dispatch(request({ username }));
        userService.login(username, password)
            .then(
                user => {

                    dispatch(success(user));
                    dispatch(alertActions.success('Login Successful'));
                    history.push('/home');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );

    // UNCOMMENT ABOVE FOR AUTH
        // if(userService.login(username, password)===userConstants.USERNAME)
        //      {
        //             dispatch(success(username));
        //             dispatch(alertActions.success('Login Successful'));
        //         }
        //         else
        //         {
        //             dispatch(failure(username));
        //             dispatch(alertActions.error('Invalid Username or Password'));
        //         }

    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
function logout() {
  // console.log('logging out');
  return dispatch => {
    userService.logout();
        dispatch(loggedOut());
        dispatch(alertActions.clear());

    };
    function loggedOut() { return { type: userConstants.LOGOUT };}
}
function changePassword(user, oldPassword, newPassword) {
  // console.log('logging out');
  return dispatch => {
    dispatch(request({ user }));
    userService.changePassword(oldPassword, newPassword)
        .then(
            res => {
              // console.log(res);
              if(res.status===200){
                dispatch(success(user));
                dispatch(alertActions.success('Password Changed Successful'));
                history.push('/home');
              }
              else{
                dispatch(failure(res.data.new_password));
                dispatch(alertActions.error(res.statusText));
              }
            },
            error => {
              console.log(error);

                dispatch(failure(error));
                dispatch(alertActions.error(error));
            }
        );
    function request(user) { return { type: userConstants.CHANGE_PASSWORD_REQUEST, user } }
    function success(user) { return { type: userConstants.CHANGE_PASSWORD_SUCCESS, user } }
    function failure(error) { return { type: userConstants.CHANGE_PASSWORD_FAILURE, error } }
  }
}
