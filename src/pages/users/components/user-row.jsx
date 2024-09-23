// UserRow component
import styled from "styled-components";
import { Icon } from "../../../Components/icon/icon";
import { TableRow } from "./table-row/table-row";
import { useState } from "react";
import PropTypes from "prop-types";
import { useServer } from "../../../hooks/user-server";
import { PROP_TYPE } from "../../../constants/prop-type";
export const UserRowContainer = ({
  className,
  id,
  login,
  registedAt,
  roleId: userRoleId,
  roles,
  onUserRemove,
}) => {
  const [initialRoleId, setInitialRoleId] = useState(userRoleId);
  const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
  const onRoleChange = ({ target }) => {
    setSelectedRoleId(target.value);
  };
  const requestServer = useServer();
  const onRoleSave = (userId, newUserRoleId) => {
    requestServer("updateUserRole", userId, newUserRoleId).then(() =>
      setInitialRoleId(newUserRoleId)
    );
  };
  return (
    <div className={className}>
      <TableRow border={true}>
        <div className="login-column">{login}</div>
        <div className="registered-at-column">{registedAt}</div>
        <div className="role-column">
          <select value={selectedRoleId} onChange={onRoleChange}>
            {roles.map(({ id: roleId, name: roleName }) => (
              <option key={roleId} value={roleId}>
                {roleName}
              </option>
            ))}
          </select>
          <Icon
            id="fa-floppy-o"
            margin="0 0 0 10px"
            onClick={() => onRoleSave(id, selectedRoleId)}
          />
        </div>
      </TableRow>

      <Icon id="fa-trash-o" margin="0 0 0 10px" onClick={onUserRemove} />
    </div>
  );
};

export const UserRow = styled(UserRowContainer)`
  display: flex;
  margin-top: 10px;
  & select {
    font-size: 16px;
    padding: 0 5px;
  }
`;
// Add your styles here

UserRow.propTypes = {
  id: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  registedAt: PropTypes.string.isRequired,
  roleId: PROP_TYPE.ROLE_ID,
  roles: PropTypes.arrayOf(PROP_TYPE.ROLE).isRequired,
  onUserRemove: PropTypes.func.isRequired,
};
