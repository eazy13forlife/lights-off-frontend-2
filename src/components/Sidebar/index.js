import React from "react";
import { MdMovie } from "react-icons/md";
import { BsFilm, BsBookmark } from "react-icons/bs";
import { CgScreen, CgPlayTrackNext } from "react-icons/cg";
import { GoEye } from "react-icons/go";
import { AiOutlineDownload } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";

import IconLink from "./IconLink/IconLink";
import "./index.scss";

const Sidebar = () => {
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

      <IconLink path="/favorites" pathPatterns={["/favorites"]}>
        <BsBookmark />
      </IconLink>

      <IconLink path="/seen" pathPatterns={["/seen"]}>
        <GoEye />
      </IconLink>

      <IconLink path="/uploads" pathPatterns={["/uploads"]}>
        <AiOutlineDownload />
      </IconLink>

      <IconLink path="/watch-next" pathPatterns={["/watch-next"]}>
        <CgPlayTrackNext className="Sidebar__link--next" />
      </IconLink>

      <IconLink path="/my-reviews" pathPatterns={["/my-reviews"]}>
        <BsPencilSquare />
      </IconLink>
    </div>
  );
};

export default Sidebar;
