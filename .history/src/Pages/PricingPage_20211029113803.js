import React from "react";
import { Button, Heading, TextWrapper } from "../Styles/GlobalStyles";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingContainer,
  PricingCardInfo,
  PricingCardPlan,
  PricingCardCost,
  PricingCardFeatures,
  PricingCardText,
  PricingCardFeature,
  PricingCard,
  CartA,
} from "../Styles/PricingStyles";
import { pricingData } from "../Data/PricingData";
const PricingPage = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#a9b3c1", size: "1rem" }}>
        <PricingSection id="pricing">
          <PricingWrapper>
            <Heading>Giá cả theo thị trường</Heading>

            <TextWrapper
              mb="1.4rem"
              weight="600"
              size="1.1rem"
              color="white"
              align="center"
            >
              <br />
              Tôi sẽ tạo cho bạn một sự uy tín cả về sản phẩm và chất lượng.
            </TextWrapper>
            <PricingContainer>
              {pricingData.map((card, index) => (
                <PricingCard key={index}>
                  <PricingCardInfo>
                    <PricingCardPlan>{card.title}</PricingCardPlan>
                    <PricingCardCost>{card.price}</PricingCardCost>
                    <PricingCardText>{card.description}</PricingCardText>
                    <PricingCardFeatures>
                      {card.features.map((feature, index) => (
                        <PricingCardFeature key={index}>
                          {feature}
                        </PricingCardFeature>
                      ))}
                    </PricingCardFeatures>

                    <Button>
                      <CartA href="tel:0348561815">Tư Vấn Ngay </CartA>
                    </Button>
                  </PricingCardInfo>
                </PricingCard>
              ))}
            </PricingContainer>
          </PricingWrapper>
        </PricingSection>
      </IconContext.Provider>
    </>
  );
};

export default PricingPage;
