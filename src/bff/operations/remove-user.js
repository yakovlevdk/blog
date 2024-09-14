import { sessions } from "../sessions";
import { ROLE } from "../../constants/role";
import { deleteUser } from "../api/delete-user";
export const removeUser = async (hash, userId) => {
  const accessRoles = [ROLE.ADMIN];
  const access = await sessions.access(hash, accessRoles);
  if (!access) {
    return {
      error: "Доступ запрещён",
      res: null,
    };
  }

  deleteUser(userId);
  return {
    error: null,
    res: true,
  };
};
