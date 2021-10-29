import React from "react";
import { Hero } from "../Imports/Index";
import FeaturesData from "../Components/FeaturesData";
import Content from "../Components/Content";
import { heroOne, heroTwo, heroThree } from "../data/HeroData";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesData />
      <Content {...heroOne} />
    </>
  );
};

export default Home;
