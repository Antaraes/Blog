import { IoApps } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdManageAccounts } from "react-icons/md";
import { LuLayoutList } from "react-icons/lu";
import { HiClipboardDocumentList } from "react-icons/hi2";
export const routes = [
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Links",
    path: "/links",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];

export const AdminRoutes = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <IoApps />,
  },
  {
    name: "blogs List",
    path: "/admin/blogsList",
    icon: <CiViewList />,
  },
  {
    name: "User List",
    path: "/admin/userList",
    icon: <HiOutlineUserGroup />,
  },
  {
    name: "Admin management",
    path: "/admin/admin_management",
    icon: <MdManageAccounts />,
  },
  {
    name: "Category",
    path: "/admin/category",
    icon: <LuLayoutList />,
  },
  {
    name: "Block List",
    path: "/admin/block_list",
    icon: <HiClipboardDocumentList />,
  },
];
