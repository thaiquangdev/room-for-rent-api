import { Link } from "react-router-dom";

export const FeaturedPostDetail = () => {
  return (
    <Link
      to={"/"}
      className="flex items-center"
      title="KÍ TÚC XÁ FULL TIỆN NGHI CHỈ 1TR5 TẠI QUẬN PHÚ NHUẬN - THÁNG 6 GIẢM THÊM 300K"
    >
      <figure className="w-[100px] h-[100px] shrink-0 rounded-[0.4rem] bg-[#f1f1f1] relative">
        <img
          src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2025/04/30/17_1746005763.png"
          alt="KÍ TÚC XÁ FULL TIỆN NGHI CHỈ 1TR5 TẠI QUẬN PHÚ NHUẬN - THÁNG 6 GIẢM THÊM 300K"
          className="w-full h-full object-cover rounded-[0.4rem]"
        />
      </figure>
      <div className="pl-[0.7rem] flex-grow-1">
        <p className="line-clamp-3 mb-2 text-[#fb2c36] text-[14px]">
          KÍ TÚC XÁ FULL TIỆN NGHI CHỈ 1TR5 TẠI QUẬN PHÚ NHUẬN - THÁNG 6 GIẢM
          THÊM 300K
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[12px] text-green-500 font-medium">
            1.2 triệu/tháng
          </span>
          <time
            className="text-[11px] text-gray-800"
            title="Thứ 3, 09:59 10/06/2025"
          >
            28 phút trước
          </time>
        </div>
      </div>
    </Link>
  );
};
