// DONE
import {
  ACCOUNT_FAIL,
  ACCOUNT_REQUEST,
  ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_FAIL,
  UPDATE_ACCOUNT_REQUEST,
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
import Axios from "axios";

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/users/signin", { email, password });
    dispatch({ type: SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: SIGNIN_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
  }
};

export const account = (userId) => async (dispatch, getState) => {
  dispatch({ type: ACCOUNT_REQUEST, payload: userId });
  try {
    const { data } = await Axios.get(`/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${getState().signin.data.token}` },
    });
    dispatch({ type: ACCOUNT_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    dispatch({ type: ACCOUNT_FAIL, payload: message });
  }
};

export const updateAccount = (user) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_ACCOUNT_REQUEST, payload: user });
  try {
    const { data } = await Axios.put(`/api/users/account`, user, {
      headers: { Authorization: `Bearer ${getState().signin.data.token}` },
    });
    dispatch({ type: UPDATE_ACCOUNT_SUCCESS, payload: data });
    dispatch({ type: SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    dispatch({ type: UPDATE_ACCOUNT_FAIL, payload: message });
  }
};

export const forgetPassword = (email) => async (dispatch) => {
  dispatch({ type: FORGET_PASSWORD_REQUEST, payload: { email } });
  try {
    const { data } = await Axios.post("/api/users/forget-password", { email });
    dispatch({ type: FORGET_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FORGET_PASSWORD_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const resetPassword = (resetLink, password) => async (dispatch) => {
  dispatch({ type: RESET_PASSWORD_REQUEST, payload: { password } });
  try {
    const { data } = await Axios.post("/api/users/reset-password", { password }, { headers: { authorization: `Bearer ${resetLink}` } });
    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const signout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: SIGNOUT });
};
