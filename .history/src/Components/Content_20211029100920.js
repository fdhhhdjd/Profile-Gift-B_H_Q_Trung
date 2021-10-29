import React, { useEffect, useRef } from "react";
import { Container, Section } from "../Styles/GlobalStyles";
import {
  ContentRow,
  TextWrapper,
  TopLine,
  Heading,
  ContentButton,
  Subtitle,
  ImgWrapper,
  Img,
  ContentColumn,
  ContentA,
} from "../Styles/ContentStyles";
import lottie from "lottie-web";
export const Content = ({
  primary,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  inverse,
  reverse,
}) => {
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
    <Section inverse={inverse}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine>{topLine.text}</TopLine>
              <Heading inverse={inverse}>{headline}</Heading>
              <Subtitle inverse={inverse}>{description}</Subtitle>
              <ContentA
                href="https://www.facebook.com/profile.php?id=100009136510942"
                target="_blank"
              >
                <ContentButton inverse={inverse} primary={primary}>
                  {buttonLabel}
                </ContentButton>
                &nbsp;&nbsp; &nbsp
                <ContentButton inverse={inverse} primary={primary}>
                  {buttonLabel}
                </ContentButton>
              </ContentA>
            </TextWrapper>
          </ContentColumn>
          <ContentColumn>
            <ImgWrapper>
              <Img
                // src={img}
                ref={arrow}
              />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
};
