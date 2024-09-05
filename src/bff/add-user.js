import { generateDate } from "./generate-date";

export const addUser = (regLogin, regPassword) => {
  return fetch("http://localhost:3005/users,", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      login: regLogin,
      password: regPassword,
      registed_at: generateDate(),
      role_id: 2,
    }).then((user) => user.json()),
  });
};
