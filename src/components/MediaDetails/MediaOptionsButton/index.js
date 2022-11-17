import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { onButtonClick } from "./helperFunctions";
import "./index.scss";

const MediaOptionsButton = ({ mediaData }) => {
  const [showMediaOptions, setShowMediaOptions] = useState(false);

  const [displayMessageBox, setDisplayMessageBox] = useState("");

  const authToken = useSelector((state) => {
    return state.userInfo.authToken;
  });

  return (
    <div className="MediaOptions">
      <button
        className="MediaOptions__button MediaOptions__button--title "
        onClick={() => {
          setShowMediaOptions(!showMediaOptions);
        }}
      >
        Options
      </button>
      {showMediaOptions ? (
        <div className="MediaOptions__options">
          <button
            className="MediaOptions__button MediaOptions__button--option  capitalize"
            onClick={async () => {
              await onButtonClick(
                "favorites",
                mediaData,
                authToken,
                setShowMediaOptions,
                setDisplayMessageBox
              );
            }}
          >
            Add to favorites
          </button>
          <button
            className="MediaOptions__button MediaOptions__button--option  capitalize"
            onClick={async () => {
              await onButtonClick(
                "seen",
                mediaData,
                authToken,
                setShowMediaOptions,
                setDisplayMessageBox
              );
            }}
          >
            Add to seen
          </button>
          <button
            className="MediaOptions__button MediaOptions__button--option  capitalize"
            onClick={async () => {
              await onButtonClick(
                "watch-next",
                mediaData,
                authToken,
                setShowMediaOptions,
                setDisplayMessageBox
              );
            }}
          >
            Add to watch next
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default MediaOptionsButton;
