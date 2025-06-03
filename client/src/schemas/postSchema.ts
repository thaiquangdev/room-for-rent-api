import { z } from "zod";

export const newPostSchema = z.object({
  category: z
    .string()
    .nonempty({ message: "Loại chuyên mục không được để trống" }),
  conscious: z
    .string()
    .nonempty({ message: "Tỉnh/Thành phố không được để trống" }),
  district: z.string().nonempty({ message: "Quận/Huyện không được để trống" }),
  ward: z.string().nonempty({ message: "Phường/Xã không được để trống" }),
  road: z.string().nonempty({ message: "Đường/Phố không được để trống" }),
  houseNumber: z.string().nonempty({ message: "Số nhà không được để trống" }),
  postName: z
    .string()
    .nonempty({ message: "Tên bài đăng không được để trống" })
    .min(30, { message: "Tên bài đăng tối thiểu là 30 ký tự" })
    .max(100, { message: "Tên bài đăng tối đa 100 ký tự" }),
  description: z
    .string()
    .nonempty({ message: "Mô tả không được được để trống" })
    .min(50, { message: "Mô tả tối thiểu là 50 ký tự" })
    .max(5000, { message: "Mô tả tối đa 5000 ký tự" }),
  price: z.number().positive({ message: "Giá phải lớn hơn 0" }),
  priceUnit: z.string().nonempty({ message: "Đơn vị giá không được để trống" }),
  area: z.number().positive({ message: "Diện tích phải lớn hơn 0" }),
  highlights: z.array(z.string()).optional(), // giả sử mảng string
  images: z
    .array(
      z
        .instanceof(File)
        .refine((file) => file.size <= 10 * 1024 * 1024, {
          message: "Ảnh tối đa 10MB",
        })
        .refine(
          (file) =>
            ["image/jpeg", "image/png", "image/webp"].includes(file.type),
          {
            message: "Chỉ chấp nhận ảnh jpg, png, webp",
          }
        )
    )
    .max(20, { message: "Tối đa 20 ảnh" }),
  videoUrl: z
    .string()
    .url()
    .refine((url) => /youtube\.com|youtu\.be|tiktok\.com/.test(url), {
      message: "Chỉ chấp nhận link YouTube hoặc TikTok",
    })
    .optional()
    .or(z.literal("")), // cho phép rỗng

  videoFile: z
    .instanceof(File)
    .refine((file) => file.size <= 100 * 1024 * 1024, {
      message: "File tối đa 100MB",
    })
    .refine((file) => ["video/mp4", "video/quicktime"].includes(file.type), {
      message: "Chỉ chấp nhận file mp4 hoặc mov",
    })
    .optional(),
  fullName: z.string(),
  phoneNumber: z.string(),
});
