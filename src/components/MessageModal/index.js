import React from "react";
import ReactDOM from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "./index.scss";

const MessageModal = ({ message, close }) => {
  return ReactDOM.createPortal(
    <div className="MessageModal">
      <p className="heading-medium">{message}</p>
      <button onClick={close} className="MessageModal__button">
        <AiOutlineCloseCircle className="MessageModal__icon" />
      </button>
    </div>,
    document.querySelector("#modal")
  );
};

export default MessageModal;
