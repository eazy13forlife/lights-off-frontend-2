import React, { useState } from "react";

import useUserAuthorization from "../../../hooks/useUserAuthorization";
import useReviewCardFunctions from "./useReviewCardFunctions";
import EditBox from "../EditBox";
import MessageModal from "../../MessageModal";
import useDisplayMessage from "../../../hooks/useDisplayMessage";
import "./index.scss";

const ReviewCard = ({ rating, review, username, mediaId, setJustModified }) => {
  const userInfo = useUserAuthorization();

  const { deleteReview } = useReviewCardFunctions(mediaId, setJustModified);

  const [showEditBox, setShowEditBox] = useState(false);

  const [errorMessage, setErrorMessage] = useDisplayMessage();

  const getContent = () => {
    if (showEditBox) {
      return (
        <EditBox
          mediaId={mediaId}
          review={review}
          rating={rating}
          setShowEditBox={setShowEditBox}
          setJustModified={setJustModified}
        />
      );
    }

    return (
      <>
        <div className="ReviewCard">
          <p className="ReviewCard__username">{username}</p>

          <p className="ReviewCard__rating">
            <span className="ReviewCard__rating-top">{rating}</span>
            <span className="ReviewCard__rating-bottom">/10</span>
          </p>

          <p className="ReviewCard__review heading-medium">{review}</p>

          {userInfo.username === username ? (
            <div className="ReviewCard__buttons">
              <button
                className="ReviewCard__button Details__link Details__link--light heading-medium"
                onClick={() => {
                  setShowEditBox(true);
                }}
              >
                Edit
              </button>
              <button
                className=" ReviewCard__button Details__link Details__link--light heading-medium"
                onClick={async () => {
                  try {
                    await deleteReview();
                  } catch (e) {
                    setErrorMessage("Unable to delete post");
                  }
                }}
              >
                Delete
              </button>
            </div>
          ) : null}
        </div>
        {errorMessage ? (
          <MessageModal
            message={errorMessage}
            close={() => {
              setErrorMessage("");
            }}
          />
        ) : null}
      </>
    );
  };

  return getContent();
};

export default ReviewCard;
