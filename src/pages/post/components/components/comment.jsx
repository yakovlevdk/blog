import styled from "styled-components";
import { Icon } from "../../../../Components/icon/icon";
import { useDispatch, useSelector } from "react-redux";
import { removeCommentAsync } from "../../../../actions/remove-comment";
import { useServer } from "../../../../hooks/user-server";
import { openModal } from "../../../../actions/open-modal";
import { CLOSE_MODAL } from "../../../../actions/close-modal";
import { checkAccess } from "../../../../utlis/checkAccess";
import { selectUserRole } from "../../../../selectors/select-user-role";
import { ROLE } from "../../../../constants/role";
import PropTypes from "prop-types";
export const CommentContainer = ({
  className,
  postId,
  id,
  author,
  publishedAt,
  content,
}) => {
  const dispatch = useDispatch();
  const requestServer = useServer();
  const onCommentRemove = (id) => {
    dispatch(
      openModal({
        text: "Удалить комментарий?",
        onConfirm: () => {
          dispatch(removeCommentAsync(requestServer, postId, id));
          dispatch(CLOSE_MODAL);
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      })
    );
  };
  const userRole = useSelector(selectUserRole);
  const idAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);
  return (
    <div className={className}>
      <div className="comment">
        <div className="information-panel">
          <div className="author">
            <Icon id="fa-user-circle-o" margin="0  0 0" onClick={() => {}} />
            {author}
          </div>
          <div className="published-at">
            <Icon id="fa-calendar-o" margin="0  0 0" onClick={() => {}} />
            {publishedAt}
          </div>
        </div>
        <div className="comment-text">{content}</div>
      </div>
      {idAdminOrModerator && (
        <Icon
          id="fa-trash-o"
          margin="0  0 0 10px"
          onClick={() => onCommentRemove(id)}
        />
      )}
    </div>
  );
};

export const Comment = styled(CommentContainer)`
  display: flex;
  margin-top: 10px;
  & .comment {
    width: 100%;
    border: 1px solid #000;
  }
  & .information-panel {
    display: flex;
    justify-content: space-between;
  }
  & .author {
    display: flex;
  }
  & .published_at {
    display: flex;
  }
`;

Comment.propTypes = {
  postId: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
};
