import { Link } from "react-router-dom";
import { IoCamera } from "react-icons/io5";

export const PostRelatedItem = () => {
  return (
    <div className="md:w-[25%] w-[50%] px-2">
      <div className="w-full h-full">
        <figure className="w-full h-[160px] relative">
          <Link to={"/"} title="Phòng trọ 379 Nguyễn Thị Tú, Bình Tân">
            <img
              src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2025/06/07/cebcr1dkjpg_1749282488.png"
              alt="Phòng trọ 379 Nguyễn Thị Tú, Bình Tân"
              className="w-full h-full object-cover rounded-[0.4rem]"
            />
          </Link>
          <div className="absolute bottom-[5px] left-[5px] flex items-center py-[0.2rem] px-[0.3rem] rounded-[0.3rem] text-white text-[12px]">
            <IoCamera />
            14
          </div>
        </figure>
        <div className="py-[0.7rem]">
          <Link
            to={"/"}
            title="Phòng trọ 379 Nguyễn Thị Tú, Bình Tân"
            className="text-[#0e4db3] line-clamp-2 font-normal mb-2 text-[14px]"
          >
            Phòng trọ 379 Nguyễn Thị Tú, Bình Tân
          </Link>
          <div className="mb-2 overflow-hidden text-ellipsis white">
            <span className="text-green-500 font-semibold text-[14px]">
              3 triệu/tháng
            </span>
            <span className="w-[3px] h-[3px] inline-block rounded-[50%] bg-[#aaa] mr-[4px] mb-[3px] ml-[5px]"></span>
            <span className="text-[13px]">
              20 m<sup>2</sup>
            </span>
          </div>
          <Link to={"/"} className="line-clamp-1 text-[13px]">
            Bình Tân, Hồ Chí Minh
          </Link>
        </div>
      </div>
    </div>
  );
};
