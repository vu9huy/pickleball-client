"use client";

import Geolocation from "@/components/geolocation/GeoLocation";
import styles from "./page.module.css";
import { useState } from "react";
import SelectAddress from "@/components/selectAddress/SelectAddress";
// import MapboxMap from "@/components/mapbox/MapBox";
import GoogleMapComp from "@/components/googleMap/GoogleMap";
import GoogleMapTest from "@/components/googleMap/GoogleMapTest";
import VisglMap from "@/components/googleMap/visgl/VisglMap";
// import MapBoxCluster from "@/components/mapbox/cluster(current not use)/MapBoxCluster";
// import MapBoxTest from "@/components/mapbox/test/MapBoxTest";

const PROVINCE_ZOOM = 11;
const DISTRICT_ZOOM = 12.5;
const MAPBOX_DEFAULT_ZOOM = 12.5;

export default function TimSan() {
    const [geolocation, setGeolocation] = useState({});

    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [viewState, setViewState] = useState({
        longitude: 105.757403,
        latitude: 20.956594,
        zoom: MAPBOX_DEFAULT_ZOOM
    });

    const selectProvince = (value) => {
        setProvince(value);
        setDistrict("");
        const viewState = {
            longitude: 105.757403,
            latitude: 20.956594,
            zoom: PROVINCE_ZOOM
        };
        setViewState(viewState);
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
        {/* <GoogleMapComp /> */}
        {/* <MapBoxTest /> */}
        {/* <MapBoxCluster /> */}
        {/* <GoogleMapTest /> */}
        <div className="" style={{ width: "800px", height: "600px" }}>
            <VisglMap />
        </div>
    </div>;
}
