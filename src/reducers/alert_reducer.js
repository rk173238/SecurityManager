import { alertConstants } from '../constants';

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      // console.log(action);
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstants.ERROR:
      // console.log(action.message.response);
      return {
        type: 'alert-danger',
        // message:action.message
        message: action.message.response?action.message.response.status===400?'Invalid Username/Password':action.message.message:action.message.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}
