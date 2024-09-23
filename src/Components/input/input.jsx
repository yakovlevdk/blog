import styled from "styled-components";
import PropTypes from "prop-types";

import { forwardRef } from "react";
export const InputContainer = forwardRef(
  ({ className, width, ...props }, ref) => {
    return <input className={className} {...props} ref={ref} />;
  }
);
export const Input = styled(InputContainer)`
  height: 40px;
  padding: 15px;
  border: 1px solid #000;
  margin: 0 0 10px;
  font-size: 18px;
  width: 100%;
`;

Input.propTypes = {
  width: PropTypes.string,
};
