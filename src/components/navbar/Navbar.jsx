import React from "react";
import styles from "./Navbar.module.css";
import AuthLink from "../authLink/AuthLink";
import LinkList from "../destopMenu/desktopLinkList/DesktopLinkList";
import Logo from "../logo/Logo";
import DesktopMenu from "../destopMenu/DesktopMenu";
import MobileMenu from "../mobileMenu/MobileMenu";

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
            label: "Cộng đồng",
            path: "/cong-dong",
            children: [
                {
                    label: "Khóa học",
                    path: "/cong-dong/khoa-hoc"
                },
                {
                    label: "Giáo viên",
                    path: "/cong-dong/giao-vien"
                },
                {
                    label: "Câu lạc bộ",
                    path: "/cong-dong/clb"
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
                {/* <DesktopMenu menu={menu} /> */}
                <MobileMenu menu={menu} />
            </div>
        </div>
    );
};
export default Navbar;