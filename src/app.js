import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignedInRoute from "../src/views/SignedInRoute";
import ProtectedRoute from "../src/views/ProtectedRoute";
import Home from "../src/views/pages/Home";
import HomeSearch from "../src/views/pages/HomeSearch";
import Favorites from "../src/views/pages/Favorites";
import FavoritesSearch from "../src/views/pages/FavoritesSearch";
import MoviesHome from "./views/pages/MoviesHome";
import MoviesSearch from "./views/pages/MoviesSearch";
import MovieDetails from "./views/pages/MovieDetails";
import MoviesTrending from "./views/pages/MoviesTrending";
import MoviesTopRated from "./views/pages/MoviesTopRated";
import MoviesNowPlaying from "./views/pages/MoviesNowPlaying";
import MoviesPopular from "./views/pages/MoviesPopular";
import MoviesUpcoming from "./views/pages/MoviesUpcoming";
import MoviesGenreWrapper from "./views/pages/MoviesGenreWrapper";
import PeopleHome from "./views/pages/PeopleHome";
import PeopleSearch from "./views/pages/PeopleSearch";
import PeoplePopular from "./views/pages/PeoplePopular";
import PeopleTrending from "./views/pages/PeopleTrending";
import Person from "./views/pages/Person";
import MyReviews from "../src/views/pages/MyReviews";
import Seen from "../src/views/pages/Seen";
import TvHome from "./views/pages/TvHome";
import TvSearch from "./views/pages/TvSearch";
import TvPopular from "./views/pages/TvPopular";
import TvTopRated from "./views/pages/TvTopRated";
import TvTrending from "./views/pages/TvTrending";
import TvOnAir from "./views/pages/TvOnAir";
import TvGenreWrapper from "./views/pages/TvGenreWrapper";
import TvDetails from "./views/pages/TvDetails";
import Uploads from "../src/views/pages/Uploads";
import WatchNext from "../src/views/pages/WatchNext";
import Media from "../src/views/pages/Media";
import Login from "./views/pages/Login";
import SignUp from "./views/pages/SignUp";
import "./app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <HomeSearch />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <SignedInRoute redirectPath="/">
              <Login />
            </SignedInRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <SignedInRoute redirectPath="/">
              <SignUp />
            </SignedInRoute>
          }
        />
        <Route
          path="favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />
        <Route
          path="favorites/search"
          element={
            <ProtectedRoute>
              <FavoritesSearch />
            </ProtectedRoute>
          }
        />
        <Route
          path="movies"
          element={
            <ProtectedRoute>
              <MoviesHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="movies/search"
          element={
            <ProtectedRoute>
              <MoviesSearch />
            </ProtectedRoute>
          }
        />
        <Route
          path="movies/genre"
          element={
            <ProtectedRoute>
              <MoviesGenreWrapper />
            </ProtectedRoute>
          }
        />
        <Route
          path="movies/trending"
          element={
            <ProtectedRoute>
              <MoviesTrending />
            </ProtectedRoute>
          }
        />
        <Route
          path="movies/top_rated"
          element={
            <ProtectedRoute>
              <MoviesTopRated />
            </ProtectedRoute>
          }
        />
        <Route
          path="movies/popular"
          element={
            <ProtectedRoute>
              <MoviesPopular />
            </ProtectedRoute>
          }
        />
        <Route
          path="movies/upcoming"
          element={
            <ProtectedRoute>
              <MoviesUpcoming />
            </ProtectedRoute>
          }
        />
        <Route
          path="movies/now_playing"
          element={
            <ProtectedRoute>
              <MoviesNowPlaying />
            </ProtectedRoute>
          }
        />
        <Route
          path="movie/:id"
          element={
            <ProtectedRoute>
              <MovieDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="media/:id"
          element={
            <ProtectedRoute>
              <Media />
            </ProtectedRoute>
          }
        />
        <Route
          path="my-reviews"
          element={
            <ProtectedRoute>
              <MyReviews />
            </ProtectedRoute>
          }
        />
        <Route
          path="seen"
          element={
            <ProtectedRoute>
              <Seen />
            </ProtectedRoute>
          }
        />
        <Route
          path="tv"
          element={
            <ProtectedRoute>
              <TvHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="tv/popular"
          element={
            <ProtectedRoute>
              <TvPopular />
            </ProtectedRoute>
          }
        />
        <Route
          path="tv/top_rated"
          element={
            <ProtectedRoute>
              <TvTopRated />
            </ProtectedRoute>
          }
        />
        <Route
          path="tv/trending"
          element={
            <ProtectedRoute>
              <TvTrending />
            </ProtectedRoute>
          }
        />
        <Route
          path="tv/on_air"
          element={
            <ProtectedRoute>
              <TvOnAir />
            </ProtectedRoute>
          }
        />
        <Route
          path="tv/search/"
          element={
            <ProtectedRoute>
              <TvSearch />
            </ProtectedRoute>
          }
        />
        <Route
          path="tv/genre/"
          element={
            <ProtectedRoute>
              <TvGenreWrapper />
            </ProtectedRoute>
          }
        />
        <Route
          path="tv/:id"
          element={
            <ProtectedRoute>
              <TvDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="people"
          element={
            <ProtectedRoute>
              <PeopleHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="people/search/"
          element={
            <ProtectedRoute>
              <PeopleSearch />
            </ProtectedRoute>
          }
        />
        <Route
          path="people/popular/"
          element={
            <ProtectedRoute>
              <PeoplePopular />
            </ProtectedRoute>
          }
        />
        <Route
          path="people/trending/"
          element={
            <ProtectedRoute>
              <PeopleTrending />
            </ProtectedRoute>
          }
        />
        <Route
          path="person/:id"
          element={
            <ProtectedRoute>
              <Person />
            </ProtectedRoute>
          }
        />
        <Route
          path="uploads"
          element={
            <ProtectedRoute>
              <Uploads />
            </ProtectedRoute>
          }
        />
        <Route
          path="watch-next"
          element={
            <ProtectedRoute>
              <WatchNext />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
