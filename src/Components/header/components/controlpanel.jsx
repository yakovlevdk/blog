import styled from "styled-components";
import { Icon } from "../../icon/icon";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "../../button/button";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../../selectors/select-user-role";
import { selectUserLogin } from "../../../selectors/select-user-login";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/logout";
import { ROLE } from "../../../constants/role";
import { selectUserSession } from "../../../selectors/select-user-session";
const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledLogoutDiv = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const UserName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const session = useSelector(selectUserSession);
  return (
    <div className={className}>
      <RightAligned>
        {roleId === ROLE.GUEST ? (
          <Button>
            <Link to="/login">Войти</Link>
          </Button>
        ) : (
          <>
            <UserName>{login}</UserName>
            <StyledLogoutDiv>
              <Icon
                id="fa-sign-out"
                size="25px"
                margin="0 0 0 10px"
                onClick={() => dispatch(logout(session))}
              />
            </StyledLogoutDiv>
          </>
        )}
      </RightAligned>
      <RightAligned>
        <Icon
          id="fa-backward"
          size="25px"
          margin="10px 0px 0 0"
          onClick={() => navigate(-1)}
        />
        <Link to="/posts">
          <Icon id="fa-file-text-o" size="25px" margin="10px 0px 0 16px" />
        </Link>
        <Link to="/users">
          <Icon
            to="/users"
            id="fa-users"
            size="25px"
            margin="10px 0px 0 16px"
          />
        </Link>
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)``;
