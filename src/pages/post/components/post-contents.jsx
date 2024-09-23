import styled from "styled-components";
import { H2 } from "../../../Components/h2/h2";
import { Icon } from "../../../Components/icon/icon";
import { SpecialPanel } from "./special-panel/special-panel";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { PROP_TYPE } from "../../../constants/prop-type";
const PostContentContainer = ({
  className,
  post: { id, title, imageUrl, content, publishedAt },
}) => {
  const navigate = useNavigate();
  return (
    <div className={className}>
      <img src={imageUrl} alt={title} />
      <H2>{title}</H2>

      <SpecialPanel
        id={id}
        publishedAt={publishedAt}
        margin="-20px 0 20px"
        editButton={
          <Icon
            id="fa-pencil-square-o"
            margin="0  0 0"
            onClick={() => navigate(`/post/${id}/edit`)}
          />
        }
      />
      <div>{content}</div>
    </div>
  );
};

export const PostContent = styled(PostContentContainer)`
  padding: 40px 80px;

  & img {
    float: left;
    margin: 0 20px 10px 0;
  }
  & .special-panel {
    display: flex;
    justify-content: space-between;
    margin: -20px 0 20px;
    font-size: 18px;
  }

  & i {
    position: relative;
    top: -1px;
    font-size: 18px;
  }
`;

PostContent.propTypes = {
  post: PROP_TYPE.POST.isRequired,
};
