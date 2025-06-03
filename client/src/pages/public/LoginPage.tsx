import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import type { z } from "zod";

export const LoginPage = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleRegister = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
  };

  return (
    <main>
      <div className="2xl:max-w-[1020px] xl:max-w-[980px] lg:my-[3rem] mx-auto px-6">
        <div className="flex justify-center flex-wrap">
          <div className="lg:w-7/12 md:w-10/12 w-full max-w-full px-6">
            <div className="lg:p-[3rem] sm:p-6 py-6 rounded-2xl">
              <div className="flex items-center mb-[3rem] justify-between">
                <NavLink
                  to="/dang-nhap"
                  className={({ isActive }) =>
                    `xl:text-[1.5rem] text-[1.7rem] text-center pb-4 w-full border-b-2 ${
                      isActive
                        ? "text-primary border-orange-500 font-semibold"
                        : "text-gray-700 border-b font-light"
                    }`
                  }
                >
                  Đăng nhập
                </NavLink>

                <NavLink
                  to="/dang-ky"
                  className={({ isActive }) =>
                    `xl:text-[1.5rem] text-[1.7rem] text-center pb-4 w-full border-b-2 ${
                      isActive
                        ? "text-primary border-orange-500 font-semibold"
                        : "text-gray-700 border-b font-light"
                    }`
                  }
                >
                  Tạo tài khoản mới
                </NavLink>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleRegister)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Nhập email của bạn" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mật khẩu</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Nhập mật khẩu của bạn"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Link
                    to="/quen-mat-khau"
                    className="underline text-blue-600 text-[14px]"
                  >
                    Bạn quên mật khẩu?
                  </Link>

                  <Button
                    type="submit"
                    className="w-full mt-5 text-[18px] font-medium"
                  >
                    Đăng nhập
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
