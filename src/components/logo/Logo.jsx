import React from "react";
import styles from "./Logo.module.css";
import Image from "next/image";

const Logo = () => {

    return (
        <div className={styles["logo-container"]}>
            <Image src={"/logo-fit-96x96.webp"} alt="logo" width={50} height={50} />
        </div>
    );
};
export default Logo;