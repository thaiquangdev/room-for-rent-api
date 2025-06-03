import { navDatas } from "@/utils/constrants";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="mx-auto px-6 2xl:max-w-[1020px] xl:max-w-[980px] lg:max-w-[980px] lg:block hidden">
      <nav className="h-[40px]">
        <ul className="flex items-center h-full">
          {navDatas.map((item) => {
            return (
              <li className="mr-6 h-full" key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center h-full hover hover:text-orange-500 text-[14px] ${
                      isActive ? "text-orange-500" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
