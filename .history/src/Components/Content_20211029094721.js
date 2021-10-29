import React, { useEffect } from "react";
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
} from "../Styles/ContentStyles";

import { useInView } from "react-intersection-observer";

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
  const initial = { opacity: 0, y: 30 };

  return (
    <Section inverse={inverse}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine>{topLine.text}</TopLine>
              <Heading inverse={inverse}>{headline}</Heading>
              <Subtitle inverse={inverse}>{description}</Subtitle>
              <ContentButton inverse={inverse} primary={primary}>
                <a
                  href="https://www.facebook.com/profile.php?id=100009136510942"
                  target="_blank"
                >
                  {" "}
                  {buttonLabel}
                </a>
              </ContentButton>
            </TextWrapper>
          </ContentColumn>
          <ContentColumn>
            <ImgWrapper>
              <Img
                src={img}
                alt={alt}
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
};
