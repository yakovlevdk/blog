import { getUser } from "../api/get-user";
import { sessions } from "../sessions";
import { addUser } from "../api/add-user";
export const register = async (regLogin, regPassword) => {
  const existedRegUser = await getUser(regLogin);
  if (existedRegUser) {
    return {
      error: "Такой логин уже занят",
      res: null,
    };
  }

  const user = await addUser(regLogin, regPassword);

  return {
    error: null,
    res: {
      id: user.id,
      login: user.login,
      roleId: user.role_id,
      session: sessions.create(user),
    },
  };
};
