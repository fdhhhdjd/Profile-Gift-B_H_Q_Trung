import React, { useState } from "react";
import data from "../Data/NavbarData";
import { FaRProject, FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import { Nav, NavbarContainer, NavIcon, NavLogo } from "../Styles/NavbarStyles";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon src="./assets/logo.png" alt="logo" />
              Trung Electronic
            </NavLogo>
            <MobileIcon></MobileIcon>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
