import React from "react";
import { useNavigate } from "react-router-dom";

import PeoplePageLayout from "../../../components/PeoplePageLayout";

const PeopleHome = () => {
  const navigate = useNavigate();

  return (
    <div className="PeopleHome">
      <PeoplePageLayout>
        <p>hey</p>
      </PeoplePageLayout>
    </div>
  );
};

export default PeopleHome;
