import axios from "axios";
import { createMessage, returnErrors } from "./messagesAction";

import { GET_SUBSCRIBERS, DELETE_SUBSCRIBER, ADD_SUBSCRIBER } from "./types";
import { tokenConfig } from "./authAction";

//GET SUBSCRIBERS
export const getSubscribers = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/subscriber", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SUBSCRIBERS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//DELETE SUBSCRIBER
export const deleteSubscriber = (id) => (dispatch, getState) => {
  axios
    .delete(`http://127.0.0.1:8000/api/subscriber/${id}`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ subscriberDeleted: "Adhérant retiré !" }));
      dispatch({
        type: DELETE_SUBSCRIBER,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

//ADD SUBSCRIBER
export const addSubscriber = (subscriber) => (dispatch) => {
  axios
    .post("http://127.0.0.1:8000/api/subscriber/", subscriber)
    .then((res) => {
      dispatch(createMessage({ subscriberAdded: "Demande envoyée !" }));

      dispatch({
        type: ADD_SUBSCRIBER,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
