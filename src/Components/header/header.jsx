import styled from "styled-components";
import { Logo } from "./components/logo";
import { ControlPanel } from "./components/controlpanel";
const Discription = styled.div`
  font-style: italic;
`;
export const HeaderContainer = ({ className }) => (
  <header className={className}>
    <Logo />
    <Discription>
      Веб-технологии
      <br />
      Написание кода
      <br />
      Разбор ошибок
    </Discription>
    <ControlPanel />
  </header>
);

export const Header = styled(HeaderContainer)`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 1000px;
  height: 120px;
  padding: 20px 40px;
  background-color: white;
  box-shadow: 0px -2px 17px #000;
`;
