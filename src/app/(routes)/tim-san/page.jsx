"use client";

// import Geolocation from "@/components/geolocation/GeoLocation";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import SelectAddress from "@/components/selectAddress/SelectAddress";
// import MapboxMap from "@/components/mapbox/MapBox";
import VisglMapContainer from "@/components/googleMap/VisglMapProvider";
import { loadCourtDataset } from "@/data/courts/courts";
import filterCourtsByAddress from "@/helpers/filterCourtsByAddress";
import { COUNTRY_ZOOM, DISTRICT_ZOOM, PROVINCE_ZOOM, VIETNAME_CENTER_COORDINATES } from "@/components/googleMap/constants/VisglMapConstant";

// load data asynchronously
const getCourtsData = async ({ province, district, setCourts }) => {
    const data = await loadCourtDataset();
    const filteredCourts = filterCourtsByAddress({ data, province, district });
    setCourts(filteredCourts);
};

export default function TimSan() {
    // const [geolocation, setGeolocation] = useState({});

    const [courts, setCourts] = useState(null);
    const courtLength = courts?.length;
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");

    const [viewState, setViewState] = useState({
        lat: null,
        lng: null,
        zoom: null
    });

    useEffect(() => {
        getCourtsData({ province, district, setCourts });
    }, [province, district]);

    const selectProvince = (provinceSelected) => {
        setProvince(provinceSelected);
        setDistrict("");
        if (!provinceSelected?.geolocation?.latitude && !provinceSelected?.geolocation?.longitude) {
            console.log("Error: Province geolocation not exist");
        }
        const newViewState = {
            lat: provinceSelected.geolocation.latitude,
            lng: provinceSelected?.geolocation?.longitude,
            zoom: PROVINCE_ZOOM
        };
        // select Tất cả các tỉnh/thành
        if (!provinceSelected.value) {
            Object.assign(newViewState, { lat: VIETNAME_CENTER_COORDINATES.lat, lng: VIETNAME_CENTER_COORDINATES.lng, zoom: COUNTRY_ZOOM });
        }

        setViewState(newViewState);
    };

    const selectDistrict = (districtSelected) => {
        setDistrict(districtSelected);
        if (!districtSelected?.geolocation?.latitude && !districtSelected?.geolocation?.longitude) {
            console.log("Error: District geolocation not exist");
        }
        const newViewState = {
            lat: districtSelected.geolocation.latitude,
            lng: districtSelected?.geolocation?.longitude,
            zoom: DISTRICT_ZOOM
        };
        // select Tất cả các quận/huyện
        if (!districtSelected?.value) {
            Object.assign(newViewState, { zoom: PROVINCE_ZOOM });
        }

        setViewState(newViewState);
    };

    return <div className={styles["tim-san-container"]}>
        {/* <Geolocation geolocation={geolocation} setGeolocation={setGeolocation} /> */}
        <SelectAddress
            province={province}
            selectProvince={selectProvince}
            district={district}
            selectDistrict={selectDistrict}
        />
        <span className={styles["courts-number-container"]}>Số lượng sân: <span className={styles["courts-number"]}>{courtLength}</span> sân</span>
        <div className={styles["map-container"]}>
            <VisglMapContainer viewState={viewState} courts={courts} />
        </div>
        <div className="" style={{}}>
        </div>
        {/* <MapboxMap viewState={viewState}/> */}
    </div>;
}
