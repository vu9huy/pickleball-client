"use client";

import React from "react";
import styles from "./DesktopLinkList.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Barlow_Condensed } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
    weight: "600",
    subsets: ["latin"],
    variable: "--font-barlow-condensed"
});

const DesktopLinkList = ({ linkList }) => {

    const pathname = usePathname();

    return (
        <div className={`${barlowCondensed.variable} ${styles["desktop-link-list-container"]}`}>
            {linkList?.map(link => {
                return (<>
                    {link?.children ?
                        <div className={styles["desktop-link-item"]}>
                            <span>{link.label}</span>
                            <div className={styles["desktop-link-children-list"]}>
                                {link?.children?.map(childLink => {
                                    return (
                                        <Link className={`${styles["desktop-link-children-item"]}`} href={childLink.path} key={childLink.path}>
                                            <span>{childLink.label}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div> :
                        <Link className={`${styles["desktop-link-item"]} ${link.path === pathname ? styles["link-active"] : ""}`} href={link.path}>
                            <span>{link.label}</span>
                        </Link>
                    }
                </>);
            })}
        </div>
    );
};
export default DesktopLinkList;