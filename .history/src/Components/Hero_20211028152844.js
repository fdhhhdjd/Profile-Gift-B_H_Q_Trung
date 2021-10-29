import React from "react";
import { Button, Container, MainHeading } from "../Styles/GlobalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
  CardB,
} from "../Styles/HeroStyles";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <HeroSection>
        <HeroVideo src="./assets/hero.mp4" autoPlay loop />
        <Container>
          <MainHeading>
            Hi,
            <CardB>
              <Typewriter
                loop
                cursor
                cursorStyle={"_"}
                pauseFor={1000}
                delaySpeed={3000}
                color="red"
                // deleteSpeed={2000}
                words={["I'm Bùi Huỳnh Quốc Trung "]}
              />
            </CardB>
          </MainHeading>
          <HeroText>
            Tôi,chuyên kiểm thử chip và làm vi mạch thiết bị điện tử tự động.
          </HeroText>
          <ButtonWrapper>
            <Link to="signup">
              <Button>Get Started</Button>
            </Link>
            <HeroButton>Find More</HeroButton>
          </ButtonWrapper>
        </Container>
      </HeroSection>
    </>
  );
};

export default Hero;
