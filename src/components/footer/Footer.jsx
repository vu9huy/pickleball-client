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
                            <MoveHoverLink href={"https://facebook.com/vu9huy"} target={"_blank"} rel={"nofollow"}>
                                <span>Facebook</span>
                            </MoveHoverLink>
                        </li>
                        <li className={styles["footer-item-content-item"]}>
                            <MoveHoverLink href={"mailto:quan2704vu@gmail.com"} >
                                <span>quan2704vu@gmail.com</span>
                            </MoveHoverLink>
                        </li>
                        <li className={styles["footer-item-content-item"]}>
                            <MoveHoverLink href={"mailto:quan2704vu@gmail.com"} label={"0352221999"} >
                                <span>0352221999</span>
                            </MoveHoverLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles["coppy-right"]}>
                <p>@vu9huy©2024</p>
            </div>
        </div>
    );
};
export default Footer;