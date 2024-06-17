"use client";

import React, { useState } from "react";
import styles from "./MobileLinkList.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { barlowCondensed } from "@/app/fonts/googleFont";


const checkActiveNavLinkFunc = ({ linkPath, pathname }) => {
    if (!linkPath || !pathname) return false;
    if (linkPath === pathname) return true;
    if (linkPath !== "/" && pathname.includes(linkPath)) return true;
    return false;
};

const MobileLinkList = ({ linkList }) => {
    const pathname = usePathname();
    const [pathLink, setPathLink] = useState(null);

    const handleOpenMenu = (pathLink) => {
        setPathLink(pathLink);
    };

    return (
        <ul className={`${barlowCondensed.variable} ${styles["mobile-link-list-container"]}`}>
            {linkList?.map(link => {
                const isActive = checkActiveNavLinkFunc({ linkPath: link.path, pathname });
                if (link?.children) {
                    return (<li key={link.path} onClick={() => handleOpenMenu(link.path)} className={`${styles["mobile-link-item"]} ${isActive ? styles["link-active"] : ""}`}>
                        <a>
                            <span>{link.label}&nbsp;</span>
                            {/* <p>{"=>"}</p> */}
                        </a>
                        <ul className={`${styles["mobile-link-children-list"]} ${pathLink == link.path ? styles["open"] : ""}`}>
                            {link?.children?.map(childLink => {
                                const isActive = checkActiveNavLinkFunc({ linkPath: childLink.path, pathname });
                                return (
                                    <li className={`${styles["mobile-link-children-item"]} ${isActive ? styles["link-active"] : ""}`} key={childLink.path}>
                                        <Link href={childLink.path}>
                                            <span>{childLink.label}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </li>);
                }
                return (<li key={link.path} onClick={() => handleOpenMenu(link.path)} className={`${styles["mobile-link-item"]} ${isActive ? styles["link-active"] : ""}`} >
                    <Link href={link.path}>
                        <span>{link.label}</span>
                    </Link>
                </li>);
            })}
        </ul>
    );
};
export default MobileLinkList;