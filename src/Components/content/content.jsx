import styled from "styled-components";
import { Error } from "../error/error";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../selectors/select-user-role";
import { checkAccess } from "../../utlis/checkAccess";
import PropTypes from "prop-types";
import { PROP_TYPE } from "../../constants/prop-type";

export const PrivateContent = ({ children, access, error = null }) => {
  const userRole = useSelector(selectUserRole);
  const accessError = checkAccess(access, userRole) ? null : "Доступ запрещён";
  const gError = error || accessError;
  return gError ? <Error error={gError} /> : children;
};

PrivateContent.propTypes = {
  children: PropTypes.node.isRequired,
  access: PropTypes.arrayOf(PROP_TYPE.ROLE_ID).isRequired,
  error: PROP_TYPE.ERROR,
};
