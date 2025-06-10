import { Link } from "react-router-dom";
import { IoCamera } from "react-icons/io5";
import { FaLocationDot, FaHeart } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export const NormalPost = () => {
  return (
    <div className="bg-white flex shadow-sm rounded-md p-4 mt-4">
      <figure className="w-[200px] h-[190px] relative shrink-0 rounded-[0.4rem]">
        <Link
          to="/nha-tro-doi-dien-so-194"
          title="NHÀ TRỌ ĐỐI DIỆN SỐ 194 GIA PHÚ F1 Quận 6, TP.HCM SDT: 0961417489 A Phú"
        >
          <img
            className="w-full h-full object-cover rounded-[0.4rem]"
            src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/06/18/z5398141402234-71ec242dfd7a7bb164f36f4959c988f2_1718683534.jpg"
            alt="NHÀ TRỌ ĐỐI DIỆN SỐ 194 GIA PHÚ F1 Quận 6, TP.HCM SDT: 0961417489 A Phú"
          />
        </Link>
        <div className="absolute bottom-[5px] left-[5px] flex items-center py-[0.2rem] px-[0.3rem] rounded-[0.3rem] text-white text-[0.8rem] leading-[1]">
          <IoCamera className="mr-1" size={15} /> 8
        </div>
      </figure>
      <div className="pl-4 grow-[1]">
        <h3 className="font-medium text-[1rem] mb-2">
          <Link
            className="text-[#0e4db3] line-clamp-2 text-[14px]"
            to={"/nha-tro-doi-dien-so-194-gia-phu"}
            title="NHÀ TRỌ ĐỐI DIỆN SỐ 194 GIA PHÚ F1 Quận 6, TP.HCM SDT: 0961417489 A Phú"
          >
            NHÀ TRỌ ĐỐI DIỆN SỐ 194 GIA PHÚ F1 Quận 6, TP.HCM SDT: 0961417489 A
            Phú
          </Link>
        </h3>
        <div className="mb-2 line-clamp-1">
          <span className="text-green-500 font-semibold text-[14px]">
            950.000 đồng/tháng
          </span>
          <span className="w-[3px] h-[3px] text-[14px] inline-block rounded-full bg-[#aaa] mr-[4px] mb-[3px] ml-[5px]"></span>
          <span className="text-[14px]">
            15 m<sup>2</sup>
          </span>
          <span className="w-[3px] h-[3px] inline-block rounded-full bg-[#aaa] mr-[4px] mb-[3px] ml-[5px]"></span>
        </div>
        <div className="flex mb-2 items-center">
          <FaLocationDot size={14} />
          <Link
            className="text-[14px]"
            to={"/tinh-thanh/ho chi minh/quan binh thanh"}
            title="Cho thuê phòng trọ Quận Bình Thạnh, Hồ Chí Minh"
          >
            Tân Phú, Hồ Chí Minh
          </Link>
        </div>
        <p className="line-clamp-2 whitespace-normal text-[14px] text-gray-800">
          Ở ghép máy lạnh bao điện nước, giữ xe trọn gói 950k ( giảm 200k tháng
          đầu ) địa chỉ 34 đường 36 Tân quy q7 ( ngay 434 Nguyễn thập ) . Phúc
          0931313570
        </p>
        <div className="flex items-center justify-between">
          <div className="flex w-[50%] items-center">
            <time className="text-[0.75rem] text-gray-800">Hôm nay</time>
          </div>
          <div className="w-auto flex items-center">
            <Button className="bg-white">
              <FaHeart className="text-gray-600 hover:text-red-500" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
