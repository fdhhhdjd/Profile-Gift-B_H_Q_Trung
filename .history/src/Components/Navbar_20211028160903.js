import React, { useState } from "react";
import data from "../Data/NavbarData";
import { FaRProject, FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  MobileIcon,
} from "../Styles/NavbarStyles";
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
            <MobileIcon onClick={handleClick}>
              {show ? <FaTimes /> : <CgMenuRight />}
            </MobileIcon>
            <NavMenu show={show}>
              {data.map((el, index) => (
                <NavItem key={index}>
                  <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
                    {el.title}
                  </NavLinks>
                </NavItem>
              ))}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
