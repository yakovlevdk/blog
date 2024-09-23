import styled from "styled-components";
import { Button } from "../button/button";
import { useSelector } from "react-redux";
import { selectModalIsOpen } from "../../selectors/select-modal-is-open";
import { selectModalOnCancel } from "../../selectors/select-modal-oncancel";
import { selectModalOnConfirm } from "../../selectors/select-modal-onconfirm";
import { selectModalText } from "../../selectors/select-modal-text";
export const ModalContainer = ({ className }) => {
  const text = useSelector(selectModalText);
  const onConfirm = useSelector(selectModalOnConfirm);
  const onCancel = useSelector(selectModalOnCancel);
  const isOpen = useSelector(selectModalIsOpen);

  
  if (!isOpen) {
    return null;
  }

  return (
    <div className={className}>
      <div className="overlay"></div>
      <div className="box">
        <h3> {text}</h3>
        <div className="buttons">
          <Button width="120px" onClick={onConfirm}>
            Да
          </Button>
          <Button width="120px" onClick={onCancel}>
            Отмена
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Modal = styled(ModalContainer)`
  position: fixed;
  z-index: 20;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  & .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  & .box {
    position: relative;
    width: 300px;
    margin: 0 auto;
    z-index: 30;
    top: 50%;
    background-color: #fff;
    border: 1px solid #000;
    padding: 0 20px 20px;
    transform: translate(0, -50%);
  }

  & .buttons {
    display: flex;
    justify-content: center;
  }
`;
