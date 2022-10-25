import React from "react";

import ContentPageLayout from "../ContentPageLayout";
import Genres from "../Genres";
import ScrollDropdown from "../ScrollDropdown";
import { tvGenres } from "../Genres/helpers";
import "./index.scss";

const TvPageLayout = ({ children }) => {
  return (
    <div className="TvPageLayout">
      <ContentPageLayout
        searchBarPlaceholder="Search for movies"
        onSearchSubmit={(e, searchValue) => {
          e.preventDefault();
        }}
      >
        <div className="Scroll__container">
          <ScrollDropdown buttonTitle="Genres">
            <Genres genres={tvGenres} />
          </ScrollDropdown>
        </div>

        {children}
      </ContentPageLayout>
    </div>
  );
};

export default TvPageLayout;
