import "./App.css";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Components/header/header";
import { Footer } from "./Components/footer/footer";
import { Authorization } from "./pages/authorization/authorization";
import { Registration } from "./pages/registration/registration";
import { Users } from "./pages/users/users";
import { Post } from "./pages/post/post";
import { useDispatch } from "react-redux";
import { setUser } from "./actions/set-user";
import { useLayoutEffect } from "react";
import { Modal } from "./Components/modal/modal";
import { Main } from "./pages/main/main";
import { Error } from "./Components/error/error";
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
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const currentUserDataJSON = sessionStorage.getItem("userData");

    if (!currentUserDataJSON) {
      return;
    }
    const currentUserData = JSON.parse(currentUserDataJSON);
    dispatch(
      setUser({
        ...currentUserData,
        roleId: Number(currentUserData.roleId),
      })
    );
  }, [dispatch]);

  return (
    <AppColumn>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element=<Authorization /> />
          <Route path="/register" element=<Registration /> />
          <Route path="/users" element={<Users />} />
          <Route path="/post/:id" element=<Post /> />
          <Route path="/post/:id/edit" element=<Post /> />
          <Route path="/post" element={<Post />} />
          <Route
            path="*"
            element={<Error error="Такая страница не существует" />}
          />
        </Routes>
      </Page>
      <Footer />
      <Modal />
    </AppColumn>
  );
};

export default Blog;
