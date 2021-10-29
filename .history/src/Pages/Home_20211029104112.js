import React, { memo } from "react";
import { Hero } from "../Imports/Index";
import FeaturesData from "../Components/FeaturesData";
import { Content } from "../Components/Content";
import { heroOne, heroTwo, heroThree } from "../Data/HeroData";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesData />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
    </>
  );
};

export default memo(Home);
