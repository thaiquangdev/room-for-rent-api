import { Link } from "react-router-dom";
import { FaLocationDot, FaHeart } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoCamera } from "react-icons/io5";
import { Button } from "@/components/ui/button";

export const Vip1Posts = () => {
  return (
    <div className="md:flex items-center p-4 mt-4 bg-white shadow-sm">
      <figure className="relative w-[270px] h-[220px] shrink-0 lg:mb-0 mb-4 rounded-[0.4rem]">
        <Link
          to={"/Giam-1-trieu-phong-tro-sinh-vien-day-du-tien-nghi"}
          title="[GIẢM 1 TRIỆU] Phòng trọ đầy đủ nội thất gần Đại học Thuỷ Lợi phường 17 Quận Bình Thạnh"
        >
          <img
            className="w-[50%] h-full border-r-3 border-white rounded-tl-[0.4rem] rounded-bl-[0.4rem] float-left"
            src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2025/05/31/z6650485029190-7684e5b5bd57ecad2557fcf437c76eb2_1748701894.jpg"
            alt="Ảnh 1 - [GIẢM 1 TRIỆU] Phòng trọ đầy đủ nội thất gần Đại học…"
          />
          <img
            className="w-[50%] h-[50%] border-b-3 border-white rounded-tr-[0.4rem] float-left"
            src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2025/05/31/z6650484687439-1e714c97d3ace4f170ab228f789a5e29_1748701892.jpg"
            alt="Ảnh 2 - [GIẢM 1 TRIỆU] Phòng trọ đầy đủ nội thất gần Đại học…"
          />
          <img
            className="w-[50%] h-[50%] rounded-br-[0.4rem] float-left"
            src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2025/05/31/z6650484618984-46b8d6e3fb93bd4bdfd69e89288bd95b_1748701891.jpg"
            alt="Ảnh 3 - [GIẢM 1 TRIỆU] Phòng trọ đầy đủ nội thất gần Đại học…"
          />
        </Link>
        <div className="absolute bottom-[5px] left-[5px] flex items-center py-[0.2rem] px-[0.3rem] rounded-[0.3rem] text-white text-[0.8rem] leading-1">
          {" "}
          <IoCamera className="mr-1" size={15} /> 8
        </div>
      </figure>
      <div className="md:pl-4 flex-grow">
        <h3 className="uppercase font-medium text-[1rem] mb-2">
          <Link
            className="text-[#f6339a] line-clamp-2"
            to={"/giam-1-trieu-phong-tro-sinh-vien"}
            title="[GIẢM 1 TRIỆU] Phòng trọ đầy đủ nội thất gần Đại học Thuỷ Lợi phường 17 Quận Bình Thạnh"
          >
            <span className="bg-[url(https://phongtro123.com/images/bi-star-fill-yellow.svg)] w-[48px] h-[12px] bg-size-[12px] inline-block mr-[3px]"></span>
            [GIẢM 1 TRIỆU] Phòng trọ đầy đủ nội thất gần Đại học Thuỷ Lợi phường
            17 Quận Bình Thạnh
          </Link>
        </h3>
        <div className="line-clamp-1 mb-2">
          <span className="text-green-500 font-semibold text-[1rem]">
            4.95 triệu/tháng
          </span>
          <span className="w-[5px] h-[5px] inline-block rounded-[50%] bg-[#aaa] mr-[4px] mb-[3px] ml-[5px]"></span>
          <span>
            30 m<sup>2</sup>
          </span>
        </div>
        <div className="flex mb-2 items-center">
          <FaLocationDot size={14} />
          <Link
            className="text-[14px]"
            to={"/tinh-thanh/ho chi minh/quan binh thanh"}
            title="Cho thuê phòng trọ Quận Bình Thạnh, Hồ Chí Minh"
          >
            Bình Thạnh, Hồ Chí Minh
          </Link>
        </div>
        <p className="line-clamp-2 mb-6 font-light text-gray-800 text-[0.85rem]">
          HỖ TRỢ TIỀN CỌC 50% - CHỈ PHÒNG NÀYPhòng nội thất cơ bản đến đầy đủ
          nội thất Giá từ 4.900.000đHệ thống nhà WC full kính ngăn mùi hiện…
        </p>
        <div className="flex justify-between items-center">
          <div className="w-[50%] items-center flex">
            <img
              src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2025/03/10/anh-man-hinh-2025-03-10-luc-180911_1741604988.png"
              alt="avatar"
              className="w-[35px] h-[35px] border border-[#ddd] p-[0.2rem] mr-[0.5rem] rounded-[50%]"
            />
            <div className="leading-[1.25]">
              <span className="line-clamp-1 text-[15px]">
                Ngọc Uyên BĐS Mua bán Cho thuê TPHCM
              </span>
              <time className="text-[0.75rem] text-gray-800" title="Hôm nay">
                Hôm nay
              </time>
            </div>
          </div>
          <div className="w-auto flex items-center">
            <Button size={"sm"} className="bg-green-500">
              <FaPhoneAlt size={10} />
              0921027272
            </Button>
            <Button size={"sm"} className="bg-white">
              <FaHeart className="text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
