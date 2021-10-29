import * as study from "../Json/study.json";
import * as practice from "../Json/practice.json";
import trung from "../Images/trung.jpg";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: study.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: practice.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export const heroOne = {
  reverse: true,
  inverse: true,
  topLine: {
    text: "Học tập Tại Trường Đại Học Nha Trang",
  },
  headline: "Trình độ đại học cử nhân Cơ điện tử.",
  description:
    "Vừa làm vừa học trau dồi bản thân và cũng để giúp khác hàng những gì gọi là tốt nhất.",
  buttonLabel: "Facebook",
  buttonLabelEmail: "Email",
  href: "https://www.facebook.com/profile.php?id=100009136510942",
  imgStart: "start",
  imgs: trung,
  start: "true",
};

export const heroTwo = {
  reverse: false,
  inverse: false,
  topLine: {
    text: "Chuyên Ngành cơ điện tử.",
  },
  headline: "Phương pháp hay nhất ",
  description:
    "Bằng mọi cách chúng tôi sẽ làm Khách hàng có trải nghiệm tốt nhất khi sử dụng sản phẩm của chúng tôi.",
  buttonLabel: "Liên hệ",
  buttonLabelEmail: "Email",
  href: "tel:0348561815",

  linkTo: "/more",
  imgStart: "start",
  img: defaultOptions1,
  start: "true",
};

export const heroThree = {
  reverse: true,
  inverse: true,
  topLine: {
    text: "Highly reputed brand",
  },
  headline: "Why us? ",
  description:
    "Our 9 year experience have allowed us to use the most innovative technologies and methodologies",
  buttonLabel: "Email",
  href: "mailto:buihuynhquoctrung@gmail.com",
  linkTo: "/download",
  imgStart: "",
  img: defaultOptions,
  start: "true",
};
