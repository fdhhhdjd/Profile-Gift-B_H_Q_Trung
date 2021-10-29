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
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <Section inverse={inverse} ref={ref}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn></ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
};
