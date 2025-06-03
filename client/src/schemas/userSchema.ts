import { z } from "zod";

export const infoPersonSchema = z.object({
  fullName: z.string(),
  phoneNumber: z.string(),
  email: z.string(),
  avatar: z.instanceof(File).optional(),
});

export const changPasswordSchema = z.object({
  oldPassword: z
    .string()
    .nonempty({ message: "Mật khẩu cũ không được để trống" }),
  newPassword: z
    .string()
    .nonempty({ message: "Mật khẩu mới không được để trống" }),
  confirmPassword: z
    .string()
    .nonempty({ message: "Xác nhận mật khẩu không được để trống" }),
});
