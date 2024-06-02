import React from "react";
import styles from "./Navbar.module.css";
import AuthLink from "../authLink/AuthLink";
import LinkList from "../linkList/LinkList";
import Logo from "../logo/Logo";

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
            <Logo />
            <div className={styles["navbar-links"]}>
                {/* <ThemeToggle /> */}
                <LinkList linkList={menu} />
                <AuthLink />
            </div>
        </div>
    );
};
export default Navbar;