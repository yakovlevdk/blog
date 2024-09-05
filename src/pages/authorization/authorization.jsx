import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { server } from "../../bff/bff";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "../../Components/input/input";
import { Button } from "../../Components/button/button";
import { Link } from "react-router-dom";
import { H2 } from "../../Components/h2/h2";
import styled from "styled-components";
import { setUser } from "../../actions/set-user";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../selectors/select-user-role";
import { ROLE } from "../../constants/role";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../registration/registration";
import { useResetForm } from "../../hooks/use-reset-form";
const authFormSchema = yup.object().shape({
  login: yup
    .string()
    .required("Заполните логин")
    .matches(
      /^\w+$/,
      "Неверно заполнен логин. Допускаются только буквы и цифры"
    )
    .min(3, "Слишком короткий логин")
    .max(15, "Слишком длинный логин."),
  password: yup
    .string()
    .required("Заполните пароль")
    .matches(/^\w+$/, "Неверно заполнен пароль.")
    .min(6, "Слишком короткий пароль.")
    .max(30, "Слишком длинный пароль"),
});

export const AuthorizationContainer = ({ className }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(authFormSchema),
  });
  const navigate = useNavigate();
  const role = useSelector(selectUserRole);
  const dispatch = useDispatch();
  const [serverError, setServerError] = useState();
  const onSubmit = ({ login, password }) => {
    server.authorize(login, password).then(({ error, res }) => {
      if (error) {
        setServerError(`Ошибка запроса ${error}`);
        return;
      }
      dispatch(setUser(res));
    });
  };

  useResetForm(reset);
  const formError = errors?.login?.message || errors?.password?.message;
  const errorMessage = formError || serverError;

  if (role !== ROLE.GUEST) {
    return navigate("/");
  }
  return (
    <div className={className}>
      <H2>Авторизация</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Логин"
          {...register("login", {
            onChange: () => setServerError(null),
          })}
        />
        <Input
          type="password"
          placeholder="Пароль"
          {...register("password", {
            onChange: () => setServerError(null),
          })}
        />
        <Button type="submit" disabled={!!formError}>
          Авторизоваться
        </Button>
        <StyledLink to="/register"> Регистрация</StyledLink>

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </form>
    </div>
  );
};

export const Authorization = styled(AuthorizationContainer)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & > form {
    display: flex;
    flex-direction: column;
    width: 260px;
  }
`;

export const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: underline;
  margin: 20px 0;
  font-size: 18px;
  &:hover {
    color: #009b45;
  }
`;
