import { LuSquarePen } from "react-icons/lu";
import { CiFolderOn, CiCreditCard1 } from "react-icons/ci";
import { BsClock, BsTags } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { IoLogOutOutline, IoCalendarOutline } from "react-icons/io5";

export const navDatas = [
  {
    id: 1,
    name: "Phòng trọ",
    path: "/",
  },
  {
    id: 2,
    name: "Nhà nguyên căn",
    path: "/nha-cho-thue",
  },
  {
    id: 3,
    name: "Căn hộ chung cư",
    path: "/cho-thue-can-ho",
  },
  {
    id: 4,
    name: "Căn hộ mini",
    path: "/cho-thue-can-ho-mini",
  },
  {
    id: 5,
    name: "Căn hộ dịch vụ",
    path: "/cho-thue-can-ho-dich-vu",
  },
  {
    id: 6,
    name: "Ở ghép",
    path: "/tim-nguoi-o-ghep",
  },
  {
    id: 7,
    name: "Mặt bằng",
    path: "/cho-thue-mat-bang",
  },
  {
    id: 8,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 9,
    name: "Bảng giá dịch vụ",
    path: "/bang-gia-dich-vu",
  },
];

export const sidebarDatas = [
  {
    id: 1,
    name: "Đăng tin mới",
    path: "/quan-ly/dang-tin-moi",
    icon: LuSquarePen,
  },
  {
    id: 2,
    name: "Danh sách tin đăng",
    path: "/quan-ly/danh-sach-tin-dang",
    icon: CiFolderOn,
  },
  {
    id: 3,
    name: "Nạp tiền vào tài khoản",
    path: "/quan-ly/nap-tien",
    icon: CiCreditCard1,
  },
  {
    id: 4,
    name: "Lịch sử nạp tiền",
    path: "/quan-ly/lich-su-nap-tien",
    icon: BsClock,
  },
  {
    id: 5,
    name: "Lịch sử thanh toán",
    path: "/quan-ly/lich-su-thanh-toan",
    icon: IoCalendarOutline,
  },
  {
    id: 6,
    name: "Bảng giá dịch vụ",
    path: "/bang-gia-dich-vu",
    icon: BsTags,
  },
  {
    id: 7,
    name: "Quản lý tài khoản",
    path: "/quan-ly/cap-nhat-thong-tin-ca-nhan",
    icon: FiUser,
  },
  {
    id: 8,
    name: "Đăng xuất",
    path: "/thoat",
    icon: IoLogOutOutline,
  },
];

export const priceQueryDatas = [
  {
    id: "price-1",
    name: "Dưới 1 triệu",
    path: "gia_tu=1000000",
  },
  {
    id: "price-2",
    name: "Từ 1 - 2 triệu",
    path: "gia_tu=1000000&gia_den=2000000",
  },
  {
    id: "price-3",
    name: "Từ 2 - 3 triệu",
    path: "gia_tu=2000000&gia_den=3000000",
  },
  {
    id: "price-4",
    name: "Từ 3 - 5 triệu",
    path: "gia_tu=3000000&gia_den=5000000",
  },
  {
    id: "price-5",
    name: "Từ 5 - 7 triệu",
    path: "gia_tu=5000000&gia_den=7000000",
  },
  {
    id: "price-6",
    name: "Từ 7 - 10 triệu",
    path: "gia_tu=7000000&gia_den=10000000",
  },
  {
    id: "price-7",
    name: "Từ 10 - 15 triệu",
    path: "gia_tu=10000000&gia_den=15000000",
  },
  {
    id: "price-8",
    name: "Trên 15 triệu",
    path: "gia_tu=15000000",
  },
];

export const areaQueryDatas = [
  {
    id: "area-1",
    name: "Dưới 20m",
    path: "dien_tich_den=20",
  },
  {
    id: "area-2",
    name: "Từ 20m - 30m",
    path: "dien_tich_tu=20&dien_tich_den=30",
  },
  {
    id: "area-3",
    name: "Từ 30m - 50m",
    path: "dien_tich_tu=30&dien_tich_den=50",
  },
  {
    id: "area-4",
    name: "Từ 50m - 70m",
    path: "dien_tich_tu=50&dien_tich_den=70",
  },
  {
    id: "area-5",
    name: "Từ 70m - 90m",
    path: "dien_tich_tu=70&dien_tich_den=90",
  },
  {
    id: "area-6",
    name: "Trên 90m",
    path: "ien_tich_tu=90",
  },
];
