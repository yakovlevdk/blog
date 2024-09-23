import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const PostCardContainer = ({
  className,
  id,
  title,
  imageUrl,
  publishedAt,
  commentsCount,
}) => {
  return (
    <div className={className}>
      <Link to={`/post/${id}`}>
        <img src={imageUrl} alt={title} />
        <div className="post-card-footer">
          <h4>{title}</h4>
          <div className="post-card-info">
            <div className="published-at">{publishedAt}</div>
            <div className="comments-count">Комментариев: {commentsCount}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const PostCard = styled(PostCardContainer)`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin: 40px 40px 0 0;
  border: 1px solid #000;
  &img {
    display: block;
    width: 100%;
  }
  & .post-card-footer {
    border-top: 1px solid #000;
  }
  & h4 {
    margin: 5px;
  }
`;

PostCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  commentsCount: PropTypes.number.isRequired,
};
