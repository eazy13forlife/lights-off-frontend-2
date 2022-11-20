import React from "react";

import useAllReviews from "./useAllReviews";
import "./index.scss";

const Reviews = ({ mediaId }) => {
  const allReviews = useAllReviews(mediaId);

  return (
    <div className="Reviews">
      <h1 className="heading-large">Reviews</h1>
    </div>
  );
};

export default Reviews;
