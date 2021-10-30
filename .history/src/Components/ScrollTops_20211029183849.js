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
  useEffect(() => {
    window.addEventListener("scroll", ToggleVisible);
    return () => {
      window.removeEventListener("scroll", ToggleVisible);
    };
  }, [visible]);
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    lottie.loadAnimation({
      container: Scroll.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/arrowsup.json"),
    });
  }, [visible]);
  return (
    <>
      {visible ? (
        <ScrollDiv onClick={ScrollToTop}>
          <div ref={Scroll}></div>
        </ScrollDiv>
      ) : (
        ""
      )}
    </>
  );
};

export default ScrollTops;
