import React from "react";
import styles from "./Logo.module.css";
import "@/app/fonts/localFonts.css";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {

    return (
        <Link href={"/"} className={styles["logo-container"]}>
            <Image src={"/logo-fit-96x96.webp"} alt="logo" width={50} height={50} />
            <span className={styles["text-logo"]}>
                Sân Pickleball
            </span>
        </Link>
    );
};
export default Logo;