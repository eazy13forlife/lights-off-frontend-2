import React, { useState, useRef, useEffect } from "react";
import { BiDownArrow } from "react-icons/bi";
import "./index.scss";

const GenresDropdown = ({ children, buttonTitle }) => {
  const genresRef = useRef();

  const [expandDropdown, setExpandDropdown] = useState(false);

  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (genresRef.current) {
      const newContentHeight = genresRef.current.children[0].clientHeight;

      setContentHeight(newContentHeight + 45);
    }
  }, []);

  const getContentStyles = () => {
    if (!expandDropdown) {
      return {
        height: "0rem",
        overflow: "hidden",
      };
    } else {
      return {
        height: `${contentHeight}px`,
        overflow: "none",
      };
    }
  };

  return (
    <div className="GenresDropdown">
      <div
        className={`GenresDropdown__content ${
          expandDropdown
            ? `GenresDropdown__content--expand`
            : `GenresDropdown__content--collapsed`
        }`}
        ref={genresRef}
        style={getContentStyles()}
      >
        {children}
      </div>
      <button
        className="GenresDropdown__button color-light heading-medium"
        onClick={() => {
          setExpandDropdown(!expandDropdown);
        }}
      >
        <BiDownArrow className="GenresDropdown__icon" />
        {buttonTitle}
      </button>
    </div>
  );
};

export default GenresDropdown;
