import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/views/pages/Home";
import Favorites from "../src/views/pages/Favorites";
import Movie from "../src/views/pages/Movie";
import Movies from "../src/views/pages/Movies";
import MyReviews from "../src/views/pages/MyReviews";
import Seen from "../src/views/pages/Seen";
import TV from "../src/views/pages/TV";
import Uploads from "../src/views/pages/Uploads";
import WatchNext from "../src/views/pages/WatchNext";
import Media from "../src/views/pages/Media";
import "./app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="movies" element={<Movies />} />
        <Route path="media/:id" element={<Media />} />
        <Route path="my-reviews" element={<MyReviews />} />
        <Route path="seen" element={<Seen />} />
        <Route path="tv" element={<TV />} />
        <Route path="uploads" element={<Uploads />} />
        <Route path="watch-next" element={<WatchNext />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
