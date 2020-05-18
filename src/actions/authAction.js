import axios from "axios";
import { createMessage, returnErrors } from "./messagesAction";

import {
  USER_LOADED,
  USER_LOADIND,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  PASSWORD_FAILED,
  PASSWORD_UPDATED,
} from "./types";

//CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // USER Loading
  dispatch({ type: USER_LOADIND });

  axios
    .get("http://localhost:8000/api/auth/user", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

//-----------------------

//LOGIN USER
export const login = (username, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  axios
    .post("http://localhost:8000/api/auth/login", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post("http://localhost:8000/api/auth/logout", null, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// UPDATED PASSWORD
export const updatedPassword = (old_password, new_password) => (
  dispatch,
  getState
) => {
  // Request Body
  const body = JSON.stringify({ old_password, new_password });

  axios
    .put("http://localhost:8000/api/auth/password", body, tokenConfig(getState))
    .then((res) => {
      if (res.data.status === "success") {
        dispatch(
          createMessage({ passwordChanged: "Le mot de passe a été changé !" })
        );
        dispatch({
          type: PASSWORD_UPDATED,
          payload: res,
        });
      } else if (res.data.status === "failed") {
        dispatch(
          returnErrors({
            passwordError: "Echec ! Vous n'avez pas saisi le bon mot de passe.",
          })
        );
        dispatch({
          type: PASSWORD_FAILED,
        });
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
};

// Function to get header config
export const tokenConfig = (getState) => {
  // Getting token
  const token = getState().authReducer.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // if token is valid, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
