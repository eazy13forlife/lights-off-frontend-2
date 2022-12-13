import React from "react";

import HomePageLayout from "../../../components/HomePageLayout";
import MainBody from "./MainBody";
import "../sharedStyles/home.scss";

const Home = () => {
  return (
    <div className="Home">
      <HomePageLayout>
        <MainBody />
      </HomePageLayout>
    </div>
  );
};

export default Home;
