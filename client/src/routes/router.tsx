import { AuthLayout } from "@/components/layouts/public/AuthLayout";
import MainLayout from "@/components/layouts/public/MainLayout";
import { OwnerLayout } from "@/components/layouts/public/OwnerLayout";
import { ChangePasswordPage } from "@/pages/public/ChangePasswordPage";
import { DepositInfoPage } from "@/pages/public/DepositInfoPage";
import { DepositPage } from "@/pages/public/DepositPage";
import { HomePage } from "@/pages/public/HomePage";
import { InfoPersonPage } from "@/pages/public/InfoPersonPage";
import { LoginPage } from "@/pages/public/LoginPage";
import { NewPost } from "@/pages/public/NewPost";
import { RegisterPage } from "@/pages/public/RegisterPage";
import { pathName } from "@/utils/pathName";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: pathName.public.layout,
    element: <MainLayout />,
    children: [
      {
        path: pathName.public.home,
        element: <HomePage />,
      },
      {
        path: pathName.public.owner,
        element: <OwnerLayout />,
        children: [
          {
            path: pathName.public.newPost,
            element: <NewPost />,
          },
          {
            path: pathName.public.deposit,
            element: <DepositPage />,
          },
          {
            path: pathName.public.depositInfo,
            element: <DepositInfoPage />,
          },
          {
            path: pathName.public.infoPerson,
            element: <InfoPersonPage />,
          },
          {
            path: pathName.public.changePassword,
            element: <ChangePasswordPage />,
          },
        ],
      },
    ],
  },
  {
    path: pathName.public.layout,
    element: <AuthLayout />,
    children: [
      {
        path: pathName.public.login,
        element: <LoginPage />,
      },
      {
        path: pathName.public.register,
        element: <RegisterPage />,
      },
    ],
  },
]);
