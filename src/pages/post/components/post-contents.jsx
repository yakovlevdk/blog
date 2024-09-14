import styled from "styled-components";
import { H2 } from "../../../Components/h2/h2";
import { Icon } from "../../../Components/icon/icon";
const PostContentContainer = ({
  className,
  post: { id, title, imageUrl, content, publishedAt },
}) => {
  return (
    <div className={className}>
      <img src={imageUrl} alt={title} />
      <H2>{title}</H2>
      <div className="special-panel">
        {publishedAt}
        <div className="buttons">
          <Icon id="fa-pencil-square-o" margin="0  0 0" onClick={() => {}} />
          <Icon id="fa-trash-o" margin="0  0 0" onClick={() => {}} />
        </div>
      </div>
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
