import React, { memo, useRef, useEffect } from "react";
import { Hero } from "../Imports/Index";
import FeaturesData from "../Components/FeaturesData";
import { Content } from "../Components/Content";
import { heroOne, heroTwo, heroThree } from "../Data/HeroData";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesData />
      <Content {...heroOne} Arrow={arrow} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
    </>
  );
};

export default memo(Home);
