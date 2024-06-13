"use client";

import Geolocation from "@/components/geolocation/GeoLocation";
import styles from "./page.module.css";
import { useState } from "react";
import SelectAddress from "@/components/selectAddress/SelectAddress";
import MapboxMap from "@/components/mapbox/MapBox";
import VisglMap from "@/components/googleMap/VisglMap";

const PROVINCE_ZOOM = 11;
const DISTRICT_ZOOM = 12.5;

export default function TimSan() {
    // const [geolocation, setGeolocation] = useState({});

    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");

    const [viewState, setViewState] = useState({
        lat: null,
        lng: null,
        zoom: null
    });

    const selectProvince = (value) => {
        setProvince(value);
        setDistrict("");
        setViewState({

        })
    };

    const selectDistrict = (value) => {
        setDistrict(value);
    };

    return <div className={styles["tim-san-container"]}>
        {/* <Geolocation geolocation={geolocation} setGeolocation={setGeolocation} /> */}
        <SelectAddress
            province={province}
            selectProvince={selectProvince}
            district={district}
            selectDistrict={selectDistrict}
        />
        {/* <MapboxMap viewState={viewState}/> */}
        <div className={styles["map-container"]}>
            <VisglMap viewState={viewState} />
        </div>
    </div>;
}
