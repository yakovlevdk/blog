import "./App.css";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Components/header/header";
import { Footer } from "./Components/footer/footer";
import { Authorization } from "./pages/authorization/authorization";
import { Registration } from "./pages/registration/registration";
import { Users } from "./pages/users/users";
const Page = styled.div`
  padding: 120px 0;
`;

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;
  background-color: #fff;
`;
export const Blog = () => {
  return (
    <AppColumn>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<div>главная</div>} />
          <Route path="/login" element=<Authorization /> />
          <Route path="/register" element=<Registration /> />
          <Route path="/users" element={<Users />} />
          <Route path="/post/:postId" element={<div>статья</div>} />
          <Route path="/post" element={<div>новая статься</div>} />
          <Route path="*" element={<div>ошибка</div>} />
        </Routes>
      </Page>
      <Footer />
    </AppColumn>
  );
};

export default Blog;
