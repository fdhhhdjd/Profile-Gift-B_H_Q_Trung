import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100009136510942",
    icon: iconStyle(FaFacebook),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/quoc_trung14/",
    icon: iconStyle(FaInstagram),
  },
  {
    name: "Email",
    href: "mailto:buihuynhquoctrung@gmail.com",
    icon: iconStyle(FaYoutube),
  },
  {
    name: "Zalo",
    href: "tel:0348561815",
    icon: iconStyle(FaTwitter),
  },
  {
    name: "Phone",
    href: "tel:0348561815",
    icon: iconStyle(FaLinkedin),
  },
];

export const footerData = [
  {
    title: "Team Word",
    links: ["AI", "Web Developer", "Designer", "C#"],
  },
  {
    title: "Legal",
    links: ["GDPR", "Privacy Policy", "Terms of Service", "Disclaimer"],
  },
];
