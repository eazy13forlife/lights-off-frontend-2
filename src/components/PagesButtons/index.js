import React, { useState, useEffect } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

import "./index.scss";

const PagesButtons = ({
  currentPage,
  totalPages,
  onNextClick,
  onPreviousClick,
  onDirectPageNumberChange,
}) => {
  const [pageNumberToDisplay, setPageNumberToDisplay] = useState(currentPage);

  const getLeftButtonHoverClass = () => {
    if (currentPage === 1) {
      return "PagesButtons__button--inactive";
    } else {
      return "PagesButtons__button--active";
    }
  };

  const getRightButtonHoverClass = () => {
    if (currentPage === totalPages) {
      return "PagesButtons__button--inactive";
    } else {
      return "PagesButtons__button--active";
    }
  };

  useEffect(() => {
    setPageNumberToDisplay(currentPage);
  }, [currentPage]);

  return (
    <div className="PagesButtons heading-extra-small">
      <button
        className={`PagesButtons__button ${getLeftButtonHoverClass()} PagesButtons__button--left`}
        onClick={onPreviousClick}
      >
        <GoArrowLeft className="PagesButtons__icon PagesButtons__icon--left" />
        <span>Previous</span>
      </button>

      <div className="PagesButtons__screen">
        <span>Page</span>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onDirectPageNumberChange(pageNumberToDisplay);
          }}
        >
          <input
            type="text"
            value={pageNumberToDisplay}
            className="PagesButtons__number-screen"
            onChange={(e) => {
              setPageNumberToDisplay(e.target.value);
            }}
          />
        </form>

        <span>{`of ${totalPages}`}</span>
        {/*<p>{`Page ${currentPage} of ${totalPages}`} </p>*/}
      </div>

      <button
        className={`PagesButtons__button ${getRightButtonHoverClass()} PagesButtons__button--right`}
        onClick={onNextClick}
      >
        <span>Next</span>
        <GoArrowRight className="PagesButtons__icon PagesButtons__icon--right" />
      </button>
    </div>
  );
};

export default PagesButtons;
