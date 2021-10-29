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
      {
        name: "AI trí tuệ nhân tạo",
        href: "https://profile-forme.surge.sh/",
        title: ,
      },
      {
        name: "Nguyễn Tiến Tài",
        href: "https://profile-forme.surge.sh/",
      },
      {
        name: "Nguyễn Bảo Khang",
        href: "https://profile-forme.surge.sh/",
      },
      {
        name: "Trần Phi Hoàng",
        href: "https://profile-forme.surge.sh/",
      },
      {
        name: "Bùi Huỳnh Quốc Trung",
        href: "https://profile-forme.surge.sh/",
      },
    ],
  },
  {
    title: "Team Word",
    links: [
      {
        name: "Nguyễn Hữu Quyền",
        href: "https://profile-forme.surge.sh/",
        title: "AI trí tuệ nhân tạo",
      },
      {
        name: "Nguyễn Tiến Tài",
        href: "https://profile-forme.surge.sh/",
      },
      {
        name: "Nguyễn Bảo Khang",
        href: "https://profile-forme.surge.sh/",
      },
      {
        name: "Trần Phi Hoàng",
        href: "https://profile-forme.surge.sh/",
      },
      {
        name: "Bùi Huỳnh Quốc Trung",
        href: "https://profile-forme.surge.sh/",
      },
    ],
    // href: [
    //   "Nguyễn Hữu Quyền",
    //   "https://profile-forme.surge.sh/",
    //   "Nguyễn Bảo Khang",
    //   "Trần Phi Hoàng",
    //   "Bùi Huỳnh Quốc Trung",
    // ],
  },
];
