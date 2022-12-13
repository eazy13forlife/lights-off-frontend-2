import React from "react";

import PeoplePageLayout from "../../../components/PeoplePageLayout";
import usePopularPeople from "./usePopularPeople";
import ContentGroup from "../../../components/ContentGroup";

const PeopleHome = () => {
  const [renderedTrendingPeople, renderedPopularPeople] = usePopularPeople();

  return (
    <div className="PeopleHome">
      <PeoplePageLayout>
        <div className="ContentGroupContainer">
          <ContentGroup
            title="Popular People"
            content={renderedPopularPeople}
            linkTo="/people/popular/?page=1"
          />
          <ContentGroup
            title="Trending People"
            content={renderedTrendingPeople}
            linkTo="/people/trending/?page=1"
          />
        </div>
      </PeoplePageLayout>
    </div>
  );
};

export default PeopleHome;
