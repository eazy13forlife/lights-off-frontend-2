import React from "react";
import { createUser } from "../../../actions";

const Home = () => {
  createUser({
    email: "mikdde@yahoo.com",
    username: "afdfdasdfasdf",
    password: "fdsfdadfsdfsadfasdfsd",
  })();
  return <p>Home</p>;
};

export default Home;
