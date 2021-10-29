import React from "react";
import { Button, Container, MainHeading } from "../Styles/GlobalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "../Styles/HeroStyles";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <HeroSection>
        <HeroVideo src="./assets/hero.mp4" autoPlay loop />
        <Container>
          <MainHeading>Your data is secure with us</MainHeading>
          <HeroText>
            We provide the best security systems for clients all over the world
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
