import { setUserRole } from "../api/set-user-role";
import { ROLE } from "../../constants/role";
import { sessions } from "../sessions";
export const updateUserRole = async (hash, userId, selectedRoleId) => {
  const accessRoles = [ROLE.ADMIN];
  const access = await sessions.access(hash, accessRoles);
  if (!access) {
    return {
      error: "Доступ запрещён",
      res: null,
    };
  }

  setUserRole(userId, selectedRoleId);
  return {
    error: null,
    res: true,
  };
};
