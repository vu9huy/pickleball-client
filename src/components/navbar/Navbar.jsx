import React from "react";
import styles from "./Navbar.module.css";
import AuthLink from "../authLink/AuthLink";
import LinkList from "../desktopLinkList/DesktopLinkList";
import Logo from "../logo/Logo";
import DesktopMenu from "../destopMenu/DesktopMenu";

const Navbar = () => {

    const menu = [
        {
            label: "Trang chủ",
            path: "/"
        },
        {
            label: "Tìm sân",
            path: "/tim-san"
        },
        {
            label: "Hướng dẫn",
            path: "/huong-dan"
        },
        {
            label: "Blog",
            path: "/blog"
        },
        {
            label: "Giao lưu",
            path: "/giao-lưu",
            children: [
                {
                    label: "Khóa học",
                    path: "/khoa-hoc"
                },
                {
                    label: "Giáo viên",
                    path: "/giao-vien"
                },
                {
                    label: "Câu lạc bộ",
                    path: "/clb"
                }
            ]
        }
    ];

    return (
        <div className={styles["navbar-container"]}>
            <div className={styles["navbar-wapper"]}>
                <Logo />
                {/* <div className={styles["navbar-links"]}>
                    <LinkList linkList={menu} />
                    <AuthLink />
                </div> */}
                <DesktopMenu menu={menu} />
            </div>
        </div>
    );
};
export default Navbar;