import { useState } from "react";
import styled from "styled-components";
import { Icon } from "../../../Components/icon/icon";
import { Comment } from "./components/comment";
import { selectUserId } from "../../../selectors/select-user-id";
import { useServer } from "../../../hooks/user-server";
import { useDispatch, useSelector } from "react-redux";
import { addCommentAsync } from "../../../actions/add-comment-async";
const CommentsContainer = ({ className, comments, postId }) => {
  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const requestServer = useServer();
  const onNewCommentAdd = (userId, postId, content) => {
    dispatch(addCommentAsync(requestServer, userId, postId, content));
  };

  return (
    <div className={className}>
      <div className="new-comment">
        <textarea
          name="comment"
          value={newComment}
          placeholder="Комментарий..."
          onChange={({ target }) => setNewComment(target.value)}
        ></textarea>
        <Icon
          id="fa-paper-plane-o"
          margin="0  0 0"
          onClick={() => {
            onNewCommentAdd(userId, postId, newComment);
          }}
        />
      </div>
      <div className="comments">
        {comments.map(({ id, author, content, publishedAt }) => {
          return (
            <Comment
              key={id}
              id={id}
              author={author}
              content={content}
              publishedAt={publishedAt}
            />
          );
        })}
      </div>
    </div>
  );
};

export const Comments = styled(CommentsContainer)`
  width: 580px;
  margin: 0 auto;

  & .new-comment {
    display: flex;
    width: 100%;
    margin: 20px 0 0;
  }
  & .new-comment textarea {
    width: 100%;
    top: 120px;
  }
`;
