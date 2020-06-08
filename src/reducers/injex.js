import { combineReducers } from "redux";
import membersReducer from "./membersReducer";
import errors from "./errors";
import messages from "./messages";
import authReducer from "./authReducer";
import subscriberReducer from "./subscriberReducer";

export default combineReducers({
  membersReducer,
  errors,
  messages,
  authReducer,
  subscriberReducer,
});
