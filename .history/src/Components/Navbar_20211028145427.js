import React from "react";
import data from "../Data/NavbarData";
import { FaRProject, FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import { Nav } from "../Styles/NavbarStyles";
const Navbar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav></Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
