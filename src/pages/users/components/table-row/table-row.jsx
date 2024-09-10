import styled from "styled-components";

export const TableRowContainer = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export const TableRow = styled(TableRowContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ border }) => (border ? "border: 1px solid #000;" : "")}
  & > div {
    display: flex;
    padding: 0 10px;
  }
  & .login-column {
    width: 172px;
  }
  & .registered-at-column {
    width: 213px;
  }
  & .role-column {
    width: auto;
  }
`;
