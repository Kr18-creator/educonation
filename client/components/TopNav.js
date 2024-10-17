import { Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const TopNav = () => {
  const menuItems = [
    {
      key: "app",
      label: (
        <Link href="/">
          <AppstoreOutlined /> App
        </Link>
      ),
    },
    {
      key: "login",
      label: (
        <Link href="/login">
          <LoginOutlined /> Login
        </Link>
      ),
    },
    {
      key: "register",
      label: (
        <Link href="/register">
          <UserAddOutlined /> Register
        </Link>
      ),
    },
  ];

  return <Menu mode="horizontal" items={menuItems} />;
};

export default TopNav;