import styled from "styled-components";
import { Icon } from "../../../../Components/icon/icon";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../actions/open-modal";
import { CLOSE_MODAL } from "../../../../actions/close-modal";
import { useServer } from "../../../../hooks/user-server";
import { useNavigate } from "react-router";
import { removePost } from "../../../../bff/operations/remove-post";
import { ROLE } from "../../../../constants/role";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../../../selectors/select-user-role";
import PropTypes from "prop-types";
import { checkAccess } from "../../../../utlis/checkAccess";
import { removePostAsync } from "../../../../actions/remove-post-async";
export const SpecialPanelContainer = ({
  className,
  id,
  publishedAt,
  editButton,
}) => {
  const dispatch = useDispatch();
  const requestServer = useServer();
  const navigate = useNavigate();
  const roleId = useSelector(selectUserRole);
  const isAdmin = checkAccess([ROLE.ADMIN], roleId);
  const onPostRemove = (id) => {
    dispatch(
      openModal({
        text: "Удалить статью?",
        onConfirm: () => {
          dispatch(removePostAsync(requestServer, id)).then(() => {
            navigate("/");
          });
          // removePost(requestServer, id).then(() => {
          //   navigate("/");
          // });
          dispatch(CLOSE_MODAL);
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      })
    );
  };
  return (
    <>
      <div className={className}>
        {publishedAt && publishedAt}
        {isAdmin && (
          <div className="buttons">
            {editButton}
            {publishedAt && (
              <Icon
                id="fa-trash-o"
                margin="0  0 0"
                onClick={() => onPostRemove(id)}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export const SpecialPanel = styled(SpecialPanelContainer)`
  display: flex;
  justify-content: space-between;
  margin: ${({ margin }) => margin}
  font-size: 18px;

    & i {
    position: relative;
    top: -1px;
    font-size: 18px;
  }
`;

SpecialPanel.propTypes = {
  id: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  editButton: PropTypes.node.isRequired,
};
