import React from "react";

import useAllReviews from "./useAllReviews";
import ReviewInput from "./ReviewInput";
import ReviewCard from "./ReviewCard/";

import "./index.scss";

const Reviews = ({ mediaId }) => {
  const allReviews = useAllReviews(mediaId);
  let renderedReviews;

  const getRenderedReviews = () => {
    if (!allReviews) {
      return <p>Unable to retrieve reviews right now. Try again later</p>;
    }

    if (!allReviews.length) {
      return <p>No reviews yet.</p>;
    }

    return allReviews.map((data) => {
      return (
        <ReviewCard
          rating={data.rating}
          review={data.review}
          username={data.username}
          key={data.username}
        />
      );
    });
  };

  return (
    <div className="Reviews">
      <ReviewInput mediaId={mediaId} />
      <h1 className="heading-large">All Reviews</h1>
      {getRenderedReviews()}
    </div>
  );
};

export default Reviews;
