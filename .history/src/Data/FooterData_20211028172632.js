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
    name: "Twitter",
    icon: iconStyle(FaTwitter),
  },
  {
    name: "LinkedIn",
    icon: iconStyle(FaLinkedin),
  },
];

export const footerData = [
  {
    title: "Main",
    links: ["Blog", "FAQs", "Support", "About us"],
  },
  {
    title: "Product",
    links: ["Login", "Personal", "Business", "Team"],
  },
  {
    title: "Press",
    links: ["Logos", "Events", "Stories", "Office"],
  },
  {
    title: "Legal",
    links: ["GDPR", "Privacy Policy", "Terms of Service", "Disclaimer"],
  },
];
