import styled from "styled-components";
import { Icon } from "../../icon/icon";
import { Link } from "react-router-dom";
const IconContainer = ({ className }) => (
  <div className={className}>
    <i className="fa fa-code" aria-hidden="true"></i>
  </div>
);

const LargeText = styled.div`
  font-size: 48px;
  font-weight: 600;
  line-height: 48px;
  margin-top: 17px;
`;

const SmallText = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const LogoContainer = ({ className }) => (
  <Link className={className} to="/">
    <Icon id="fa-code" size="70px" margin="0 10px 0 0" />
    <div>
      <LargeText>Блог</LargeText>
      <SmallText>веб-разработчик</SmallText>
    </div>
  </Link>
);

export const Logo = styled(LogoContainer)`
  display: flex;
  margin-top: -20px;
  color: #000;
  text-decoration: none;
`;
