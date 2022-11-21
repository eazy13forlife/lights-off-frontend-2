import React from "react";

import "./index.scss";

const ReviewCard = ({ rating, review, username }) => {
  return (
    <div className="ReviewCard">
      <p className="ReviewCard__username body-medium">{username}</p>
      <p className="ReviewCard__rating">
        {rating}
        <span>/10</span>
      </p>
      <p className="ReviewCard__review">{review}</p>
      <button className="ReviewCard__delete">Delete</button>
      <button className="ReviewCard__edit">Edit</button>
    </div>
  );
};

export default ReviewCard;
