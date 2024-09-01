import "./App.css";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Components/header/header";

const Footer = () => <div>Footer</div>;
const Content = styled.div`
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
      <Content>
        <p>Content</p>
        <Routes>
          <Route path="/" element={<div>главная</div>} />
          <Route path="/login" element={<div>логин</div>} />
          <Route path="/register" element={<div>регистр</div>} />
          <Route path="/users" element={<div>юзеры</div>} />
          <Route path="/post/:postId" element={<div>статья</div>} />
          <Route path="/post" element={<div>новая статься</div>} />
          <Route path="*" element={<div>ошибка</div>} />
        </Routes>
      </Content>
      <Footer />
    </AppColumn>
  );
};

export default Blog;
