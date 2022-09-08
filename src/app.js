import React from "react";

import SearchBar from "./components/SearchBar";
import "./app.scss";

const App = () => {
  return (
    <div className="hey">
      <SearchBar
        placeholder="Enter a movie or tv series"
        className="body-medium"
      />
    </div>
  );
};

export default App;
