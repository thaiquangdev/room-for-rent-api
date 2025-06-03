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
import { infoPersonSchema } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import { z } from "zod";

export const InfoPersonPage = () => {
  const form = useForm<z.infer<typeof infoPersonSchema>>({
    resolver: zodResolver(infoPersonSchema),
    defaultValues: {
      fullName: "Thái Mai Quang",
      email: "thaiquangqt2003@gmail.com",
      phoneNumber: "0857176357",
      avatar: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof infoPersonSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

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
        <div className="flex flex-wrap justify-center">
          <div className="lg:w-[50%] md:w-8/12">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="flex mb-4 items-center">
                  <div className="shrink-0">
                    <div className="rounded-full p-1 border">
                      <img
                        src="https://phongtro123.com/images/default-user.svg"
                        alt="avatar"
                        className="w-[70px] h-[70px] object-contain"
                      />
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <span className="block font-medium text-[1.25rem]">
                      Thái Mai Quang
                    </span>
                    0857176357
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="avatar"
                  render={() => (
                    <FormItem>
                      <FormLabel>Đổi ảnh đại diện</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            form.setValue("avatar", file); // Cập nhật giá trị vào form
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Số điện thoại</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tên liên hệ</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" disabled {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Link
                  className="block my-2 text-[16px]"
                  to={"/quan-ly/cap-nhat-thong-tin-ca-nhan/doi-mat-khau"}
                >
                  Đổi mật khẩu
                </Link>
                <Button type="submit" className="p-5 w-full">
                  Cập nhật
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};
