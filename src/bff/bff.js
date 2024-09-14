import { authorize } from "./operations/authorize";
import { register } from "./operations/register";
import { logout } from "./operations/logout";
import { fetchRoles } from "./operations/fetch-roles";
import { fetchUsers } from "./operations/fetch-users";
import { removeUser } from "./operations/remove-user";
import { updateUserRole } from "./operations/update-user-role";
import { fetchPost } from "./operations/fetch-post";
import { addPostComment } from "./operations/add-comment";
export const server = {
  authorize,
  logout,
  register,
  fetchRoles,
  fetchUsers,
  updateUserRole,
  removeUser,
  fetchPost,
  addPostComment,
};
