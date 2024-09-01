import styled from "styled-components";
import { Icon } from "../../icon/icon";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const StyledLink = styled(Link)`
  font-size: 18px;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: #eee;
  width: 100px;
  height: 32px;
  color: #000;
  text-decoration: none;
  border: 1px solid #000;
`;

const StyledDiv = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
export const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div className={className}>
      <RightAligned>
        <StyledLink to="/login">Войти</StyledLink>
      </RightAligned>
      <RightAligned>
        <StyledDiv onClick={() => navigate(-1)}>
          <Icon id="fa-backward" size="25px" margin="10px 0px 0 0" />
        </StyledDiv>
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
