import { NavLink } from "react-router-dom";

export const ChangePasswordPage = () => {
  return (
    <main className="ml-auto xl:w-10/12">
      <div className="sticky top-[45px] lg:px-[3rem] pt-4 z-[1020] bg-white">
        <div className="flex items-center">
          <h1 className="xl:text-[1.75rem] whitespace-nowrap font-semibold">
            Quản lý tài khoản
          </h1>
        </div>
        <nav className="flex flex-wrap">
          <NavLink
            className={({ isActive }) => {
              return `text-gray-800 text-[15px] pb-4 pt-2 mr-6 ${
                isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
              }`;
            }}
            to={"/quan-ly/cap-nhat-thong-tin-ca-nhan"}
          >
            Thông tin cá nhân
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return `text-gray-800 text-[15px] pb-4 pt-2 mr-6 ${
                isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
              }`;
            }}
            to={"/quan-ly/cap-nhat-thong-tin-ca-nhan/doi-mat-khau"}
          >
            Đổi mật khẩu
          </NavLink>
        </nav>
      </div>
      {/* Sections */}
      <div className="lg:pt-6 lg:px-[3rem]">
        <div className="lg:w-[50%] md:w-8/12"></div>
      </div>
    </main>
  );
};
