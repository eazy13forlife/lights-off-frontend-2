import React, { useState } from "react";

import useEditBoxFunctions from "./useEditBoxFunctions";
import "./index.scss";

const EditBox = ({
  mediaId,
  review,
  rating,
  setShowEditBox,
  setJustModified,
}) => {
  const [updatedReview, setUpdatedReview] = useState(review);

  const [updatedRating, setUpdatedRating] = useState(rating);

  const editReview = useEditBoxFunctions(
    mediaId,
    { review: updatedReview, rating: updatedRating },
    setJustModified
  );

  return (
    <div className="EditBox">
      <textarea
        className="ReviewInput__input heading-medium"
        type="text"
        name="media review"
        placeholder="Add your review..."
        value={updatedReview}
        onChange={(e) => {
          setUpdatedReview(e.target.value);
        }}
      >
        Add your review
      </textarea>

      <div className="EditBox__options">
        <div className="ReviewInput__rating">
          <p className="heading-medium">Choose a rating:</p>
          <select
            className="ReviewInput__rating-box"
            onChange={(e) => {
              setUpdatedRating(e.target.value);
            }}
            defaultValue={updatedRating}
          >
            <option value={1}>1/10</option>
            <option value={2}>2/10</option>
            <option value={3}>3/10</option>
            <option value={4}>4/10</option>
            <option value={5}>5/10</option>
            <option value={6}>6/10</option>
            <option value={7}>7/10</option>
            <option value={8}>8/10</option>
            <option value={9}>9/10</option>
            <option value={10}>10/10</option>
          </select>
        </div>

        <div className="EditBox__actions">
          <button
            className=" ReviewCard__button Details__link Details__link--light heading-medium"
            onClick={() => {
              setShowEditBox(false);
            }}
          >
            Cancel
          </button>
          <button
            className=" ReviewCard__button Details__link Details__link--light heading-medium"
            onClick={async () => {
              try {
                await editReview();
                setShowEditBox(false);
              } catch (e) {
                return;
              }
            }}
          >
            Save Edits
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBox;
