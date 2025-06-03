import { Sidebar } from "@/components/common/Sidebar";
import { Outlet } from "react-router-dom";

export const OwnerLayout = () => {
  return (
    <div className="flex flex-wrap">
      <Sidebar />
      <Outlet />
    </div>
  );
};
