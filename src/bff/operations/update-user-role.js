import { setUserRole } from "../api/set-user-role";
import { ROLE } from "../../constants/role";
import { sessions } from "../sessions";
export const updateUserRole = async (userSession, userId, selectedRoleId) => {
  const accessRoles = [ROLE.ADMIN];
  if (!sessions.access(userSession, accessRoles)) {
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
