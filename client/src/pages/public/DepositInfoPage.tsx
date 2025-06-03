import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export const DepositInfoPage = () => {
  return (
    <main className="ml-auto xl:w-10/12">
      <div className="sticky top-[45px] lg:px-[3rem] pt-4 z-[1020] bg-white">
        <div className="flex items-center">
          <h1 className="xl:text-[1.75rem] whitespace-nowrap font-semibold">
            Nạp tiền vào tài khoản
          </h1>
        </div>
        <nav className="flex flex-wrap">
          <nav className="flex flex-wrap">
            <NavLink
              className={({ isActive }) => {
                return `text-gray-800 text-[15px] pb-4 pt-2 mr-6 ${
                  isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
                }`;
              }}
              to={"/quan-ly/nap-tien/momo"}
            >
              Ví MoMo
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return `text-gray-800 text-[15px] pb-4 pt-2 mr-6 ${
                  isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
                }`;
              }}
              to={"/quan-ly/nap-tien/zalopay"}
            >
              Ví Zalopay
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return `text-gray-800 text-[15px] pb-4 pt-2 mr-6 ${
                  isActive ? "text-orange-500 border-b-2 border-orange-500" : ""
                }`;
              }}
              to={"/quan-ly/nap-tien/vnpay"}
            >
              Ví Vnpay
            </NavLink>
          </nav>
        </nav>
      </div>

      {/* Sections */}
      <div className="lg:pt-6 lg:px-[3rem]">
        <div className="flex flex-wrap justify-center">
          <div className="lg:w-[50%] md:w-8/12">
            <div>
              <div className="text-[0.85rem] border-l-2 border-[#0dcaf0] bg-[#9eeaf9] p-4 mb-4 rounded-md">
                <p className="font-bold mb-1 text-[12px]">Ưu đãi nạp tiền:</p>
                <p className="mb-1 text-[12px]">
                  • Nạp từ 100.000 đến dưới 1.000.000 tặng 10%
                </p>
                <p className="mb-1 text-[12px]">
                  • Nạp từ 1.000.000 đến dưới 2.000.000 tặng 20%
                </p>
                <p className="mb-1 text-[12px]">
                  • Nạp từ 2.000.000 trở lên tặng 25%
                </p>
              </div>
            </div>
            <div className="bg-white shadow-sm rounded p-6 mb-4">
              <div className="font-medium text-[1.25rem] mb-4">
                Chọn số tiền cần nạp
              </div>
              <RadioGroup
                defaultValue="option-one"
                className="flex flex-wrap mt-4"
              >
                <div className="flex items-center space-x-2 w-[25%]">
                  <RadioGroupItem value="50000" id="radio50000" />
                  <Label htmlFor="radio50000">50.000</Label>
                </div>
                <div className="flex items-center space-x-2 w-[25%]">
                  <RadioGroupItem value="100000" id="radio100000" />
                  <Label htmlFor="radio100000">100.000</Label>
                </div>
                <div className="flex items-center space-x-2 w-[25%]">
                  <RadioGroupItem value="200000" id="radio200000" />
                  <Label htmlFor="radio200000">200.000</Label>
                </div>
                <div className="flex items-center space-x-2 w-[25%]">
                  <RadioGroupItem value="500000" id="radio500000" />
                  <Label htmlFor="radio500000">500.000</Label>
                </div>
                <div className="flex items-center space-x-2 w-[25%]">
                  <RadioGroupItem value="1000000" id="radio1000000" />
                  <Label htmlFor="radio1000000">1.000.000</Label>
                </div>
                <div className="flex items-center space-x-2 w-[25%]">
                  <RadioGroupItem value="2000000" id="radio2000000" />
                  <Label htmlFor="radio2000000">2.000.000</Label>
                </div>
                <div className="flex items-center space-x-2 w-[25%]">
                  <RadioGroupItem value="5000000" id="radio5000000" />
                  <Label htmlFor="radio5000000">5.000.000</Label>
                </div>
              </RadioGroup>
              <div className="mt-6">
                <p className="mb-4 text-[14px]">Hoặc nhập số tiền cần nạp</p>
                <div>
                  <div className="relative w-full ">
                    <Input
                      type="number"
                      placeholder="Nhập số tiền cần nạp"
                      className="pl-4 pr-12 h-[45px] w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="absolute inset-y-0 right-4 flex items-center font-medium">
                      đ
                    </span>
                  </div>
                  <div className="text-orange-500 text-[0.8rem] mt-1">
                    năm mươi nghìn đồng
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-sm rounded p-6 mb-4">
              <div className="font-medium text-[1.25rem] mb-4">
                Thông tin nạp tiền
              </div>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Số tiền nạp</TableCell>
                    <TableCell>50.000đ</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Khuyến mãi</TableCell>
                    <TableCell>+0đ</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Thực nhận</TableCell>
                    <TableCell>50.000đ</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="flex mt-6">
              <Button className="w-full p-5 flex items-center">
                Tiếp tục <FaArrowRightLong />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
