export const data = [
  {
    title: "Những gì khách hàng đánh giá",
    description:
      "Khách hàng của chúng tôi vui vẻ ở lại với dịch vụ của chúng tôi trong vài năm nay.",
    image: "./assets/clients.jpg",
  },
  {
    title: "Mức độ bảo mật  ",
    description:
      "Được IT viết phần mềm bảo mật rất tốt và có vẻ như bất bại trước các hacker",
    image: "./assets/security.jpg",
  },
  {
    title: "Đội nhóm",
    description: "Đội nhóm chúng tôi có đầy đủ các yếu tố kể cả về AI,WEB,...",
    image: "./assets/teamwork.jpg",
  },
  {
    title: "Mức độ sử lý",
    description:
      "Mức độ sử lý nhanh và mạnh giúp bạn trãi nghiệm không khác gì một con mãnh thú",
    image:
      "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?cs=srgb&dl=pexels-manuel-geissinger-325229.jpg&fm=jpg",
  },
  {
    title: "Khách hàng đầu tiên ",
    description: "We have provided services to top clients in tech industry",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
];

export const sliderSettings = {
  arrows: false,
  slidesToShow: 3,
  focusOnselect: false,
  accessability: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
