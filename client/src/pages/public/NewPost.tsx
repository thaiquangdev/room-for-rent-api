import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { newPostSchema } from "@/schemas/postSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { FaArrowRightLong } from "react-icons/fa6";

interface Section {
  id: string;
  label: string;
}

export const NewPost = () => {
  const sections: Section[] = [
    { id: "khu_vuc", label: "Khu vực" },
    { id: "mo_ta", label: "Thông tin mô tả" },
    { id: "hinh_anh", label: "Hình ảnh" },
    { id: "video", label: "Video" },
    { id: "lien_he", label: "Thông tin liên hệ" },
  ];

  const highlightOptions = [
    "Đầy đủ nội thất",
    "Có gác",
    "Có kệ bếp",
    "Có máy lạnh",
    "Có máy giặt",
    "Có tủ lạnh",
    "Có thang máy",
    "Không chung chủ",
    "Giờ giấc tự do",
    "Có bảo vệ 24/24",
    "Có hầm để xe",
  ];

  const activeSection = useScrollSpy(sections.map((s) => s.id));

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof newPostSchema>>({
    resolver: zodResolver(newPostSchema),
    defaultValues: {
      category: "",
      conscious: "",
      district: "",
      ward: "",
      road: "",
      houseNumber: "",
      postName: "",
      description: "",
      price: 0,
      priceUnit: "đồng/tháng",
      area: 0,
      highlights: [],
      images: [],
      videoUrl: "",
      videoFile: undefined,
      fullName: "",
      phoneNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof newPostSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <main className="ml-auto xl:w-10/12">
      <div className="sticky top-[45px] lg:px-[3rem] pt-4 z-[1020] bg-white">
        <div className="flex items-center">
          <h1 className="xl:text-[1.75rem] whitespace-nowrap font-semibold">
            Đăng tin cho thuê
          </h1>
        </div>
        <nav className="flex flex-wrap">
          <ul className="flex flex-wrap">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`pb-4 pt-2 mr-6 text-[14px] ${
                    activeSection === section.id ? "text-red-500 font-bold" : ""
                  }`}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Sections */}
      <div className="lg:pt-6 lg:px-[3rem]">
        <div className="flex justify-center flex-wrap">
          <div className="lg:w-8/12 md:w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div id="khu_vuc">
                  <div className="bg-white shadow-sm p-6 mb-6">
                    <div className="font-medium text-[1.25rem] mb-4">
                      Loại chuyên mục
                    </div>
                    <div className="flex flex-wrap">
                      <div className="md:w-[50%] w-full">
                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Loại chuyên mục (*)</FormLabel>
                              <FormControl>
                                <Select
                                  value={field.value}
                                  onValueChange={field.onChange}
                                >
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="-- Chọn loại chuyên mục --" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Phòng trọ, nhà trọ">
                                      Phòng trọ, nhà trọ
                                    </SelectItem>
                                    <SelectItem value="Nhà thuê nguyên căn">
                                      Nhà thuê nguyên căn
                                    </SelectItem>
                                    <SelectItem value="Cho thuê căn hộ">
                                      Cho thuê căn hộ
                                    </SelectItem>
                                    <SelectItem value="Cho thuê căn hộ mini">
                                      Cho thuê căn hộ mini
                                    </SelectItem>
                                    <SelectItem value="Cho thuê căn hộ dịch vụ">
                                      Cho thuê căn hộ dịch vụ
                                    </SelectItem>
                                    <SelectItem value="Tìm người ở ghép">
                                      Tìm người ở ghép
                                    </SelectItem>
                                    <SelectItem value="Cho thuê mặt bằng văn phòng">
                                      Cho thuê mặt bằng văn phòng
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white shadow-sm p-6 mb-6">
                    <div className="font-medium text-[1.25rem] mb-4">
                      Khu vực
                    </div>
                    <div className="flex flex-wrap mx-[-8px]">
                      <div className="sm:w-[50%] w-full px-2">
                        <div className="mb-4">
                          <FormField
                            control={form.control}
                            name="conscious"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Tỉnh/Thành phố (*)</FormLabel>
                                <FormControl>
                                  <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                  >
                                    <SelectTrigger className="w-full">
                                      <SelectValue placeholder="-- Chọn Tỉnh/TP --" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Hà Nội">
                                        Hà Nội
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <div className="sm:w-[50%] w-full px-2">
                        <div className="mb-4">
                          <FormField
                            control={form.control}
                            name="district"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Quận/Huyện (*)</FormLabel>
                                <FormControl>
                                  <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                  >
                                    <SelectTrigger className="w-full">
                                      <SelectValue placeholder="-- Chọn Quận/Huyện --" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Hà Nội">
                                        Hà Nội
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <div className="sm:w-[50%] w-full px-2">
                        <div className="mb-4">
                          <FormField
                            control={form.control}
                            name="ward"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phường/Xã (*)</FormLabel>
                                <FormControl>
                                  <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                  >
                                    <SelectTrigger className="w-full">
                                      <SelectValue placeholder="-- Chọn Phường/Xã --" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Hà Nội">
                                        Hà Nội
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <div className="sm:w-[50%] w-full px-2">
                        <div className="mb-4">
                          <FormField
                            control={form.control}
                            name="road"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Đường/Phố (*)</FormLabel>
                                <FormControl>
                                  <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                  >
                                    <SelectTrigger className="w-full">
                                      <SelectValue placeholder="-- Chọn Đường/Phố --" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Hà Nội">
                                        Hà Nội
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <div className="sm:w-[50%] w-full px-2">
                        <div className="mb-4">
                          <FormField
                            control={form.control}
                            name="houseNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Số nhà (*)</FormLabel>
                                <FormControl>
                                  <Input placeholder="Nhập số nhà" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white shadow-sm p-6 mb-6">
                    <div className="font-medium text-[1.25rem] mb-4">
                      Bản đồ
                    </div>
                  </div>
                </div>
                <div id="mo_ta">
                  <div className="bg-white shadow-sm p-6 mb-6">
                    <div className="font-medium text-[1.25rem] mb-4">
                      Thông tin mô tả
                    </div>
                    <div className="flex flex-wrap mx-[-8px]">
                      <div className="w-full px-2">
                        <div className="mb-4">
                          <FormField
                            control={form.control}
                            name="postName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Tiêu đề (*)</FormLabel>
                                <FormControl>
                                  <Textarea {...field} />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <p className="text-[0.8rem] mt-2 text-gray-800">
                            (Tối thiểu 30 ký tự , tối đa 100 ký tự)
                          </p>
                        </div>
                      </div>
                      <div className="w-full px-2">
                        <div className="mb-4">
                          <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nội dung mô tả (*)</FormLabel>
                                <FormControl>
                                  <Textarea rows={10} {...field} />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <p className="text-[0.8rem] mt-2 text-gray-800">
                            (Tối thiểu 50 ký tự , tối đa 5000 ký tự)
                          </p>
                        </div>
                      </div>
                      <div className="md:w-7/12 w-full px-2">
                        <div className="mb-4">
                          <div className="flex items-center">
                            <FormField
                              control={form.control}
                              name="price"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Giá cho thuê (*)</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      {...field}
                                      onChange={(e) =>
                                        field.onChange(Number(e.target.value))
                                      }
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="priceUnit"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Select
                                      value={field.value}
                                      onValueChange={field.onChange}
                                    >
                                      <SelectTrigger className="w-full mt-[22px]">
                                        <SelectValue placeholder="--  --" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="đồng/tháng">
                                          đồng/tháng
                                        </SelectItem>
                                        <SelectItem value="đồng/m2/tháng">
                                          đồng/m2/tháng
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <p className="text-[0.8rem] mt-2 text-gray-800">
                            Nhập đầy đủ số, ví dụ 1 triệu thì nhập 1000000
                          </p>
                        </div>
                      </div>
                      <div className="md:w-7/12 w-full px-2">
                        <div className="mb-4">
                          <div className="flex items-center">
                            <FormField
                              control={form.control}
                              name="area"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Diện tích (*)</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      {...field}
                                      onChange={(e) =>
                                        field.onChange(Number(e.target.value))
                                      }
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white shadow-sm p-6 mb-6">
                    <div className="font-medium text-[1.25rem] mb-4">
                      Đặc điểm nổi bật
                    </div>

                    <FormItem>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {highlightOptions.map((option) => (
                          <FormField
                            key={option}
                            control={form.control}
                            name="highlights"
                            render={({ field }) => (
                              <FormItem className="flex items-center space-x-2">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(option)}
                                    onCheckedChange={(checked) => {
                                      const currentValue = field.value || []; // đảm bảo luôn là array
                                      const newValue = checked
                                        ? [...currentValue, option]
                                        : currentValue.filter(
                                            (item) => item !== option
                                          );
                                      field.onChange(newValue);
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  {option}
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  </div>
                </div>
                <div id="hinh_anh">
                  <div className="bg-white shadow-sm rounded p-6 mb-6">
                    <div className="font-medium text-[1.25rem] mb-4">
                      Hình ảnh
                    </div>
                    <div className="mb-4">
                      <FormItem>
                        <FormField
                          control={form.control}
                          name="images"
                          render={({ field }) => (
                            <FormItem>
                              <label
                                htmlFor="imageUpload"
                                className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition"
                              >
                                <svg
                                  className="w-12 h-12 text-gray-400 mb-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 16l4-4a4 4 0 015.656 0L17 16m0 0l4-4m-4 4V4m0 12H4"
                                  />
                                </svg>
                                <span className="text-gray-600">
                                  {selectedFiles.length > 0
                                    ? `${selectedFiles.length} ảnh đã chọn`
                                    : "Chọn ảnh (tối đa 20 ảnh, mỗi ảnh ≤ 10MB)"}
                                </span>
                                <Input
                                  id="imageUpload"
                                  type="file"
                                  multiple
                                  accept="image/*"
                                  className="hidden"
                                  onChange={(e) => {
                                    const files = Array.from(
                                      e.target.files || []
                                    );
                                    setSelectedFiles(files);
                                    field.onChange(files);
                                  }}
                                />
                              </label>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </FormItem>
                    </div>
                    <div className="text-[0.8rem] mb-4 text-gray-800">
                      <ul>
                        <li>• Tải lên tối đa 20 ảnh trong một bài đăng</li>
                        <li>• Dung lượng ảnh tối đa 10MB</li>
                        <li>
                          • Hình ảnh phải liên quan đến phòng trọ, nhà cho thuê
                        </li>
                        <li>• Không chèn văn bản, số điện thoại lên ảnh</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="video">
                  <div className="bg-white shadow-sm p-6 mb-6">
                    <div className="font-medium text-[1.25rem] mb-4">Video</div>

                    {/* VIDEO URL */}
                    <FormField
                      control={form.control}
                      name="videoUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Video Link (Youtube/Tiktok)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://..." {...field} />
                          </FormControl>
                          <p className="text-sm mt-2">
                            <strong>Lưu ý:</strong> Bạn có thể chọn video từ
                            Youtube hoặc Tiktok để hiển thị trên bài viết của
                            mình.
                            <br />
                            <span className="font-semibold">
                              https://www.youtube.com/watch?v=xxxxxxxxxxx
                            </span>
                            <br />
                            <span className="font-semibold">
                              https://www.tiktok.com/@username/video
                            </span>
                          </p>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="text-center my-4 font-medium">Hoặc</div>

                    {/* VIDEO FILE */}
                    <FormField
                      control={form.control}
                      name="videoFile"
                      render={({
                        field: { value, onChange, ...fieldProps },
                      }) => (
                        <FormItem>
                          <FormLabel>Tải Video từ thiết bị</FormLabel>
                          <FormControl>
                            <div>
                              <label
                                htmlFor="video-upload"
                                className="cursor-pointer w-full h-40 border-2 border-dashed border-blue-400 bg-blue-50 flex flex-col items-center justify-center rounded-lg"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-12 w-12 text-blue-500 mb-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 16l4-4m0 0l4-4m-4 4h12"
                                  />
                                </svg>
                                <span className="text-blue-600 font-semibold">
                                  Chọn file video
                                </span>
                                {value && (
                                  <p className="text-sm mt-2 text-gray-500">
                                    File đã chọn: <strong>{value.name}</strong>
                                  </p>
                                )}
                              </label>
                              <input
                                id="video-upload"
                                type="file"
                                accept="video/mp4, video/quicktime"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  onChange(file);
                                }}
                                {...fieldProps}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div id="lien_he">
                  <div className="bg-white shadow-sm rounded p-6 mb-6">
                    <div className="font-medium text-[1.25rem] mb-4">
                      Thông tin liên hệ
                    </div>
                    <div className="flex flex-wrap mx-[-8px]">
                      <div className="sm:w-[50%] w-full px-2">
                        <div className="mb-4">
                          <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Họ tên</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <div className="sm:w-[50%] w-full px-2">
                        <div className="mb-4">
                          <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Số điện thoại</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button type="submit" className="w-full text-[16px] p-5">
                  Tiếp tục
                  <FaArrowRightLong />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};
