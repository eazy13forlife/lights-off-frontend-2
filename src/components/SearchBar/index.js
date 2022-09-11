import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

import "./index.scss";

const SearchBar = ({ placeholder }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="SearchBar heading-medium">
      <form className="SearchBar__form">
        <button className="SearchBar__button">
          <BsSearch className="SearchBar__icon"></BsSearch>
        </button>

        <input
          type="text"
          className="SearchBar__input"
          name="searchTerm"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          placeholder={placeholder}
        />
      </form>
    </div>
  );
};

export default SearchBar;
