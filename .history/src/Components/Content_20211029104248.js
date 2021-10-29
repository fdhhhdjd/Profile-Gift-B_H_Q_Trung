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
  ContentButtonEmail,
} from "../Styles/ContentStyles";
import lottie from "lottie-web";
import trung from "../Images/trung.jpg";
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
  buttonLabelEmail,
  href,
  hrefEm,
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
              <ContentA href={href} target="_blank">
                <ContentButton inverse={inverse} primary={primary}>
                  {buttonLabel}
                </ContentButton>
                {/* &nbsp;&nbsp; &nbsp; */}
              </ContentA>
              {/* <ContentA href={hrefEm} target="_blank">
                <ContentButtonEmail inverse={inverse} primary={primary}>
                  {buttonLabelEmail}
                </ContentButtonEmail>
              </ContentA> */}
            </TextWrapper>
          </ContentColumn>
          <ContentColumn>
            <ImgWrapper>
              <Img src={img} alt="profile" ref={arrow} />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
};
