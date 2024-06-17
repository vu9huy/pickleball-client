"use client";

import Geolocation from "@/components/geolocation/GeoLocation";
import styles from "./page.module.css";
import { useState } from "react";
import SelectAddress from "@/components/selectAddress/SelectAddress";
import MapboxMap from "@/components/mapbox/MapBox";
import VisglMapContainer from "@/components/googleMap/VisglMapProvider";

const PROVINCE_ZOOM = 11;
const DISTRICT_ZOOM = 12.5;

export default function TimSan() {
    const [geolocation, setGeolocation] = useState({});

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
        if (!value?.geolocation?.latitude && !value?.geolocation?.longitude) {
            console.log("Error: Province geolocation not exist");
        }
        const newViewState = {
            lat: value.geolocation.latitude,
            lng: value?.geolocation?.longitude,
            zoom: PROVINCE_ZOOM
        };
        setViewState(newViewState);
    };

    const selectDistrict = (value) => {
        setDistrict(value);
        if (!value?.geolocation?.latitude && !value?.geolocation?.longitude) {
            console.log("Error: District geolocation not exist");
        }
        const newViewState = {
            lat: value.geolocation.latitude,
            lng: value?.geolocation?.longitude,
            zoom: DISTRICT_ZOOM
        };
        setViewState(newViewState);
    };

    return <div className={styles["tim-san-container"]}>
        {/* <Geolocation geolocation={geolocation} setGeolocation={setGeolocation} /> */}
        {/* <SelectAddress
            province={province}
            selectProvince={selectProvince}
            district={district}
            selectDistrict={selectDistrict}
        /> */}
        <div className={styles["map-container"]}>
            <VisglMapContainer viewState={viewState} />
        </div>
        <div className="" style={{}}>
        </div>
        {/* <MapboxMap viewState={viewState}/> */}
    </div>;
}
