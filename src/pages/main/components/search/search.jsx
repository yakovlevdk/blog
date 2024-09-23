import styled from "styled-components";
import { Icon } from "../../../../Components/icon/icon";
import { Input } from "../../../../Components/input/input";
import PropTypes from "prop-types";
export const SearchContainer = ({ className, searchPhrase, onChange }) => {
  return (
    <div className={className}>
      <Input
        placeholder="Поиск по заголовкам..."
        value={searchPhrase}
        onChange={onChange}
      />
      <Icon id="fa-search" margin="0 7px 0 0" size="18px" />
    </div>
  );
};

export const Search = styled(SearchContainer)`
  display: flex;
  margin: 40px auto 0;
  height: 40px;
  width: 340px;
  & > input {
    padding: 10px 32px 10px 10px;
  }

  & > div {
    margin-left: 5px;
    top: 3px;
    right: 9px;
    font-size: 21px;
  }
`;

Search.propTypes = {
  searchPhrase: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
