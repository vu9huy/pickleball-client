"use client";

import React from "react";
import styles from "./DesktopLinkList.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { barlowCondensed } from "@/app/fonts/googleFont";


const DesktopLinkList = ({ linkList }) => {

    const pathname = usePathname();

    return (
        <ul className={`${barlowCondensed.variable} ${styles["desktop-link-list-container"]}`}>
            {linkList?.map(link => {
                return (<>
                    {link?.children ?
                        <li className={styles["desktop-link-item"]}>
                            <span>{link.label}</span>
                            <ul className={styles["desktop-link-children-list"]}>
                                {link?.children?.map(childLink => {
                                    return (
                                        <li className={`${styles["desktop-link-children-item"]}`} key={childLink.path}>
                                            <Link href={childLink.path}>
                                                <span>{childLink.label}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li> :
                        <li className={`${styles["desktop-link-item"]} ${link.path === pathname ? styles["link-active"] : ""}`}>
                            <Link href={link.path}>
                                <span>{link.label}</span>
                            </Link>
                        </li>
                    }
                </>);
            })}
        </ul>
    );
};
export default DesktopLinkList;