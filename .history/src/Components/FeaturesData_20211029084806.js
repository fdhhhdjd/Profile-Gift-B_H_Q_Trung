import React from "react";
import { Container, Section } from "../Styles/GlobalStyles";
import {
  FeatureText,
  FeatureTitle,
  FeatureWrapper,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureTextWrapper,
} from "../Styles/FeaturesStyles";
import { featuresData } from "../Styles/FeaturesStyles";

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
              <FeatureColumn
                initial={initial}
                animate={animate}
                transition={{ duration: 0.5 + index * 0.1 }}
                key={index}
              >
                <FeatureImageWrapper className={el.imgClass}>
                  {el.icon}
                </FeatureImageWrapper>
                <FeatureName>{el.name}</FeatureName>
                <FeatureText>{el.description}</FeatureText>
              </FeatureColumn>
            ))}
          </FeatureWrapper>
        </Container>
      </Section>
    </>
  );
};

export default FeaturesData;
