import { combineReducers } from 'redux';
import { login } from './login_reducer';
import { alert } from './alert_reducer';
import {changePassword} from './change_password_reducer'
import {fetchData} from './data_reducer'
import {fetchDeviceData} from './device_reducer';
import {fetchWeightage} from './weightage_reducer';
import {fetchUseCaseData} from './usecase_data_reducer';
import {fetchSubCategoryData} from './subcategory_reducer'
const appReducer = combineReducers({
  login,
  alert,
  changePassword,
  fetchData,
  fetchDeviceData,
  fetchWeightage,
  fetchUseCaseData,
  fetchSubCategoryData
})

const rootReducer = (state, action) => {
  console.log(action);
  if (action.type === 'USERS_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;
