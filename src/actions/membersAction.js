import axios from "axios";
import { createMessage, returnErrors } from "./messagesAction";

import { tokenConfig } from "./authAction";

import { GET_MEMBERS, DELETE_MEMBER, ADD_MEMBER, UPDATE_MEMBER } from "./types";

//GET MEMBERS
export const getMembers = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/member", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_MEMBERS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//DELETE MEMBERS
export const deleteMember = (id) => (dispatch, getState) => {
  axios
    .delete(`http://127.0.0.1:8000/api/member/${id}`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ memberDeleted: "Membre retiré" }));
      dispatch({
        type: DELETE_MEMBER,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

//ADD MEMBER
export const addMember = (member) => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/member/", member, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ memberAdded: "Membre ajouté" }));

      dispatch({
        type: ADD_MEMBER,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// UPDATE MEMBER
export const updateMemeber = (id, values) => (dispatch, getState) => {
  axios
    .put(
      `http://127.0.0.1:8000/api/member/${id}/`,
      {
        firstname: values.firstname,
        lastname: values.lastname,
        phone: values.phone,
        address: values.address,
      },
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: UPDATE_MEMBER,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
