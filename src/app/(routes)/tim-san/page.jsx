"use client";

import Geolocation from "@/components/geolocation/GeoLocation";
import styles from "./page.module.css";
import MapboxMap from "@/components/mapbox/MapBox";
import { useState } from "react";
import SelectAddress from "@/components/selectAddress/SelectAddress";
// import GoogleMapComp from "@/components/googleMap/GoogleMap";
// import MapBoxCluster from "@/components/mapbox/cluster(current not use)/MapBoxCluster";
// import MapBoxTest from "@/components/mapbox/test/MapBoxTest";

export default function TimSan() {
    const [geolocation, setGeolocation] = useState({});

    const [provinces, setProvinces] = useState("");
    const [district, setDistrict] = useState("");

    return <div className={styles["tim-san-container"]}>
        <Geolocation geolocation={geolocation} setGeolocation={setGeolocation} />
        <SelectAddress provinces={provinces} setProvinces={setProvinces} district={district} setDistrict={setDistrict} />
        {/* <MapboxMap geolocation={geolocation} setGeolocation={setGeolocation}/> */}
        {/* <GoogleMapComp /> */}
        {/* <MapBoxTest /> */}
        {/* <MapBoxCluster /> */}
    </div>;
}
