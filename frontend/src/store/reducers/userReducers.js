// DONE
import {
  ACCOUNT_FAIL,
  ACCOUNT_REQUEST,
  ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_FAIL,
  UPDATE_ACCOUNT_REQUEST,
  UPDATE_ACCOUNT_RESET,
  UPDATE_ACCOUNT_SUCCESS,
  FORGET_PASSWORD_FAIL,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  SIGNIN_FAIL,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNOUT,
} from "../constants/userConstants";

export const signinReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return { loading: true };
    case SIGNIN_SUCCESS:
      return { loading: false, data: action.payload };
    case SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const accountReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case ACCOUNT_REQUEST:
      return { loading: true };
    case ACCOUNT_SUCCESS:
      return { loading: false, data: action.payload };
    case ACCOUNT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateAccountReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ACCOUNT_REQUEST:
      return { loading: true };
    case UPDATE_ACCOUNT_SUCCESS:
      return { loading: false, data: true };
    case UPDATE_ACCOUNT_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_ACCOUNT_RESET:
      return {};
    default:
      return state;
  }
};

export const forgetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGET_PASSWORD_REQUEST:
      return { loading: true };
    case FORGET_PASSWORD_SUCCESS:
      return { loading: false, data: action.payload };
    case FORGET_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const resetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return { loading: true };
    case RESET_PASSWORD_SUCCESS:
      return { loading: false, data: action.payload };
    case RESET_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
