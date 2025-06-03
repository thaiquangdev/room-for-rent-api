import { z } from "zod";

export const registerSchema = z.object({
  fullName: z
    .string()
    .min(10, {
      message: "Họ và tên tối thiểu là 10 ký tự",
    })
    .max(100, {
      message: "Họ và tên tối đa là 100 ký tự",
    })
    .nonempty({ message: "Họ và tên không được để trống" }),
  email: z
    .string()
    .email({ message: "Email không đúng định dạng" })
    .nonempty({ message: "Email không được để trống" }),
  phoneNumber: z
    .string()
    .length(10, {
      message: "Số điện thoại chỉ có 10 chữ số",
    })
    .nonempty({ message: "Số điện thoại không được để trống" }),
  password: z
    .string()
    .min(6, {
      message: "Mật khẩu tối thiểu là 6 ký tự",
    })
    .max(50, {
      message: "Mật khẩu tối đa là 50 ký tự",
    })
    .nonempty({ message: "Mật khẩu không được để trống" }),
  role: z.string().nonempty({ message: "Loại tài khoản không được để trống" }),
});

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Email không đúng định dạng" })
    .nonempty({ message: "Email không được để trống" }),
  password: z.string().nonempty({ message: "Mật khẩu không đúng định dạng" }),
});
