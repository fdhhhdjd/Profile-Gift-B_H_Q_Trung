import React, { memo, useRef, useEffect } from "react";
import { Hero } from "../Imports/Index";
import FeaturesData from "../Components/FeaturesData";
import { Content } from "../Components/Content";
import { heroOne, heroTwo, heroThree } from "../Data/HeroData";
import Carousel from "../Components/Carousel";
const Home = () => {
  return (
    <>
      <motion.div
        className="content"
        variants={headerAnimation}
        animate={controls}
        transition={{ delay: 0.2, type: "tween" }}
      >
        {" "}
        <Hero />
      </motion.div>

      <FeaturesData />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Carousel />
    </>
  );
};

export default memo(Home);
