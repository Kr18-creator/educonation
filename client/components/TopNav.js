import { Menu } from "antd";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const TopNav = () => {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
    console.log("🚀 ~ useEffect ~ window.location.pathname:", window.location.pathname)
  }, [process.browser && window.location.pathname]);
   

  const menuItems = [
    {
      key: "/",
      onClick: (e) => setCurrent(e.key),
      label: (
        <Link href="/">
          <AppstoreOutlined /> App
        </Link>
      ),
    },
    {
      key: "/login",
      onClick: (e) => setCurrent(e.key),
      label: (
        <Link href="/login">
          <LoginOutlined /> Login
        </Link>
      ),
    },
    {
      key: "/register",
      onClick: (e) => setCurrent(e.key),
      label: (
        <Link href="/register">
          <UserAddOutlined /> Register
        </Link>
      ),
    },
  ];

  return <Menu mode="horizontal" items={menuItems} selectedKeys={[current]} />;
};

export default TopNav;
