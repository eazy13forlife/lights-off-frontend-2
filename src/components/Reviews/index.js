import React, { useState } from "react";

import useAllReviews from "./useAllReviews";
import ReviewInput from "./ReviewInput";
import ReviewCard from "./ReviewCard/";
import useShowReviewInput from "./useShowReviewInput";
import useUserAuthorization from "../../hooks/useUserAuthorization";
import "./index.scss";

const Reviews = ({ mediaId, mediaData, mediaType }) => {
  const [justModified, setJustModified] = useState(false);

  const allReviews = useAllReviews(mediaId, { justModified, setJustModified });

  const showReviewInput = useShowReviewInput(mediaId, justModified);

  const userInfo = useUserAuthorization();

  const renderReviewInput = () => {
    if (showReviewInput.show) {
      return (
        <ReviewInput
          mediaId={mediaId}
          setJustModified={setJustModified}
          mediaData={mediaData}
          mediaType={mediaType}
        />
      );
    }

    return <p className="heading-medium">{showReviewInput.message}</p>;
  };

  const getRenderedReviews = (mediaId, setJustModified) => {
    if (!allReviews) {
      return (
        <p className="heading-medium">
          Unable to retrieve reviews right now. Try again later
        </p>
      );
    }

    if (!allReviews.length) {
      return <p className="heading-medium">No reviews yet</p>;
    }

    let userReview;

    //get an array of all the ReviewCards for each review, except for the user Review. We
    //just save that because we want it first in the array. So we unshift it at the very end.
    const reviews = allReviews.map((data) => {
      if (data.username !== userInfo.username) {
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
      } else {
        userReview = (
          <ReviewCard
            rating={data.rating}
            review={data.review}
            username={data.username}
            key={data.username}
            mediaId={mediaId}
            setJustModified={setJustModified}
          />
        );
      }
    });

    reviews.unshift(userReview);

    return reviews;
  };

  return (
    <div className="Reviews">
      {renderReviewInput()}
      <h1 className="Reviews__heading heading-large">All Reviews</h1>
      <div className="Reviews__all">
        {getRenderedReviews(mediaId, setJustModified)}
      </div>
    </div>
  );
};

export default Reviews;
