import React from "react";
import { Section, Container } from "../Styles/GlobalStyles";
import {
  FeatureText,
  FeatureTitle,
  FeatureWrapper,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureTextWrapper,
} from "../Styles/FeaturesStyles";
import { featuresData } from "../Data/FeaturesData";
const FeaturesData = () => {
  return (
    <>
      <Section smPadding="50px 10px" position="relative" inverse id="about">
        <Container>
          <FeatureTextWrapper>
            <FeatureTitle>What We Offer</FeatureTitle>
          </FeatureTextWrapper>
          <FeatureWrapper>
            {featuresData.map((el, index) => (
              <>
                <FeatureImageWrapper className={el.imgClass}>
                  {el.icon}
                </FeatureImageWrapper>
                <FeatureName>{el.name}</FeatureName>
                <FeatureText>{el.description}</FeatureText>
              </>
            ))}
          </FeatureWrapper>
        </Container>
      </Section>
    </>
  );
};

export default FeaturesData;
