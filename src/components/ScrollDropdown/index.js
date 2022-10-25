import React, { useState, useRef, useEffect } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import "./index.scss";

const ScrollDropdown = ({ children, buttonTitle }) => {
  const dropdownRef = useRef();

  const genresRef = useRef();

  const [isExpanded, setIsExpanded] = useState(false);

  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (genresRef.current) {
      const newContentHeight = genresRef.current.children[0].clientHeight;

      setContentHeight(newContentHeight + 45);
    }
  }, []);

  const getContentStyles = () => {
    if (!isExpanded) {
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
    <div className="ScrollDropdown" ref={dropdownRef}>
      <div
        className={`ScrollDropdown__content ${
          isExpanded
            ? `ScrollDropdown__content--expand`
            : `ScrollDropdown__content--collapsed`
        }`}
        ref={genresRef}
        style={getContentStyles()}
      >
        {children}
      </div>
      <button
        className="ScrollDropdown__button  heading-medium"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {!isExpanded ? (
          <BiDownArrow className="ScrollDropdown__icon" />
        ) : (
          <BiUpArrow className="ScrollDropdown__icon" />
        )}
        {buttonTitle}
      </button>
    </div>
  );
};

export default ScrollDropdown;
