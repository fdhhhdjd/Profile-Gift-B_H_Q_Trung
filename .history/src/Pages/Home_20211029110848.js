import React, { memo, useRef, useEffect } from "react";
import { Hero } from "../Imports/Index";
import FeaturesData from "../Components/FeaturesData";
import { Content } from "../Components/Content";
import { heroOne, heroTwo, heroThree } from "../Data/HeroData";
import lottie from "lottie-web";
const Home = () => {
  const arrow = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: arrow.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/study.json"),
    });
  }, []);
  return (
    <>
      <Hero />
      <FeaturesData />
      <Content {...heroOne} ref={arrow} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
    </>
  );
};

export default memo(Home);
