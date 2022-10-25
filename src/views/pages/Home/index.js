import React from "react";
import { useNavigate } from "react-router-dom";

import HomePageLayout from "../../../components/HomePageLayout";
import MainBody from "./MainBody";
import "./index.scss";

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
