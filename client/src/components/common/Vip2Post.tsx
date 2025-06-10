import { Link } from "react-router-dom";
import { FaLocationDot, FaHeart } from "react-icons/fa6";
import { IoCamera } from "react-icons/io5";
import { Button } from "@/components/ui/button";

export const Vip2Post = () => {
  return (
    <div className="md:flex items-center p-4 mt-4 bg-white shadow-sm">
      <figure className="relative w-[230px] h-[210px] shrink-0 lg:mb-0 mb-4 rounded-[0.4rem]">
        <Link
          to={"/cho-thue-phong-tro-dep-gia-rat-sinh-vien-thoang-mat-sach-se"}
          title="Cho thuê phòng trọ giá sinh viên, thoáng mát sạch sẽ giá chỉ 1tr2 tại đường Thành Công, Tân Phú"
        >
          <img
            className="w-full h-full rounded-[0.4rem] float-left object-cover"
            src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/03/26/z5285570747105-08ed053a168538e397dce89a7d1575da_1711437599.jpg"
            alt="Ảnh 1 - [GIẢM 1 TRIỆU] Phòng trọ đầy đủ nội thất gần Đại học…"
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
            className="text-[#ff5723] line-clamp-2"
            to={"/giam-1-trieu-phong-tro-sinh-vien"}
            title="[GIẢM 1 TRIỆU] Phòng trọ đầy đủ nội thất gần Đại học Thuỷ Lợi phường 17 Quận Bình Thạnh"
          >
            <span className="bg-[url(https://phongtro123.com/images/bi-star-fill-yellow.svg)] w-[36px] h-[12px] bg-size-[12px] inline-block mr-[3px]"></span>
            Cho thuê phòng trọ giá sinh viên, thoáng mát sạch sẽ giá chỉ 1tr2
            tại đường Thành Công, Tân Phú
          </Link>
        </h3>
        <div className="line-clamp-1 mb-2">
          <span className="text-green-500 font-semibold text-[1rem]">
            1.2 triệu/tháng
          </span>
          <span className="w-[5px] h-[5px] inline-block rounded-[50%] bg-[#aaa] mr-[4px] mb-[3px] ml-[5px]"></span>
          <span>
            10 m<sup>2</sup>
          </span>
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
        <p className="line-clamp-2 mb-6 font-light text-gray-800 text-[0.85rem]">
          Phòng trọ giá hạt dẻ tại 257 Đường Thành Công, Phường Tân Thành, Quận
          Tân Phú.Phòng trọ thoáng mát và sạch sẽ, với diện tích 10m2, phù hợp
          cho người…
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
            <Button size={"sm"} className="bg-white">
              <FaHeart className="text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
