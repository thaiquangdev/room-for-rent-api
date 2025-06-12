import { ImagesPost } from "@/components/common/ImagesPost";
import { Link } from "react-router-dom";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { IoMdHeartEmpty } from "react-icons/io";
import { FeaturedPostDetail } from "@/components/common/FeaturedPostDetail";
import { PostRelated } from "@/components/common/PostRelated";
import { PostWardRelated } from "@/components/common/PostWardRelated";

export const PostDetailPage = () => {
  return (
    <main className="bg-[#fdf4ec]">
      <div className="2xl:max-w-[1020px] xl:max-w-[980px] lg:py-[1rem] mx-auto px-6">
        <nav>
          <ol className="mb-2 flex flex-nowrap whitespace-nowrap overflow-auto">
            <li className="flex">
              <Link className="text-blue-500 text-[14px]" to={"/"}>
                <span>Cho thuê phòng trọ</span>
              </Link>
            </li>
            <li className="flex pl-1">
              <span className="pr-1">/</span>
              <Link className="text-blue-500 text-[14px]" to={"/"}>
                <span>Hồ Chí Minh</span>
              </Link>
            </li>
            <li className="flex pl-1">
              <span className="pr-1">/</span>
              <Link className="text-blue-500 text-[14px]" to={"/"}>
                <span>Quận Bình Tân</span>
              </Link>
            </li>
            <li className="flex pl-1">
              <span className="pr-1">/</span>
              <span className="text-[14px]">
                Phòng trọ cho thuê mới xây - Hẻm 305 Lê Văn Quới - Gần Chợ Lê
                Văn Quới, Căn Góc Thoáng Mát
              </span>
            </li>
          </ol>
        </nav>
        <div className="flex flex-wrap mt-4 mx-[-10px]">
          <div className="lg:w-8/12 md:w-9/12 px-[10px]">
            <div className="h-auto w-full relative text-white text-[0.9rem] mb-4">
              <ImagesPost />
              <div className="bg-white shadow-sm rounded p-6 mb-4">
                <header className="pb-6 mb-6">
                  <div className="bg-[#fb2c36] text-[14px] font-normal mb-1 inline-flex items-center">
                    <div className="w-[60px] h-[12px] bg-[url(https://phongtro123.com/images/bi-star-fill-yellow.svg)] bg-size-[12px] inline-block mr-[3px]"></div>
                    Tin VIP nổi bật
                  </div>
                  <h1 className="text-[#fb2c36] mb-[0.7rem] xl:text-[1.5rem] font-semibold">
                    Phòng trọ cho thuê mới xây - Hẻm 305 Lê Văn Quới - Gần Chợ
                    Lê Văn Quới, Căn Góc Thoáng Mát
                  </h1>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-green-500 font-bold text-[1.25rem]">
                        2 triệu/tháng
                      </span>
                      <span className="w-[3px] h-[3px] inline-block rounded-[50%] bg-[#aaa] mr-[4px] mb-[3px] ml-[5px]"></span>
                      <span>
                        20 m<sup>2</sup>
                      </span>
                    </div>
                    <div>
                      <time title="Thứ 6, 10:41 06/06/2025">
                        Cập nhật: 3 ngày trước
                      </time>
                    </div>
                  </div>
                  <div className="mt-2">
                    <table className="text-black">
                      <tbody>
                        <tr>
                          <td className="p-2 text-nowrap">
                            <div className="flex items-center">Quận huyện:</div>
                          </td>
                          <td className="p-2">
                            <Link className="underline text-blue-500" to={"/"}>
                              Cho thuê phòng trọ Quận Bình Tân
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 text-nowrap">
                            <div className="flex items-center">Tỉnh thành:</div>
                          </td>
                          <td className="p-2">
                            <Link className="underline text-blue-500" to={"/"}>
                              Hồ Chí Minh
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 text-nowrap">
                            <div className="flex items-center">Địa chỉ:</div>
                          </td>
                          <td className="p-2">
                            Hẻm 305 Đường Lê Văn Quới, Quận Bình Tân, Hồ Chí
                            Minh
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 text-nowrap">
                            <div className="flex items-center">Ngày đăng:</div>
                          </td>
                          <td className="p-2">Thứ 6, 10:41 06/06/2025</td>
                        </tr>
                        <tr>
                          <td className="p-2 text-nowrap">
                            <div className="flex items-center">
                              Ngày hết hạn:
                            </div>
                          </td>
                          <td className="p-2">Thứ 6, 10:41 13/06/2025</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </header>
                <div className="pb-4 mb-6 border-b border-border text-black">
                  <h2 className="text-[1.25rem] mb-4">Thông tin mô tả</h2>
                  <p>
                    Cho thuê phòng trọ mới xây diện tích 20m2 chưa kể ban công
                  </p>
                  <p>Căn góc 2 mặt tiền thoáng mát, hiện đang trống 2 phòng.</p>
                  <p>
                    - Địa chỉ: Hẻm 305 đường Lê Văn Quới, Bình Trị Đông, Q. Bình
                    Tân.
                  </p>
                  <p>
                    - Phòng mới xây, nhà ngay góc ngã ba nên rất thoáng mát.
                  </p>
                  <p>- Gần chợ Lê Văn Quới, gần ngã tư Bốn Xã.</p>
                  <p>
                    - Không gian mở, ban công thoáng mát nên đảm bảo môi trường
                    phòng Covit hiệu quả.
                  </p>
                  <p>- Giá phòng trọ: 2.000.000 đ/tháng</p>
                  <p>- Điện 3.800 đ/kwh, nước 25.000 đ/m3.</p>
                  <p>
                    - Liên hệ: 0987791177 - Anh Quân. Xin chân thành cảm ơn!
                  </p>
                </div>
                <div className="pb-6 mb-6 border-b border-border text-black">
                  <h2 className="text-[1.25rem] mb-2">Vị trí & bản đồ</h2>
                  <p className="flex items-center text-[15px]">
                    <IoLocationSharp />
                    Địa chỉ: Hẻm 305 Đường Lê Văn Quới, Quận Bình Tân, Hồ Chí
                    Minh
                  </p>
                </div>
                <div className="mb-6">
                  <h2 className="text-[1.25rem] mb-4 text-black">
                    Thông tin liên hệ
                  </h2>
                  <div className="flex items-center">
                    <img
                      src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2021/05/21/373d99d1b4df588101ce_1621591135.jpg"
                      alt="avatar"
                      className="w-[100px] h-[100px] rounded-[50%] p-[0.2rem] border border-[#ddd]"
                    />
                    <div className="ml-4">
                      <div className="flex items-center">
                        <div className="font-medium text-black text-[1.25rem]">
                          Anh Quân
                        </div>
                        <div className="text-[0.9rem] items-center flex text-gray-900">
                          <GoDotFill className="text-green-500 mx-2" />
                          <span>Đang hoạt động</span>
                        </div>
                      </div>
                      <div className="text-[13px] mt-1 text-black">
                        1 tin đăng{" "}
                        <span className="w-[3px] h-[3px] inline-block rounded-[50%] bg-[#aaa] mr-[4px] mb-[3px] mt-[5px]"></span>
                        Tham gia từ: 06/03/2020
                      </div>
                      <div className="flex items-center mt-4">
                        <Link
                          to={"tel:0987791177"}
                          className="flex items-center bg-green-500 p-2 text-white rounded-xl"
                        >
                          <IoCall className="mr-2" />
                          0987791177
                        </Link>
                        <Link
                          className="bg-blue-500 text-white flex items-center p-2 rounded-xl ml-2"
                          to={"/nhan-tin"}
                        >
                          <BiMessageRoundedDetail className="mr-2" />
                          Nhắn Zalo
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 mt-6 text-[#664d03] bg-[#fffae8] border border-[#ffe69c]">
                    <ul>
                      <li className="pb-2 font-bold">Lưu ý</li>
                      <li className="pb-2 text-[13px]">
                        Chỉ đặt khi cọc xác định được chủ nhà và có thỏa thuận
                        biên nhận rõ ràng. Kiểm tra mọi điều khoản và yêu cầu
                        liệt kê tất cả chi phí hàng tháng vào hợp đồng.{" "}
                      </li>
                      <li className="text-[13px]">
                        Mọi thông tin liên quan đến tin đăng này chỉ mang tính
                        chất tham khảo. Nếu bạn thấy rằng tin đăng này không
                        đúng hoặc có dấu hiệu lừa đảo,{" "}
                        <span className="text-blue-500 underline">
                          Hãy phản ánh với chúng tôi
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-4/12 md:w-9/12 px-[10px]">
            <div className="bg-white shadow-sm rounded-md p-4 mb-4 lg:block hidden">
              <div className="mb-4">
                <img
                  src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2021/05/21/373d99d1b4df588101ce_1621591135.jpg"
                  alt="avatar"
                  className="w-[100px] h-[100px] border border-[#ddd] p-1 rounded-[50%] object-cover mx-auto"
                />
                <div className="mt-4 text-center">
                  <span className="font-medium text-[18px]">Anh Quân</span>
                  <div className="flex items-center justify-center text-[12px]">
                    <GoDotFill className="text-green-500 mr-1" />
                    <span>Đang hoạt động</span>
                  </div>
                  <div className="text-[14px] mt-1">
                    1 tin đăng
                    <span className="w-[3px] h-[3px] inline-block rounded-[50%] bg-[#aaa] mr-[4px] mb-[3px] ml-[5px]"></span>
                    Tham gia từ: 06/03/2020
                  </div>
                </div>
              </div>
              <div>
                <Link
                  to={"/"}
                  className="bg-green-500 flex items-center justify-center p-2 gap-2 text-white rounded-xl"
                >
                  <IoCall />
                  0987791177
                </Link>
                <Link
                  to={"/"}
                  className="bg-blue-500 flex items-center justify-center mt-2 p-2 gap-2 text-white rounded-xl"
                >
                  <BiMessageRoundedDetail />
                  Nhắn tin
                </Link>
              </div>
              <div className="flex items-center gap-2 justify-between mt-4">
                <Button size={"sm"} variant={"secondary"}>
                  <IoMdHeartEmpty /> Lưu tin
                </Button>
                <Button size={"sm"} variant={"secondary"}>
                  <IoMdHeartEmpty /> Chia sẻ
                </Button>
                <Button size={"sm"} variant={"secondary"}>
                  <IoMdHeartEmpty /> Báo xấu
                </Button>
              </div>
            </div>
            <div className="bg-[#cff4fc] lg:mt-0 rounded-md p-4 mb-4 border border-[0dcaf0] sticky top-[120px] z-[1020]">
              <h2 className="font-medium text-[18px] mb-4">Tin dăng nổi bật</h2>
              <ul className="flex flex-wrap">
                <li className="w-full max-w-full shrink-0">
                  <FeaturedPostDetail />
                </li>
              </ul>
            </div>
          </div>
          <PostRelated />
          <PostRelated />
          <PostWardRelated />
        </div>
      </div>
    </main>
  );
};
