import React from "react";

import ContentPageLayout from "../../../components/ContentPageLayout";
import useSearchResults from "./useSearchResults";
import MainBody from "./MainBody";
import PagesButtons from "../../../components/PagesButtons";
import "./index.scss";

const Home = () => {
  const [searchResults, onSearchSubmit] = useSearchResults();

  return (
    <div className="Home">
      <ContentPageLayout
        searchBarPlaceholder="Search for movies, tv and people..."
        onSearchSubmit={onSearchSubmit}
      >
        <MainBody searchResults={searchResults} />
        <PagesButtons currentPage={1} totalPages={33} />
      </ContentPageLayout>
    </div>
  );
};

export default Home;
