import { ImagesPost } from "@/components/common/ImagesPost";
import { Link } from "react-router-dom";

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
        <div className="flex flex-wrap mt-4">
          <div className="lg:w-8/12 md:w-9/12">
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
                    <table>
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
                <div className="pb-4 mb-6 border-b border-border">
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
                <div className="pb-6 mb-6 border-b border-border">
                  <h2>Vị trí & bản đồ</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-4/12 md:w-9/12"></div>
        </div>
      </div>
    </main>
  );
};
