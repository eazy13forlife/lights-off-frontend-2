import React from "react";
import { useNavigate } from "react-router-dom";

import ContentPageLayout from "../../../components/ContentPageLayout";
import MainBody from "./MainBody";
import "./index.scss";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <ContentPageLayout
        searchBarPlaceholder="Search for movies, tv and people..."
        onSearchSubmit={(e, searchValue) => {
          e.preventDefault();
          navigate(`/search/?name=${searchValue}&page=1`);
        }}
      >
        <MainBody />
      </ContentPageLayout>
    </div>
  );
};

export default Home;
