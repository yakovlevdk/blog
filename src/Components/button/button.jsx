import styled from "styled-components";
import PropTypes from "prop-types";
export const ButtonContainer = ({ children, className, width, ...props }) => {
  return (
    <button className={className} {...props}>
      {" "}
      {children}{" "}
    </button>
  );
};

export const Button = styled(ButtonContainer)`
  font-size: 18px;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: #eee;
  width: 100px;
  height: 32px;
  padding-top: 3px;
  color: #000;
  text-decoration: none;
  border: 1px solid #000;
  width: 100%;

  &:hover {
    cursor: pointer;
    background-color: #009b45;
    color: white;
  }
`;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};
