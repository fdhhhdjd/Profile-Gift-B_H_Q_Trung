import React, { useEffect, useRef, useState } from "react";
import { BiUpArrow } from "react-icons/bi";
import lottie from "lottie-web";
import { ScrollDiv } from "../Styles/ScrollTop";
const ScrollTops = () => {
  const Scroll = useRef();
  const [visible, SetVisible] = useState(false);
  const ToggleVisible = () => {
    const scroll = document.documentElement.scrollTop;
    if (visible > 300) {
      SetVisible(true);
    } else {
      SetVisible(false);
    }
  };
  return (
    <>
      <ScrollDiv onClick={ToggleVisible}>click</ScrollDiv>
    </>
  );
};

export default ScrollTops;
