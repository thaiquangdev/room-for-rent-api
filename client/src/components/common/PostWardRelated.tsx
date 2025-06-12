import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export const PostWardRelated = () => {
  return (
    <div className="mt-[3rem] lg:w-full md:w-[75%] px-[10px]">
      <div className="bg-white shadow-sm rounded p-6 mb-4">
        <div className="font-medium text-[18px] mb-2">
          Xem theo quận huyện khác
        </div>
        <ul className="flex flex-wrap">
          <li className="relative flex items-center lg:w-[25%] md:w-4/12 sm:w-[50%]">
            <IoIosArrowForward className="text-orange-500" />
            <Link
              to={"/tinh-thanh/ho-chi-minh"}
              title="Cho thuê phòng trọ Quận 1, Hồ Chí Minh"
              className="line-clamp-1 py-1 text-blue-500 text-[14px]"
            >
              Phòng trọ Quận 1
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
