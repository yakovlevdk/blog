import { authorize } from "./operations/authorize";
import { register } from "./operations/register";
import { logout } from "./operations/logout";
import { fetchRoles } from "./operations/fetch-roles";
import { fetchUsers } from "./operations/fetch-users";
import { removeUser } from "./operations/remove-user";
import { updateUserRole } from "./operations/update-user-role";
export const server = {
  authorize,
  logout,
  register,
  fetchRoles,
  fetchUsers,
  updateUserRole,
  removeUser,
};
