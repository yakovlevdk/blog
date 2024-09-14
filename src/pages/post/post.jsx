import { useEffect } from "react";
import { H2 } from "../../Components/h2/h2";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadPost } from "../../actions/load-post";
import { PostContent } from "./components/post-contents";
import { useParams } from "react-router";
import { Comments } from "./components/comments";
import { useServer } from "../../hooks/user-server";
import { selectPost } from "../../selectors/select-post";
export const PostContainer = ({ className }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const requestServer = useServer();
  const post = useSelector(selectPost);
  useEffect(() => {
    dispatch(loadPost(requestServer, params.id));
  }, [dispatch, params.id, requestServer]);
  return (
    <div className={className}>
      <H2>Статьи</H2>
      <PostContent post={post} />
      <Comments comments={post.comments} postId={post.id} />
    </div>
  );
};

export const Post = styled(PostContainer)``;
