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
    title: "Technology field",
    links: [
      "AI trí tuệ nhân tạo",
      "Web Developer",
      "Designer Editor",
      "C# Hướng đối tượng ",
      "Điện Tử chip,vi sử lý. ",
    ],
  },
  {
    title: "Team Word",
    links: [
      "Nguyễn Hữu Quyền",
      "Nguyễn Tiến Tài",
      "Nguyễn Bảo Khang",
      "Trần Phi Hoàng",
      "Bùi Huỳnh Quốc Trung",
    ],
    href: [
      "Nguyễn Hữu Quyền",
      "Nguyễn Tiến Tài",
      "Nguyễn Bảo Khang",
      "Trần Phi Hoàng",
      "Bùi Huỳnh Quốc Trung",
    ],
  },
];
