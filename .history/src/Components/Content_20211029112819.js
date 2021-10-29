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
  Imgs,
} from "../Styles/ContentStyles";
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

  href,

  Arrow,
  imgs,
}) => {
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
              </ContentA>
            </TextWrapper>
          </ContentColumn>
          <ContentColumn>
            <ImgWrapper>
              {imgs ? <Imgs src={imgs} alt={alt} /> : <Img options={img} />}
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
};
