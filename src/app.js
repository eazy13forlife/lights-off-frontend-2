import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignedInRoute from "../src/views/SignedInRoute";
import ProtectedRoute from "../src/views/ProtectedRoute";
import Home from "../src/views/pages/Home";
import Favorites from "../src/views/pages/Favorites";
import Movies from "../src/views/pages/Movies";
import MyReviews from "../src/views/pages/MyReviews";
import Seen from "../src/views/pages/Seen";
import TV from "../src/views/pages/TV";
import Uploads from "../src/views/pages/Uploads";
import WatchNext from "../src/views/pages/WatchNext";
import Media from "../src/views/pages/Media";
import Login from "./views/pages/Login";
import SignUp from "./views/pages/SignUp";
import "./app.scss";
import useUserAuthorization from "./hooks/useUserAuthorization";
import { getTrending } from "./actions";

const App = () => {
  const user = useUserAuthorization();

  const dispatch = useDispatch();

  const trending = useSelector((state) => {
    return state.trending;
  });
  useEffect(() => {
    if (user && !trending.length) {
      dispatch(getTrending());
    }
  }, [user]);

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
              <Movies />
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
              <TV />
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
