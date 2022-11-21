import React, { useState } from "react";

import useAllReviews from "./useAllReviews";
import ReviewInput from "./ReviewInput";
import ReviewCard from "./ReviewCard/";

import "./index.scss";

const Reviews = ({ mediaId }) => {
  const [justModified, setJustModified] = useState(false);

  const allReviews = useAllReviews(mediaId, { justModified, setJustModified });

  const getRenderedReviews = (mediaId, setJustModified) => {
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
          mediaId={mediaId}
          setJustModified={setJustModified}
        />
      );
    });
  };

  return (
    <div className="Reviews">
      <ReviewInput mediaId={mediaId} setJustModified={setJustModified} />
      <h1 className="Reviews__heading heading-large ">All Reviews</h1>
      <div className="Reviews__all">
        {getRenderedReviews(mediaId, setJustModified)}
      </div>
    </div>
  );
};

export default Reviews;
