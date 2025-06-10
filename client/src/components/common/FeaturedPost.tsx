import { Link } from "react-router-dom";
import { IoCamera } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { FaPhoneAlt, FaHeart } from "react-icons/fa";

export const FeaturedPost = () => {
  return (
    <div className="bg-white shadow-sm rounded-md p-4 mt-4">
      <figure className="w-full h-[260px] rounded-[0.4rem] relative">
        <Link
          to={"/tinh-thanh/ho chi minh/phong-tro-lotte-mart"}
          title="Ở ghép máy lạnh bao điện nước, giữ xe 950k ngay Lotte"
        >
          <img
            className="w-[60%] h-[260px] rounded-tl-[0.4rem] rounded-bl-[0.4rem] border-r-3 border-white object-cover float-left"
            src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2020/08/07/acf799e4-fc67-47ff-a25d-311a214acebe_1596818135.jpg"
            alt="Ảnh 1 - Ở ghép máy lạnh bao điện nước, giữ xe 950k ngay Lotte"
          />
          <img
            className="w-[40%] h-[50%] rounded-tr-[0.4rem] border-b-3 border-white object-cover float-left"
            src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2020/08/07/7828039f-1040-4774-b1fb-1e33d9b935b3_1596818135.jpg"
            alt="Ảnh 2 - Ở ghép máy lạnh bao điện nước, giữ xe 950k ngay Lotte"
          />
          <img
            className="w-[20%] h-[50%]  border-r-3 border-white object-cover float-left"
            src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2020/08/07/1a82af71-d605-4912-8cd8-d12dd9a7cdc3_1596818135.jpg"
            alt="Ảnh 3 - Ở ghép máy lạnh bao điện nước, giữ xe 950k ngay Lotte"
          />
          <img
            className="w-[20%] h-[50%] rounded-br-[0.4rem] object-cover float-left"
            src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2020/08/07/8926148a-4571-40f3-89a0-fb751cde3baa_1596818136.jpg"
            alt="Ảnh 4 - Ở ghép máy lạnh bao điện nước, giữ xe 950k ngay Lotte"
          />
        </Link>
        <div className="absolute bottom-[5px] left-[5px] flex items-center py-[0.2rem] px-[0.3rem] rounded-[0.3rem] text-white text-[0.8rem] leading-[1]">
          <IoCamera className="mr-1" size={15} /> 8
        </div>
      </figure>
      <div className="pt-4">
        <h3 className="uppercase font-medium text-[1rem] mb-2 text-[#fb2c36]">
          <Link
            to={"/tinh-thanh/ho chi minh/phong-tro-tien-nghi-ngay-lotte"}
            title="Ở ghép máy lạnh bao điện nước, giữ xe 950k ngay Lotte"
          >
            <span className="w-[60px] h-[12px] bg-[url(https://phongtro123.com/images/bi-star-fill-yellow.svg)] bg-size-[12px] inline-block mr-[3px]"></span>
            Ở ghép máy lạnh bao điện nước, giữ xe 950k ngay Lotte{" "}
          </Link>
        </h3>
        <div className="mb-2">
          <span className="text-green-500 font-semibold text-[1rem]">
            950.000 đồng/tháng
          </span>
          <span className="w-[3px] h-[3px] inline-block rounded-full bg-[#aaa] mr-[4px] mb-[3px] ml-[5px]"></span>
          <span>
            15 m<sup>2</sup>
          </span>
          <span className="w-[3px] h-[3px] inline-block rounded-full bg-[#aaa] mr-[4px] mb-[3px] ml-[5px]"></span>
          <Link
            to={"/tinh-thanh/ho chi minh/quan 7"}
            title="Cho thuê phòng trọ Quận 7, Hồ Chí Minh"
          >
            Quận 7, Hồ Chí Minh
          </Link>
        </div>
        <p className="line-clamp-2 whitespace-normal mb-4 text-[0.85rem] text-gray-800">
          Ở ghép máy lạnh bao điện nước, giữ xe trọn gói 950k ( giảm 200k tháng
          đầu ) địa chỉ 34 đường 36 Tân quy q7 ( ngay 434 Nguyễn thập ) . Phúc
          0931313570
        </p>
        <div className="flex items-center justify-between">
          <div className="flex w-[50%] items-center">
            <img
              src="https://phongtro123.com/images/default-user.svg"
              alt="Hoàng Phúc"
              className="w-[40px] h-[40px] border border-[#ddd] rounded-full p-[0.2rem] mr-[0.7rem] object-cover"
            />
            <div className="leading-[1.5]">
              <span className="line-clamp-1">Hoàng Phúc</span>
              <time className="text-[0.75rem] text-gray-800">Hôm nay</time>
            </div>
          </div>
          <div className="w-auto flex items-center">
            <Button className="bg-green-500">
              <FaPhoneAlt />
              0931313570
            </Button>
            <Button className="bg-white">
              <FaHeart className="text-gray-600 hover:text-red-500" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
