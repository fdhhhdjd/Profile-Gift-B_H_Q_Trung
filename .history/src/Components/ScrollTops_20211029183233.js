import React, { useEffect, useRef, useState } from "react";
import { BiUpArrow } from "react-icons/bi";
import lottie from "lottie-web";
import { ScrollDiv } from "../Styles/ScrollTop";
const ScrollTops = () => {
  const Scroll = useRef();
  const [visible, SetVisible] = useState(false);
  const ToggleVisible = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 300) {
      SetVisible(true);
    } else if (scroll <= 300) {
      SetVisible(false);
    }
  };
  window.addEventListener("scroll", ToggleVisible);
  return (
    <>
      <ScrollDiv onClick={}>click</ScrollDiv>
    </>
  );
};

export default ScrollTops;
