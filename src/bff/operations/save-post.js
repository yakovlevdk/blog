import { ROLE } from "../../constants/role";
import { sessions } from "../sessions";
import { updatePost } from "../api/update-post";
import { createPost } from "../api/create-post";
export const savePost = async (hash, newPostData) => {
  const accessRoles = [ROLE.ADMIN];
  const access = await sessions.access(hash, accessRoles);
  if (!access) {
    return {
      error: "Доступ запрещён",
      res: null,
    };
  }

  const savedPost =
    newPostData.id === ""
      ? await createPost(newPostData)
      : await updatePost(newPostData);
  return {
    error: null,
    res: savedPost,
  };
};
