import React, { useEffect, useRef, memo } from "react";
import { Button, Container, MainHeading } from "../Styles/GlobalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
  CardB,
  ContactHero,
} from "../Styles/HeroStyles";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
const Hero = () => {
  console.log("render");
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
                deleteSpeed={100}
                words={["I'm Bùi Huỳnh Quốc Trung "]}
              />
            </CardB>
          </MainHeading>
          <HeroText>
            Tôi,chuyên kiểm thử chip và làm vi mạch thiết bị điện tử tự động.
          </HeroText>
          <ButtonWrapper>
            <Link to="signup">
              <Button>Liên Hệ Ngay</Button>
            </Link>
            <a href="tel:0798805741">
              <HeroButton>Gọi Ngay</HeroButton>
            </a>
          </ButtonWrapper>
        </Container>
      </HeroSection>
    </>
  );
};

export default memo(Hero);
