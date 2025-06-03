import { Header } from "@/components/common/Header";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
