import { getSession } from "./api/get-session";
import { addSession } from "./api/add-session";
import { deleteSession } from "./api/delete-session";
export const sessions = {
  create(user) {
    const hash = Math.random().toFixed(50);

    addSession(hash, user);

    return hash;
  },

  async remove(hash) {
    const session = await getSession(hash);
    if (!session) {
      return;
    }
    deleteSession(session.id);
  },

  async access(hash, accessRoles) {
    const dbSession = await getSession(hash);

    return !!dbSession?.user && accessRoles.includes(dbSession.user.roleId);
  },
};
