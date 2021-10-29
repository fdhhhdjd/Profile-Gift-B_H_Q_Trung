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
    <Section inverse={inverse} ref={ref}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {topLine.text}
              </TopLine>
              <Heading
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                inverse={inverse}
              >
                {headline}
              </Heading>
              <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                inverse={inverse}
              >
                {description}
              </Subtitle>
              <ContentButton
                initial={initial}
                transition={{ delay: 1, duration: 0.6 }}
                inverse={inverse}
                primary={primary}
              >
                {buttonLabel}
              </ContentButton>
            </TextWrapper>
          </ContentColumn>
          <ContentColumn
            initial={initial}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
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
