import "./App.css";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

const Header = () => <div>Header</div>;
const Footer = () => <div>Footer</div>;
const Content = styled.div`
  padding: 120px 0;
`;
export const Blog = () => {
  return (
    <>
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
    </>
  );
};

export default Blog;
