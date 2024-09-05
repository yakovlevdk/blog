import { ACTION_TYPE } from "../actions/action-type";
import { ROLE } from "../constants/role";

const initialState = {
  id: null,
  login: null,
  roleId: ROLE.GUEST,
  session: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_USER: {
      return { ...state, ...action.payload };
    }
    case ACTION_TYPE.LOGOUT:
      return initialState;

    default:
      return state;
  }
};
