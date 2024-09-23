import { generateDate } from "../utils/generate-date";
export const createPost = ({ imageUrl, title, content }) => {
  return fetch("http://localhost:3005/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      image_url: imageUrl,
      published_at: generateDate(),
      title,
      content,
    }),
  }).then((createdPost) => createdPost.json());
};
