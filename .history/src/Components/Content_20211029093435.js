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
  return (
    <Section inverse={inverse}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>oke</ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
};
