"use client";

import React, { useState } from "react";
import styles from "./MobileLinkList.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { barlowCondensed } from "@/app/fonts/googleFont";
import { IconSprites1 } from "@/components/iconSprites/IconSprites";


const checkActiveNavLinkFunc = ({ linkPath, pathname }) => {
    if (!linkPath || !pathname) return false;
    if (linkPath === pathname) return true;
    if (linkPath !== "/" && pathname.includes(linkPath)) return true;
    return false;
};

const MobileLinkList = ({ linkList, handleCloseMenu }) => {
    const pathname = usePathname();
    const [pathLink, setPathLink] = useState(null);

    const handleClickChildrenLink = (pathLink) => {
        setPathLink(pathLink);
    };

    const handleClickLink = (pathLink) => {
        setPathLink(pathLink);
        handleCloseMenu();
    };

    return (
        <div className={`${barlowCondensed.variable} ${styles["mobile-link-list-container"]}`}>
            <div className={styles["mobile-link-list-close-wrapper"]} onClick={() => handleCloseMenu()}>
                <button className={styles["mobile-link-list-close-button"]}>
                    <IconSprites1 id={"sprites-icon-close"} stroke="#000000" width="36px" height="36px" />
                </button>
            </div>
            <ul className={styles["mobile-link-list-wrapper"]}>
                {linkList?.map(link => {
                    const isActive = checkActiveNavLinkFunc({ linkPath: link.path, pathname });
                    if (link?.children) {
                        return (<li key={link.path} onClick={() => handleClickChildrenLink(link.path)} className={`${styles["mobile-link-item"]} ${isActive ? styles["link-active"] : ""}`}>
                            <a>
                                <span>{link.label}&nbsp;</span>
                                {/* <p>{"=>"}</p> */}
                            </a>
                            <ul className={`${styles["mobile-link-children-list"]} ${pathLink == link.path || isActive ? styles["open"] : ""}`}>
                                {link?.children?.map(childLink => {
                                    const isActive = checkActiveNavLinkFunc({ linkPath: childLink.path, pathname });
                                    return (
                                        <li
                                            className={`${styles["mobile-link-children-item"]} ${isActive ? styles["link-active"] : ""}`}
                                            onClick={() => handleCloseMenu()}
                                            key={childLink.path}>
                                            <Link href={childLink.path}>
                                                <span>{childLink.label}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>);
                    }
                    return (<li
                        key={link.path} onClick={() => handleClickLink(link.path)} className={`${styles["mobile-link-item"]} ${isActive ? styles["link-active"] : ""}`} >
                        <Link href={link.path}>
                            <span>{link.label}</span>
                        </Link>
                    </li>);
                })}
            </ul>
        </div>
    );
};
export default MobileLinkList;