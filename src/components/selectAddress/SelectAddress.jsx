"use client";

import React from "react";
import Select from "react-select";
import styles from "./SelectAddress.module.css";

const SelectAddress = ({ provinces, setProvinces, district, setDistrict }) => {

    const options1 = [
        { value: "chocolate", label: "Chocolate", district: "1" },
        { value: "strawberry", label: "Strawberry", district: "2" },
        { value: "vanilla", label: "Vanilla" }
    ];

    const options2 = [
        { value: "chocolate", label: "Chocolate", data: "1" },
        { value: "strawberry", label: "Strawberry", data: "2" },
        { value: "vanilla", label: "Vanilla", data: "3" }
    ];

    console.log('provinces', provinces);

    return (<div className={styles["react-select-container"]}>
        <div className={styles["react-select-provinces"]}>
            <p>
                <span>Tỉnh/thành:</span>
                <span>{provinces.value}</span>
            </p>
            <Select
                options={options1}
                onChange={setProvinces}
            />
        </div>
        {provinces?.district ?
            <div className={styles["react-select-district"]}>
                <p>
                    <span>Quận/huyện:</span>
                    <span>{district?.value}</span>
                </p>
                <Select
                    options={options2}
                    onChange={setDistrict}
                />
            </div> :
            ""}
    </div>);
};

export default SelectAddress;
