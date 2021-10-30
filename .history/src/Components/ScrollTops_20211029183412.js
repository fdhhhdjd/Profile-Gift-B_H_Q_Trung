import React, { useEffect, useRef, useState } from "react";
import { BiUpArrow } from "react-icons/bi";
import lottie from "lottie-web";
import { ScrollDiv } from "../Styles/ScrollTop";
const ScrollTops = () => {
  const Scroll = useRef();
  const [visible, SetVisible] = useState(false);
  const ToggleVisible = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 400) {
      SetVisible(true);
    } else if (scroll <= 400) {
      SetVisible(false);
    }
  };
  window.addEventListener("scroll", ToggleVisible);
  const ScrollToTop = () => {};
  return (
    <>{visible ? <ScrollDiv onClick={ScrollToTop}>click</ScrollDiv> : ""}</>
  );
};

export default ScrollTops;
