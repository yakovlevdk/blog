import { PROP_TYPE } from "../../constants/prop-type";
import { H2 } from "../h2/h2";
import PropTypes from "prop-types";
export const Error = (error) => {
  console.log(error);
  if (error) {
    return (
      <>
        <div>
          <H2>Ошибка</H2>
          <div>{error.error}</div>
        </div>
      </>
    );
  }
  return;
};

Error.propTypes = {
  error: PROP_TYPE.ERROR,
};
