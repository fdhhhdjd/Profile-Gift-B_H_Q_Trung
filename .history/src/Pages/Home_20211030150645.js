import React, { memo, useRef, useEffect } from "react";
import { Hero } from "../Imports/Index";
import FeaturesData from "../Components/FeaturesData";
import { Content } from "../Components/Content";
import { heroOne, heroTwo, heroThree } from "../Data/HeroData";
import Carousel from "../Components/Carousel";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesData />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Carousel />
    </>
  );
};

export default memo(Home);
