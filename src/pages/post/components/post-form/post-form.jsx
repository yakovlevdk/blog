import styled from "styled-components";
import { useRef } from "react";
import PropTypes from "prop-types";
import { H2 } from "../../../../Components/h2/h2";
import { sanizeContent } from "./utils/sanitaze-content";
import { Icon } from "../../../../Components/icon/icon";
import { useServer } from "../../../../hooks/user-server";
import { Input } from "../../../../Components/input/input";
import { SpecialPanel } from "../special-panel/special-panel";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { savePostAsync } from "../../../../actions/save-post-async";
import { useState } from "react";
import { PROP_TYPE } from "../../../../constants/prop-type";
const PostFormContainer = ({
  className,
  post: { id, title, imageUrl, content, publishedAt },
}) => {
  const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
  const [titleValue, setTitleValue] = useState(title);

  const contentRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requestServer = useServer();
  useLayoutEffect(() => {
    setImageUrlValue(imageUrl);
    setTitleValue(title);
  }, [imageUrl, title]);
  const onSave = () => {
    const newContentUrl = sanizeContent(contentRef.current.innerHTML);

    dispatch(
      savePostAsync(requestServer, {
        id,
        imageUrl: imageUrlValue,
        title: titleValue,
        content: newContentUrl,
      })
    ).then(() => navigate(`/post/${id}`));
  };
  const onTitleChange = (e) => setTitleValue(e.target.value);
  const onImageChange = (e) => setImageUrlValue(e.target.value);
  return (
    <div className={className}>
      <Input
        value={imageUrlValue}
        onChange={onImageChange}
        placeholder="Изображение..."
      />
      <Input
        value={titleValue}
        onChange={onTitleChange}
        placeholder="Заголовок..."
      />
      <SpecialPanel
        id={id}
        publishedAt={publishedAt}
        margin="20px 0"
        editButton={<Icon id="fa-floppy-o" margin="0  0 0" onClick={onSave} />}
      />
      <div
        className="post-text"
        contentEditable={true}
        ref={contentRef}
        suppressContentEditableWarning={true}
      >
        {content}
      </div>
    </div>
  );
};

export const PostForm = styled(PostFormContainer)`
  padding: 40px 80px;

  & img {
    float: left;
    margin: 20px 10px 0;
  }
  & .special-panel {
    display: flex;
    justify-content: space-between;
    margin: 20px 0 20px;
    font-size: 18px;
  }
  & .post-text {
    min-height: 80px;
    border: 1px solid #000;
  }
  & i {
    position: relative;
    top: -1px;
    font-size: 18px;
  }
`;

PostForm.propTypes = {
  post: PROP_TYPE.POST.isRequired,
};
