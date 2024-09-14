import { transformPost } from "../transformers/transform-post";
export const getPost = async (postId) => {
  return fetch(`http://localhost:3005/posts/${postId}`)
    .then((loadedPost) => loadedPost.json())
    .then((loadedPost) => {
      return loadedPost && transformPost(loadedPost);
    });
};
