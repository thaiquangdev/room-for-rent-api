import { Link, NavLink } from "react-router-dom";

export const DepositPage = () => {
  return (
    <main className="ml-auto xl:w-10/12">
      <div className="sticky top-[45px] lg:px-[3rem] pt-4 z-[1020] bg-white">
        <div className="flex items-center">
          <h1 className="xl:text-[1.75rem] whitespace-nowrap font-semibold">
            Quản lý giao dịch
          </h1>
        </div>
        <nav className="flex flex-wrap">
          <NavLink
            className={({ isActive }) => {
              return `text-gray-800 text-[15px] pb-4 pt-2 mr-6 ${
                isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
              }`;
            }}
            to={"/quan-ly/nap-tien"}
          >
            Nạp tiền vào tài khoản
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return `text-gray-800 text-[15px] pb-4 pt-2 mr-6 ${
                isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
              }`;
            }}
            to={"/quan-ly/lich-su-nap-tien"}
          >
            Lịch sử nạp tiền
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return `text-gray-800 text-[15px] pb-4 pt-2 mr-6 ${
                isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
              }`;
            }}
            to={"/quan-ly/lich-su-thanh-toan"}
          >
            Lịch sử thanh toán
          </NavLink>
        </nav>
      </div>

      {/* Sections */}
      <div className="lg:pt-6 lg:px-[3rem]">
        <div className="flex flex-wrap justify-center">
          <div className="lg:w-[50%] md:w-8/12">
            <div>
              <div className="text-[0.85rem] border-l-2 border-[#0dcaf0] bg-[#9eeaf9] p-4 mb-4 rounded-md">
                <p className="font-bold mb-1 text-[12px]">Ưu đãi nạp tiền:</p>
                <p className="mb-1 text-[12px]">
                  • Nạp từ 100.000 đến dưới 1.000.000 tặng 10%
                </p>
                <p className="mb-1 text-[12px]">
                  • Nạp từ 1.000.000 đến dưới 2.000.000 tặng 20%
                </p>
                <p className="mb-1 text-[12px]">
                  • Nạp từ 2.000.000 trở lên tặng 25%
                </p>
              </div>
            </div>
            <div className="mt-6 pt-2">
              <div className="font-medium text-[1.25rem] mb-4">
                Chọn phương thức nạp tiền
              </div>
              <ul>
                <li className="mb-2">
                  <Link
                    to={"/quan-ly/nap-tien/momo"}
                    className="h-[55px] flex items-center rounded-md px-4 py-2 justify-between font-medium w-full shadow-sm"
                  >
                    <div className="grow">Ví điện tử MOMO</div>
                    <img
                      src="https://phongtro123.com/images/bi-momo.svg"
                      alt="momom icon"
                      className="w-[40px] h-[40px] object-contain"
                    />
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/quan-ly/nap-tien/zalopay"}
                    className="h-[55px] flex items-center rounded-md px-4 py-2 justify-between font-medium w-full shadow-sm"
                  >
                    <div className="grow">Ví điện tử ZALOPAY</div>
                    <div className="border border-[#0d6efd] flex h-[40px] w-[40px] items-center justify-center rounded-sm">
                      <img
                        src="https://phongtro123.com/images/zalopay-new.png"
                        alt="zalopay icon"
                        className="w-[25px] h-[25px] object-contain"
                      />
                    </div>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/quan-ly/nap-tien/vnpay"}
                    className="h-[55px] flex items-center rounded-md px-4 py-2 justify-between font-medium w-full shadow-sm"
                  >
                    <div className="grow">Ví điện tử VNPAY</div>
                    <img
                      src="https://phongtro123.com/images/bi-momo.svg"
                      alt="momom icon"
                      className="w-[40px] h-[40px] object-contain"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
