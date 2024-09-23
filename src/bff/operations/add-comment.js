import { addComment } from "../api/create-comment";
import { getPost } from "../api/get-post";
import { sessions } from "../sessions";
import { ROLE } from "../../constants/role";
import { getCommentsWithAuthor } from "../utils/get-comments-with-author";
export const addPostComment = async (hash, userId, postId, content) => {
  const accessRoles = [ROLE.ADMIN, ROLE.READER, ROLE.MODERATOR];
  const access = await sessions.access(hash, accessRoles);
  if (!access) {
    return {
      error: "Доступ запрещён",
      res: null,
    };
  }

  await addComment(userId, postId, content);
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
