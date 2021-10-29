import React, { useState } from "react";
import { data } from "../Data/NavbarData";
import { FaRProject, FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import { useLocation, useHistory } from "react-router-dom";
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "../Styles/NavbarStyles";
const Navbar = () => {
  const [show, setShow] = useState(false);
  let history = useHistory();
  let location = useLocation();
  const handleClick = () => {
    setShow(!show);
  };
  const scrollTo = (id) => {
    const element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  const closeMobileMenu = (to, id) => {
    if (id && location.pathname === "/") {
      scrollTo(id);
    }

    history.push(to);
    setShow(false);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon src="./assets/logo.png" alt="logo" />
              TrungSadec
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
