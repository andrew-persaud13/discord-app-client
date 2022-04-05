import { alertActions } from '../actions/alertActions';

const initialState = {
  showAlertMessage: false,
  alertMessageContent: null,
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case alertActions.OPEN_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: true,
        alertMessageContent: action.content,
      };
    case alertActions.CLOSE_ALERT_MESSAGE:
      return { ...state, showAlertMessage: false, alertMessageContent: '' };
    default:
      return state;
  }
};

export default alertReducer;
