import { Link, NavLink } from "react-router-dom";
import { CiCreditCard1 } from "react-icons/ci";
import { sidebarDatas } from "@/utils/constrants";

export const Sidebar = () => {
  return (
    <aside className="xl:block xl:w-2/12 hidden h-full shadow-sm overflow-auto fixed right-0 left-0 z-[1030]">
      <div className="flex items-start h-full flex-col">
        <div className="flex items-start w-full pb-4 px-4 pt-6">
          <div className="shrink-0">
            <img
              src="https://phongtro123.com/images/default-user.svg"
              alt="avatar"
              className="w-[50px] h-[50px] max-w-full max-h-full object-cover border border-[#ddd] rounded-full p-[0.2rem]"
            />
          </div>
          <div className="grow pl-1 ml-2">
            <span className="line-clamp-1 overflow-hidden whitespace-normal font-medium">
              Thái Mai Quang
            </span>
            <span className="block text-[1rem]">0857176357</span>
          </div>
        </div>
        <div className="p-4 pt-0 w-full">
          <div className="flex items-center justify-between rounded-lg p-[0.7rem] border bg-[#fffae8] border-[#ffe69c]">
            <div>
              <p className="text-[0.875em]">Số dư tài khoản</p>
              <p className="text-[1rem] font-bold">0</p>
            </div>
            <div>
              <Link
                to={"/quan-ly/nap-tien"}
                className="flex items-center justify-center text-[0.875rem] bg-[#ffc107] rounded-[50rem] p-1 gap-1"
              >
                <CiCreditCard1 size={20} />
                Nạp tiền
              </Link>
            </div>
          </div>
        </div>
        <ul className="pb-[3rem] px-2 mt-4 grow w-full">
          {sidebarDatas.map((item) => {
            return (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex p-2 text-[15px] hover:bg-[#F8F9FA] ${
                      isActive ? "text-[15px] font-bold bg-[#F8F9FA]" : ""
                    }`
                  }
                >
                  <div className="flex items-center">
                    {<item.icon className="mr-4" size={20} />} {item.name}
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
