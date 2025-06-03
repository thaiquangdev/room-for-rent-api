import { registerSchema } from "@/schemas/authSchema";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";

export const RegisterPage = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
      role: "",
    },
  });

  const handleRegister = (values: z.infer<typeof registerSchema>) => {
    console.log(values);
  };
  return (
    <main>
      <div className="2xl:max-w-[1020px] xl:max-w-[980px] lg:my-[3rem] mx-auto px-6">
        <div className="flex justify-center flex-wrap">
          <div className="lg:w-7/12 md:w-10/12 w-full max-w-full">
            <div className="lg:p-[3rem] sm:p-6 py-6 rounded-2xl">
              <div className="flex items-center mb-[3rem] justify-between">
                <NavLink
                  to="/dang-nhap"
                  className={({ isActive }) =>
                    `xl:text-[1.3rem] text-[1.3rem] text-center pb-4 w-full border-b-2 ${
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
                    `xl:text-[1.3rem] text-[1.3rem] text-center pb-4 w-full border-b-2 ${
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
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Họ và tên</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nhập họ và tên của bạn"
                            {...field}
                          />
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
                          <Input placeholder="Nhập email của bạn" {...field} />
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
                          <Input
                            placeholder="Nhập số điện thoại của bạn"
                            {...field}
                          />
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
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loại tài khoản</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex gap-x-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="renter" id="r1" />
                              <Label htmlFor="r1">Tìm kiếm</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="owner" id="r2" />
                              <Label htmlFor="r2">Chính chủ</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="broker" id="r3" />
                              <Label htmlFor="r3">Môi giới</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full mt-5 text-[18px] font-medium"
                  >
                    Đăng ký
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
