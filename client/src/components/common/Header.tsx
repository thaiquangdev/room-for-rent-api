import { Link } from "react-router-dom";
import logo from "@/assets/logo-phongtro.svg";
import { FaLocationDot, FaRegPenToSquare } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { IoMdHeartEmpty, IoIosMenu } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import { IoLogInOutline } from "react-icons/io5";
import { Navbar } from "@/components/common/Navbar";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-[1021]">
      <div className="mx-auto px-6 2xl:max-w-[1320px] xl:max-w-[1140px]">
        <div className="flex items-center justify-between border-b">
          <div className="flex items-center">
            <Link to="/" className="">
              <img
                src={logo}
                className="w-[190px] h-[60px] object-contain"
                alt="logo"
              />
            </Link>
            <div className="md:flex hidden ml-6">
              <div className="w-[350px] h-[45px] flex items-center px-4">
                <div className="w-full">
                  <div className="flex items-center">
                    <div className="bg-[#f3f6f7] rounded-xl text-left px-4 w-full h-[35px] flex items-center cursor-text">
                      <FaLocationDot size={12} className="mr-2" />
                      <span className="text-gray-600 font-normal text-[14px]">
                        Tìm theo khu vực
                      </span>
                    </div>
                    <Button
                      variant={"outline"}
                      className="h-[35px] ml-[5px] cursor-pointer rounded-2xl"
                    >
                      <CiFilter />
                      Bộ lọc
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {/* Desktop */}
            <div className="lg:flex items-center hidden">
              <Link
                to="/tin-da-luu"
                className="flex items-center text-[15px] font-normal hover:bg-[#f7f9fb] py-[5px] px-[10px] rounded-xl"
              >
                <IoMdHeartEmpty size={20} className="mr-2" />
                Tin đã lưu
              </Link>
              <Link
                to="/dang-ky"
                className="flex items-center text-[15px] font-normal hover:bg-[#f7f9fb] py-[5px] px-[10px] rounded-xl"
              >
                <FiUserPlus size={20} className="mr-2" />
                Đăng ký
              </Link>
              <Link
                to="/dang-nhap"
                className="flex items-center text-[15px] font-normal hover:bg-[#f7f9fb] py-[5px] px-[10px] rounded-xl"
              >
                <IoLogInOutline size={20} className="mr-2" />
                Đăng nhập
              </Link>
              <Link
                to="/dang-tin"
                className="flex items-center text-[15px] text-white font-normal bg-[#ff5722] hover:bg-[#e3511e] ml-5 py-[5px] px-[10px] rounded-xl"
              >
                <FaRegPenToSquare size={20} className="mr-2" />
                Đăng tin
              </Link>
            </div>
            {/* Mobile */}
            <div className="lg:hidden font-normal text-[14px] flex items-center cursor-pointer">
              <IoIosMenu size={25} className="mr-2" />
              <span>Danh mục</span>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};
