import React from "react";
import { MdMovie } from "react-icons/md";
import { BsFilm, BsBookmark } from "react-icons/bs";
import { CgScreen, CgPlayTrackNext } from "react-icons/cg";
import { GoEye } from "react-icons/go";
import { AiOutlineDownload } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import "./index.scss";

const Sidebar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="Sidebar">
      <MdMovie className="Sidebar__icon Sidebar__icon--movie" />
      <BsFilm className="Sidebar__icon" />
      <CgScreen className="Sidebar__icon" />
      <BsBookmark className="Sidebar__icon" />
      <GoEye className="Sidebar__icon" />
      <AiOutlineDownload className="Sidebar__icon Sidebar__icon--download" />
      <CgPlayTrackNext className="Sidebar__icon Sidebar__icon--next" />
      <BsPencilSquare className="Sidebar__icon" />
    </div>
  );
};

export default Sidebar;
