import { H2 } from "../../Components/h2/h2";
import { TableRow } from "./components/table-row/table-row";
import { useServer } from "../../hooks/user-server";
import { UserRow } from "./components/user-row";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Content } from "../../Components/content/content";
import { ROLE } from "../../constants/role";
export const UsersContainer = ({ className }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const requestServer = useServer();
  const [shouldUpdateUsers, setShouldUpdateUsers] = useState(false);
  useEffect(() => {
    Promise.all([
      requestServer("fetchUsers"),
      requestServer("fetchRoles"),
    ]).then(([usersRes, rolesRes]) => {
      if (usersRes.error || rolesRes.error) {
        setErrorMessage(usersRes.error || rolesRes.error);
        return;
      }

      setUsers(usersRes.res);
      setRoles(rolesRes.res);
    });
  }, [requestServer, shouldUpdateUsers]);

  const onUserRemove = (userId) => {
    requestServer("removeUser", userId).then(() =>
      setShouldUpdateUsers(!shouldUpdateUsers)
    );
  };

  return (
    <div className={className}>
      <Content error={errorMessage}>
        <H2>Пользователи</H2>
        <div>
          <TableRow>
            <div className="login-column">Логин</div>
            <div className="registered-at-column">Дата регистрации</div>
            <div className="role-column">Роль</div>
          </TableRow>
          {users.map(({ id, login, registedAt, roleId }) => (
            <UserRow
              key={id}
              id={id}
              login={login}
              registedAt={registedAt}
              roleId={roleId}
              roles={roles.filter(({ id: roleId }) => roleId !== ROLE.GUEST)}
              onUserRemove={() => onUserRemove(id)}
            />
          ))}
        </div>
      </Content>
    </div>
  );
};

export const Users = styled(UsersContainer)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 570px;
  margin: 0 auto;
  font-size: 18px;
  & .table-header {
    display: flex;
    justify-content: space-between;
  }
`;
