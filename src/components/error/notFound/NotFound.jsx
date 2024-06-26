import Link from "next/link";
import styles from "./NotFound.module.css";
import { barlowCondensed } from "@/fonts/googleFont";

const notFounds = {
    "default": {
        image: {
            url: "/",
            alt: ""
        },
        text: "Không tìm thấy trang",
        buttonText: "Trang chủ",
        buttonUrl: "/"
    },
    "court": {
        image: {
            url: "/",
            alt: ""
        },
        text: "Sân không tồn tại",
        buttonText: "Tìm sân",
        buttonUrl: "/tim-san"
    }
};

const NotFound = ({ type }) => {

    const notFoundData = type ? notFounds[type] : notFounds["default"];

    return (
        <div className={styles["not-found-container"]}>
            <p className={`${barlowCondensed.variable} ${styles["not-found-banner"]}`}>404</p>
            <p className={styles["not-found-text"]}>{notFoundData.text}</p>
            <Link href={`${notFoundData.buttonUrl}`}>
                <button className={`${styles["not-found-button"]} button`}>{notFoundData.buttonText}</button>
            </Link>
        </div>
    );
};
export default NotFound;