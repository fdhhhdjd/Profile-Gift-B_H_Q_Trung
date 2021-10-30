import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaVoicemail,
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
    icon: iconStyle(FaVoicemail),
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
        href: "https://www.facebook.com/jonhny.nguyen.184",
      },
      {
        name: "Web Developer",
        href: "https://profile-forme.surge.sh/",
      },
      {
        name: "Designer Editor",
        href: "https://khang-designer.surge.sh//",
      },
      {
        name: "C#,kinh doanh bất động sản",
        href: "http://hoangpc.surge.sh/",
      },
      {
        name: "Vi mạch và chíp sử lý",
        href: "https://www.facebook.com/profile.php?id=100009136510942",
      },
    ],
  },
  {
    title: "Team Word",
    links: [
      {
        name: "Nguyễn Hữu Quyền",
        href: "https://www.facebook.com/jonhny.nguyen.184",
        title: "AI trí tuệ nhân tạo",
      },
      {
        name: "Nguyễn Tiến Tài",
        href: "https://www.facebook.com/profile.php?id=100006139249437",
      },
      {
        name: "Nguyễn Bảo Khang",
        href: "https://www.facebook.com/khanhgiangg102",
      },
      {
        name: "Trần Phi Hoàng",
        href: "https://www.facebook.com/hoang.p.tran.12",
      },
      {
        name: "Bùi Huỳnh Quốc Trung",
        href: "https://www.facebook.com/profile.php?id=100009136510942",
      },
    ],
  },
];
