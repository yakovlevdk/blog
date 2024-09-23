import styled from "styled-components";
import PropTypes from "prop-types";

export const IconContainer = ({ className, id, ...props }) => (
  <div className={className} {...props}>
    <i className={`fa ${id}`} aria-hidden="true"></i>
  </div>
);

export const Icon = styled(IconContainer)`
  font-size: ${({ size = "25px" }) => size};
  margin: ${({ margin = "0" }) => margin};
  &:hover {
    cursor: pointer;
  }
`;

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  inactive: PropTypes.bool,
};
