import Api from '../api/api'
// import {userConstants} from '../constants'
import { urlConstants } from '../constants';
export const userService = {
    login,
    logout,
    changePassword,
    getToken,
    verifyToken,
    refreshToken,
    checkAdmin,
    checkOldPassword
};

function login(username, password) {
  // const payload = {username:username, password:password };
    const payload = {username:username, password:window.btoa(password) };
    // let data = 'stackabuse.com';
    // let buff = new Buffer(password);
    // let base64data = buff.toString('base64');
    // console.log(base64data);
    var user={user:'',token:'',admin:false}
    if(username==='admin'&&password==='SMC@crs.123'){
      user={user:'admin',token:'abc',admin:true}
      sessionStorage.setItem('user',JSON.stringify(user))
      return Promise.resolve(user)
    }
    else return Promise.reject('cannot login');
    const url=urlConstants.SITE_URL+urlConstants.AUTH_LOGIN_URL
    return Api.post(url,payload).then(response => {
            if (!response.status===200) {
                return Promise.reject(response.statusText);
            }
            let userData={user:JSON.parse(response.config.data).username}
            //console.log("RESPONSEasdasd",response);
            let token=response.data;
            return {...userData,...token,admin:checkAdmin(token.token)};
        })
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in session storage to keep user logged in between page refreshes
                sessionStorage.setItem('user', JSON.stringify(user));
            }
             // console.log(user);
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('data');
    localStorage.removeItem('date');
    localStorage.removeItem('location');
    sessionStorage.removeItem('user');
}
function changePassword(oldPassword, newPassword) {
    const payload = {"old_password":window.btoa(oldPassword), "new_password":window.btoa(newPassword) };
    console.log(payload);
    const url=urlConstants.SITE_URL+urlConstants.AUTH_PASSWORD_CHANGE_URL
    const token=getToken();
    return Api.put(url,payload,{headers: {Authorization : `JWT ${token}`}}).then(response => {
            if (!response.status===200) {
              console.log(response.data);
                return response;
            }
            console.log(response.data);
            return response;
        }).catch(error=>error.response);
}
function checkOldPassword(username,password){
  console.log(username,password)
  const payload = {username:username, password:window.btoa(password) };
  const url=urlConstants.SITE_URL+urlConstants.AUTH_LOGIN_URL
  return Api.post(url,payload).then(response => {
          if (!response.status===200) {
              return false;
          }
          return true;
      });
}
function checkAdmin(token){
  token=token?token.split('.')[1]:''
  return Buffer.from(token?token:'', 'base64').length > 0?JSON.parse(Buffer.from(token?token:'', 'base64').toString('ascii')).admin:0;
}
//Token Code
function getToken(){
  return sessionStorage.getItem('user')?JSON.parse(sessionStorage.getItem('user')).token:null
}

function verifyToken(token){
  if(token){
    // console.log(token);
    const url=urlConstants.SITE_URL+urlConstants.AUTH_TOKEN_VERIFY_URL;

    return Api.post(url,{token: token}).then(response => {
            if (!response.status===200) {
                return false;
            }
            if(token!==response.data.token){
              logout()
            }
        }).catch(err =>{
          // prompt('Do you want to continue the session?');
          logout();
          window.location.reload()
        });
  }
      if(localStorage.getItem('user')){
        alert('Looks like your session expired!! Please Login Again!')
      }
      localStorage.removeItem('user');
  return false;
}

function refreshToken(token){
  if(token){
    const url=urlConstants.SITE_URL+urlConstants.AUTH_TOKEN_REFRESH_URL;
    return Api.post(url,{token: token}).then(response => {
            if (!response.status===200) {
                return false;
            }
            let userData=JSON.parse(sessionStorage.getItem('user'));
            userData.token=response.data.token
            localStorage.setItem('user', JSON.stringify(userData));
            sessionStorage.setItem('user', JSON.stringify(userData));
            return true;
        }).catch(err =>{
          console.log(err);
        });
  }
  return false;
}
