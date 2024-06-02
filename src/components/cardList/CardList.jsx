import React from "react";
import styles from "./CardList.module.css";
import Pagination from "../pagination/Pagination";

const CardList = () => {

    return (
        <div className={styles["cardList-container"]}>
            CardList
            <Pagination />
        </div>
    );
};
export default CardList;