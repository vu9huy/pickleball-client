import React from "react";
import styles from "./LinkList.module.css";
import Link from "next/link";

const LinkList = ({ linkList }) => {
    return (
        <div className={styles["link-list-container"]}>
            {linkList?.map(link => {
                return (<>
                    {link?.children ?
                        <div className={styles["link-item"]}>
                            <span>{link.label}</span>
                            <div className={styles["link-children-list"]}>
                                {link?.children?.map(childLink => {
                                    return (
                                        <Link className={styles["link-children-item"]} href={childLink.path} key={childLink.path}>
                                            {childLink.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div> :
                        <Link className={styles["link-item"]} href={link.path} key={link.path}>
                            {link.label}
                        </Link>}
                </>);
            })}
        </div>
    );
};
export default LinkList;