import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const MessageModal = ({ message }) => {
  return ReactDOM.createPortal(
    <div className="MessageModal">
      <p className="heading-medium">{message}</p>
    </div>,
    document.querySelector("#modal")
  );
};

export default MessageModal;
