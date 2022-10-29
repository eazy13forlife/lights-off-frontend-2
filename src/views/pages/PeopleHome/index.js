import React from "react";
import { useNavigate } from "react-router-dom";

import PeoplePageLayout from "../../../components/PeoplePageLayout";
import usePopularPeople from "./usePopularPeople";
import ContentGroup from "../../../components/ContentGroup";

const PeopleHome = () => {
  const navigate = useNavigate();

  const [renderedTrendingPeople, renderedPopularPeople] = usePopularPeople();

  return (
    <div className="PeopleHome">
      <PeoplePageLayout>
        <div className="ContentGroupContainer">
          <ContentGroup
            title="Popular People"
            content={renderedPopularPeople}
          />
          <ContentGroup
            title="Trending People"
            content={renderedTrendingPeople}
          />
        </div>
      </PeoplePageLayout>
    </div>
  );
};

export default PeopleHome;
