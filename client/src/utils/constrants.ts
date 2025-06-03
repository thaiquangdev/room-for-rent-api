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
