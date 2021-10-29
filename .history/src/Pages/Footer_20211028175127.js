import React from "react";
import {
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLogo,
  SocialIcon,
  FooterRights,
  FooterSocialIcon,
  FooterWrapper,
  FooterAddress,
  FooterColumn,
  FooterGrid,
} from "../Styles/FooterStyles";
import { footerData, footerSocialData } from "../Data/FooterData";
import { Row, Section } from "../Styles/GlobalStyles";

function Footer() {
  return (
    <Section padding="4rem 0 2rem 0">
      <FooterWrapper>
        <FooterGrid justify="space-between">
          <FooterColumn id="footerLogo">
            <FooterLogo to="/">
              <SocialIcon src="./assets/logo1.png" />
              Trung SaĐéc
            </FooterLogo>
            <FooterAddress>Nha Trang,Khánh Hòa.</FooterAddress>

            <Row align="center" margin="auto  0 0 0" gap="1rem">
              {footerSocialData.map((social, index) => (
                <FooterSocialIcon
                  key={index}
                  href={social.href}
                  target="_blank"
                  aria-label={social.name}
                >
                  {social.icon}
                </FooterSocialIcon>
              ))}
            </Row>
          </FooterColumn>
          {footerData.map((footerItem, index) => (
            <FooterLinkItems key={index}>
              <FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
              {footerItem.links.map((link, linkIndex) => (
                <FooterLink key={linkIndex} to="/">
                  {link.name}
                </FooterLink>
              ))}
            </FooterLinkItems>
          ))}
        </FooterGrid>
        <FooterRights>
          Build React Website by Tai Heo Dev Web © 2021
        </FooterRights>
      </FooterWrapper>
    </Section>
  );
}

export default Footer;
