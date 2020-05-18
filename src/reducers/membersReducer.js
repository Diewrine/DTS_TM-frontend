import {
  GET_MEMBERS,
  DELETE_MEMBER,
  ADD_MEMBER,
  UPDATE_MEMBER,
} from "../actions/types.js";

const initialState = {
  members: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MEMBERS:
      return {
        ...state,
        members: action.payload,
      };
    case DELETE_MEMBER:
      return {
        ...state,
        members: state.members.filter((member) => member.id !== action.payload),
      };
    case ADD_MEMBER:
      return {
        ...state,
        members: [...state.members, action.payload],
      };
    case UPDATE_MEMBER:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
}
