import React, { memo } from "react";
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
  const initial = {
    y: 40,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };

  return (
    <>
      <Section smPadding="50px 10px" position="relative" inverse id="about">
        <Container>
          <FeatureTextWrapper>
            <FeatureTitle>Tôi cung cấp cho bạn những gì?</FeatureTitle>
          </FeatureTextWrapper>
          <FeatureWrapper>
            {featuresData.map((el, index) => (
              <>
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
              </>
            ))}
          </FeatureWrapper>
        </Container>
      </Section>
    </>
  );
};

export default memo(FeaturesData);
