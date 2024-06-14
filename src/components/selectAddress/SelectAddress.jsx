"use client";

import React from "react";
import Select from "react-select";
import styles from "./SelectAddress.module.css";
import vietnameseProvincesData from "@/data/vietnamese_provinces_list.json";

const SelectAddress = ({ province, selectProvince, district, selectDistrict }) => {

    return (<div className={styles["select-address-container"]}>
        <div className={styles["select-address-provinces"]}>
            <p className={styles["select-address-label"]}>
                <span>Tỉnh/thành: </span>
                <span><b>{province.value}</b></span>
            </p>
            <Select
                options={vietnameseProvincesData}
                onChange={(value) => selectProvince(value)}
            />
        </div>

        <div className={styles["select-address-district"]}>
            <p className={styles["select-address-label"]}>
                <span>Quận/huyện: </span>
                <span><b>{district?.value}</b></span>
            </p>
            {/* <p className={styles["select-address-note"]}>*Chỉ áp dụng cho Hà Nội và thành phố Hồ Chí Minh</p> */}
            <Select
                options={province?.districts ? province?.districts : []}
                onChange={(value) => selectDistrict(value)}
                isDisabled={!province?.districts}
            />
        </div>

    </div>);
};

export default SelectAddress;
