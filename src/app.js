import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import "./app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact></Route>
    </BrowserRouter>
  );
};

export default App;
