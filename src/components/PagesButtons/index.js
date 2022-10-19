import React from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

import "./index.scss";

const PagesButtons = ({
  currentPage,
  totalPages,
  onNextClick,
  onPreviousClick,
}) => {
  return (
    <div className="PagesButtons heading-extra-small">
      <button
        className="PagesButtons__button PagesButtons__button--left"
        onClick={onPreviousClick}
      >
        <GoArrowLeft className="PagesButtons__icon PagesButtons__icon--left" />
        <span>Previous</span>
      </button>

      <div className="PagesButtons__screen">
        <p>{`Page ${currentPage} of ${totalPages}`} </p>
      </div>

      <button
        className="PagesButtons__button PagesButtons__button--right"
        onClick={onNextClick}
      >
        <span>Next</span>
        <GoArrowRight className="PagesButtons__icon PagesButtons__icon--right" />
      </button>
    </div>
  );
};

export default PagesButtons;
