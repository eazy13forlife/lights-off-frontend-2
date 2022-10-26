import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignedInRoute from "../src/views/SignedInRoute";
import ProtectedRoute from "../src/views/ProtectedRoute";
import Home from "../src/views/pages/Home";
import HomeSearch from "../src/views/pages/HomeSearch";
import Favorites from "../src/views/pages/Favorites";
import MoviesHome from "./views/pages/MoviesHome";
import MoviesSearch from "./views/pages/MoviesSearch";
import MovieDetails from "./views/pages/MovieDetails";
import MoviesGenreWrapper from "./views/pages/MoviesGenreWrapper";
import MyReviews from "../src/views/pages/MyReviews";
import Seen from "../src/views/pages/Seen";
import TvHome from "./views/pages/TvHome";
import TvSearch from "./views/pages/TvSearch";
import TvGenreWrapper from "./views/pages/TvGenreWrapper";
import TvDetails from "./views/pages/TvDetails";
import Uploads from "../src/views/pages/Uploads";
import WatchNext from "../src/views/pages/WatchNext";
import Media from "../src/views/pages/Media";
import Login from "./views/pages/Login";
import SignUp from "./views/pages/SignUp";
import useTrending from "./AppHooks/useTrending";
import "./app.scss";

const App = () => {
  useTrending();

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
