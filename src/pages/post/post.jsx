import { useEffect } from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { Error } from "../../Components/error/error";
import { useDispatch } from "react-redux";
import { loadPost } from "../../actions/load-post";
import { PostContent } from "./components/post-contents";
import { useMatch } from "react-router";
import { useParams } from "react-router";
import { Comments } from "./components/comments";
import { useServer } from "../../hooks/user-server";
import { selectPost } from "../../selectors/select-post";
import { PostForm } from "./components/post-form/post-form";
import { RESET_POST_DATA } from "../../actions/RESET_POST_DATA";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { PrivateContent } from "../../Components/content/content";
import { ROLE } from "../../constants/role";
import { selectUserRole } from "../../selectors/select-user-role";
export const PostContainer = ({ className }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [error, setError] = useState(null);
  const isEditing = !!useMatch("post/:id/edit");
  const isCreating = !!useMatch("/post");
  const requestServer = useServer();
  const post = useSelector(selectPost);

  useEffect(() => {
    if (isCreating) {
      return;
    }
    dispatch(loadPost(requestServer, params.id)).then((postData) => {
      setError(postData.error);
    });
  }, [dispatch, params.id, requestServer, isCreating]);

  useLayoutEffect(() => {
    dispatch(RESET_POST_DATA);
  }, [dispatch]);
  return error ? (
    <Error />
  ) : isCreating || isEditing ? (
    <PrivateContent access={[ROLE.ADMIN]}>
      <div className={className}>
        <PostForm post={post} />
      </div>
    </PrivateContent>
  ) : (
    <div className={className}>
      <PostContent post={post} />
      <Comments comments={post.comments} postId={post.id} />
    </div>
  );
};

export const Post = styled(PostContainer)``;
