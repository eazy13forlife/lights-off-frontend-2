import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdMovie } from "react-icons/md";
import { BsFilm, BsBookmark } from "react-icons/bs";
import { CgScreen, CgPlayTrackNext } from "react-icons/cg";
import { GoEye } from "react-icons/go";
import { AiOutlineDownload } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";

import { logoutUser, removeLogoutError } from "../../actions";
import MessageModal from "../MessageModal";
import IconLink from "./IconLink/IconLink";
import useLogoutError from "./useLogoutError";
import "./index.scss";

const Sidebar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutErrorBackend = useLogoutError();

  return (
    <div className="Sidebar">
      <IconLink path="/" pathPatterns={["/", "/search"]}>
        <MdMovie />
      </IconLink>

      <IconLink
        path="/movies"
        pathPatterns={[
          "/movies",
          "/movies/search",
          "/movies/genre",
          "movie/:id",
          "/movies/trending",
          "/movies/top_rated",
          "/movies/popular",
          "/movies/upcoming",
        ]}
      >
        <BsFilm />
      </IconLink>

      <IconLink
        path="/tv"
        pathPatterns={["/tv", "/tv/search", "/tv/genre", "/tv/:id"]}
      >
        <CgScreen />
      </IconLink>

      <IconLink
        path="/people"
        pathPatterns={[
          "/people",
          "/people/search",
          "/person/:id",
          "people/popular",
          "people/trending",
        ]}
      >
        <BsPersonFill />
      </IconLink>

      <IconLink
        path="/favorites/?page=1"
        pathPatterns={["/favorites", "/favorites/search"]}
      >
        <BsBookmark />
      </IconLink>

      <IconLink path="/seen/?page=1" pathPatterns={["/seen", "/seen/search"]}>
        <GoEye />
      </IconLink>

      <IconLink path="/uploads" pathPatterns={["/uploads"]}>
        <AiOutlineDownload />
      </IconLink>

      <IconLink path="/watch-next/?page=1" pathPatterns={["/watch-next"]}>
        <CgPlayTrackNext className="Sidebar__link--next" />
      </IconLink>

      <IconLink path="/my-reviews" pathPatterns={["/my-reviews"]}>
        <BsPencilSquare />
      </IconLink>

      <button
        className="Sidebar__text-button body-small color-primary-light"
        onClick={async () => {
          try {
            const response = await dispatch(logoutUser());
            if (response === "success") {
              navigate("/login");
            }
          } catch (e) {
            return;
          }
        }}
      >
        Log off
      </button>

      {logoutErrorBackend ? (
        <MessageModal
          message={logoutErrorBackend}
          close={() => {
            dispatch(removeLogoutError());
          }}
        />
      ) : null}
    </div>
  );
};

export default Sidebar;
