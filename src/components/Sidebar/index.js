import React from "react";
import { Link } from "react-router-dom";
import { MdMovie } from "react-icons/md";
import { BsFilm, BsBookmark } from "react-icons/bs";
import { CgScreen, CgPlayTrackNext } from "react-icons/cg";
import { GoEye } from "react-icons/go";
import { AiOutlineDownload } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import "./index.scss";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Link to="/" className="Sidebar__link">
        <MdMovie className="Sidebar__icon Sidebar__icon--movie" />
      </Link>

      <Link to="/movies" className="Sidebar__link">
        <BsFilm className="Sidebar__icon" />
      </Link>

      <Link to="tv" className="Sidebar__link">
        <CgScreen className="Sidebar__icon" />
      </Link>

      <Link to="/favorites" className="Sidebar__link">
        <BsBookmark className="Sidebar__icon" />
      </Link>

      <Link to="/seen" className="Sidebar__link">
        <GoEye className="Sidebar__icon" />
      </Link>

      <Link to="/uploads" className="Sidebar__link">
        <AiOutlineDownload className="Sidebar__icon Sidebar__icon--download" />
      </Link>

      <Link to="/watch-next" className="Sidebar__link">
        <CgPlayTrackNext className="Sidebar__icon Sidebar__icon--next" />
      </Link>

      <Link to="my-reviews" className="Sidebar__link">
        <BsPencilSquare className="Sidebar__icon" />
      </Link>
    </div>
  );
};

export default Sidebar;
