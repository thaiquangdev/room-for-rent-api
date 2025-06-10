import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { FeaturedPost } from "@/components/common/FeaturedPost";
import { Vip1Posts } from "@/components/common/Vip1Posts";
import { Vip2Post } from "@/components/common/Vip2Post";
import { NormalPost } from "@/components/common/NormalPost";
import { priceQueryDatas } from "@/utils/constrants";
import { IoIosArrowForward } from "react-icons/io";

export const HomePage = () => {
  return (
    <main className="bg-[#fdf4ec]">
      <div className="2xl:max-w-[1020px] xl:max-w-[980px] lg:py-[1rem] mx-auto px-6 ">
        <div className="flex flex-wrap">
          <div className="lg:w-8/12 md:w-9/12">
            <header className="mt-2 mb-4">
              <h1 className="xl:text-[1.5rem] leading-[1.5] font-medium mb-2">
                Kênh thông tin Phòng Trọ số 1 Việt Nam
              </h1>
              <p className="text-[0.95rem]">Có 73.034 Tin đăng cho thuê</p>
            </header>
            <div className="mt-6">
              <div className="flex justify-between uppercase text-[0.8rem] items-center font-medium">
                Tỉnh thành
              </div>
              <ul className="flex overflow-x-auto py-[0.35rem] items-center">
                <li className="mr-2 w-auto bg-white">
                  <Link
                    title="Cho thuê phòng trọ Hồ Chí Minh"
                    to={"/tinh-thanh/ho-chi-minh"}
                    className="block rounded-md text-[0.85rem] py-[0.35rem] px-[0.7rem] text-left"
                  >
                    Phòng trọ{" "}
                    <span className="font-medium text-[1rem] block">
                      Hồ Chí Minh
                    </span>
                  </Link>
                </li>
                <li className="w-auto">
                  <Button className="rounded-md h-[50px] text-[0.85rem] bg-white text-black">
                    Tất cả
                    <IoMdArrowDropright />
                  </Button>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-2">
              <NavLink
                to={"/"}
                className={({ isActive }) => {
                  return `inline-flex pb-1 mr-6 font-medium text-[1.07rem] ${
                    isActive ? "border-b border-black" : ""
                  }`;
                }}
              >
                Đề xuất
              </NavLink>
              <NavLink
                to={"/?orderby=moi-nhat"}
                className={({ isActive }) => {
                  return `inline-flex pb-1 mr-6 font-medium text-[1.07rem] ${
                    isActive ? "border-b border-black" : ""
                  }`;
                }}
              >
                Mới đăng
              </NavLink>
              <NavLink
                to={"/?orderby=video"}
                className={({ isActive }) => {
                  return `inline-flex pb-1 mr-6 font-medium text-[1.07rem] ${
                    isActive ? "border-b border-black" : ""
                  }`;
                }}
              >
                Đề xuất
              </NavLink>
            </div>
            <div>
              <FeaturedPost />
              <Vip1Posts />
              <Vip2Post />
              <NormalPost />
            </div>
          </div>
          <div className="lg:w-4/12 md:w-9/12">
            <div className="bg-white shadow-sm rounded p-4 mb-4">
              <div className="text-[15px] font-medium mb-1">
                Xem theo khoảng giá
              </div>
              <ul className="flex flex-wrap text-[14px]">
                {priceQueryDatas.map((item) => {
                  return (
                    <li className="flex items-center w-[50%]" key={item.id}>
                      <IoIosArrowForward className="text-orange-500" />
                      <Link className="text-blue-600" to={`/${item.path}`}>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
