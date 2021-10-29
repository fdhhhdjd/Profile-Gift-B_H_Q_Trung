import React from "react";

import { BsFillShieldLockFill } from "react-icons/bs";
import { IoIosOptions } from "react-icons/io";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiSupport, BiDollar } from "react-icons/bi";
import { GrHostMaintenance } from "react-icons/gr";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
  {
    name: "Bảo mật dữ liệu",
    description:
      "Chúng tôi luôn đặt hàng đầu về vấn đề này để quý khách an tâm nhất.",
    icon: iconStyle(BsFillShieldLockFill),
    imgClass: "one",
  },
  {
    name: "Dễ Sử dụng",
    description:
      "Chip hay mạch đều lắp ráp và lập trình với mức độ dễ sử dụng nhất đến với khác hàng ",
    icon: iconStyle(IoIosOptions),
    imgClass: "two",
  },
  {
    name: "Vấn đề bảo hàng bảo dưỡng",
    description:
      "Bảo hàng bảo dường những thiết bị điện tử luôn được chúng tôi thiết kế dễ bảo trì sữa chữa.",
    icon: iconStyle(GrHostMaintenance),
    imgClass: "three",
  },
  {
    name: " Đội ngủ hộ trợ 24/7 ",
    description:
      "Nếu có thắc mắc hay vấn đề đội ngủ chúng tôi luôn giúp đỡ 24/7",
    icon: iconStyle(BiSupport),
    imgClass: "four",
  },
  {
    name: "Giá cả",
    description:
      "Luôn với mức ưu đãi nhất cho quý khách,chip,... mức giá thị trường.",
    icon: iconStyle(BiDollar),
    imgClass: "five",
  },
  {
    name: "Scalable",
    description:
      "Our servers are located all over the world, therefore improving scalability and speed ",
    icon: iconStyle(AiOutlineCloudUpload),
    imgClass: "six",
  },
];
