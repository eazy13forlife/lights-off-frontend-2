import React from "react";

import usePopularContent from "./usePopularContent";
import TvPageLayout from "../../../components/TvPageLayout";
import MainBody from "./MainBody";

const TvHome = () => {
  usePopularContent();
  return (
    <div className="TvHome">
      <TvPageLayout>
        <MainBody />
      </TvPageLayout>
    </div>
  );
};

export default TvHome;
