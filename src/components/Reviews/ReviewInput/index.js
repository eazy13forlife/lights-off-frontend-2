import React, { useState, useEffect } from "react";
import useReviewInputFunctions from "./useReviewInputFunctions";

import "./index.scss";

const ReviewInput = ({ mediaId, setJustModified, mediaData, mediaType }) => {
  const [review, setReview] = useState("");

  const [rating, setRating] = useState(1);

  const postReview = useReviewInputFunctions(
    mediaId,
    mediaData,
    mediaType,
    { review, rating },
    setJustModified
  );

  return (
    <div className="ReviewInput">
      <textarea
        className="ReviewInput__input heading-medium"
        type="text"
        name="media review"
        placeholder="Add your review..."
        value={review}
        onChange={(e) => {
          setReview(e.target.value);
        }}
      >
        Add your review
      </textarea>

      <div className="ReviewInput__rating">
        <p className="heading-medium">Choose a rating:</p>
        <select
          className="ReviewInput__rating-box"
          onChange={(e) => {
            setRating(e.target.value);
          }}
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

      <button
        className="ReviewInput__button Details__link Details__link--light heading-medium"
        type="submit"
        //set the review to empty and the ratng to 1 again
        onClick={async () => {
          try {
            await postReview();
            setReview("");
            setRating(1);
          } catch (e) {
            return;
          }
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default ReviewInput;
