import { getPost } from "../api/get-post";
import { sessions } from "../sessions";
import { ROLE } from "../../constants/role";
import { getComments } from "../api/get-comments";
import { deleteComment } from "../api/delete-comment";
import { getCommentsWithAuthor } from "../utils/get-comments-with-author";
export const removePostComment = async (hash, postId, id) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];
  const access = await sessions.access(hash, accessRoles);
  if (!access) {
    return {
      error: "Доступ запрещён",
      res: null,
    };
  }

  await deleteComment(id);
  const post = await getPost(postId);

  const commentsWithAuthor = await getCommentsWithAuthor(postId);
  return {
    error: null,
    res: {
      ...post,
      comments: commentsWithAuthor,
    },
  };
};
