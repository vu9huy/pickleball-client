import React from "react";
import styles from "./Footer.module.css";
import { HeaderComp } from "../header/HeaderComp";
import MoveHoverLink from "../moveHoverLink/MoveHoverLink";

const Footer = () => {

    return (
        <div className={`${styles["footer-container"]}`}>
            <div className={styles["footer-wrapper"]}>
                <div className={styles["footer-item"]}>
                    <div className={styles["footer-item-title"]}>
                        <HeaderComp>
                            <span>Sân Pickleball</span>
                        </HeaderComp>
                    </div>
                    <ul className={styles["footer-item-content"]}>
                        <li className={styles["footer-item-content-item"]}>
                            Inissimos ducimos qui blandiitis praesentium voluptatum deleniti.
                            {/* Tìm kiếm và đặt sân pickleball trên toàn quốc */}
                        </li>
                    </ul>
                </div>
                <div className={styles["footer-item"]}>
                    <div className={styles["footer-item-title"]}>
                        <HeaderComp>
                            <span>Liên hệ</span>
                        </HeaderComp>
                    </div>
                    <ul className={styles["footer-item-content"]}>
                        <li className={styles["footer-item-content-item"]}>
                            <span>facebook</span>
                            {/* <a rel="nofollow" href="https://facebook.com/vu9huy">Facebook</a> */}
                            <MoveHoverLink href={"https://facebook.com/vu9huy"} label={"Facebook"} />
                        </li>
                        <li className={styles["footer-item-content-item"]}>
                            <a href="mailto:quan2704vu@gmail.com">quan2704vu@gmail.com</a>
                        </li>
                        <li className={styles["footer-item-content-item"]}>
                            <a href="tel:0352221999">0352221999</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles["coppy-right"]}>
                <p>vu9huy©2024</p>
            </div>
        </div>
    );
};
export default Footer;