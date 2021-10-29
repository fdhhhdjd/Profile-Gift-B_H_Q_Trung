import React from "react";
import { Section, Container } from "../Styles/GlobalStyles";
import { FeatureTitle, FeatureTextWrapper } from "../Styles/FeaturesStyles";
const FeaturesData = () => {
  return (
    <>
      <Section smPadding="50px 10px" position="relative" inverse id="about">
        <Container>
          <FeatureTextWrapper>
            <FeatureTitle>What We Offer</FeatureTitle>
          </FeatureTextWrapper>
        </Container>
      </Section>
    </>
  );
};

export default FeaturesData;
