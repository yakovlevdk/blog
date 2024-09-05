import { userReducer } from "../reducers/userReducer";
import { ACTION_TYPE } from "./action-type";
export const setUser = (user) => {
  console.log("Выполнена команда setUser");
  return {
    type: ACTION_TYPE.SET_USER,
    payload: user,
  };
};
