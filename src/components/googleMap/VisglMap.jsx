"use client";

import React, { useState } from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import VisglMarkers from "./VisglMarker";
import styles from "./VisglMap.module.css";

const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
const GOOGLE_MAP_MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID;

const VIETNAME_BOUND = {
    north: 28,
    south: 4.5,
    east: 127,
    west: 84
};
const VIETNAME_CENTER_COORDINATES = { lat: 17.040599244762088, lng: 106.79101417303454 };
const VIETNAME_REGION_CODE = "VN";
const VIETNAMESE_LANGUAGE_CODE = "vi";

const convertCurrentView = (viewState) => {
    const result = viewState?.lat && viewState?.lng ? viewState : VIETNAME_CENTER_COORDINATES;
    return result;
}

const VisglMap = ({ viewState }) => {

    const trees = [
        { lat: 21.03084456566645, lng: 105.90984335934346, key: "1" },
        { lat: 21.04084456566645, lng: 105.80984335934346, key: "2" },
        { lat: 21.06084456566645, lng: 105.60984335934346, key: "3" },
        { lat: 21.09084456566645, lng: 105.10984335934346, key: "4" }
    ];

    const currentView = convertCurrentView(viewState);

    return (
        <div className={styles["visgl-map-container"]}>
            <APIProvider
                apiKey={GOOGLE_MAP_API_KEY}
                region={VIETNAME_REGION_CODE}
                language={VIETNAMESE_LANGUAGE_CODE}
            >
                <Map
                    mapId={GOOGLE_MAP_MAP_ID}
                    style={{ width: "100%", height: "100%" }}
                    defaultCenter={currentView}
                    defaultZoom={5.5}
                    // minZoom={5.5}
                    // maxZoom={18}
                    gestureHandling={"cooperative"}
                    disableDefaultUI={true}
                    reuseMaps={true}
                    restriction={{
                        latLngBounds: VIETNAME_BOUND,
                        strictBounds: true
                    }}
                >
                    <VisglMarkers points={trees} />
                </Map>
            </APIProvider >
        </div>
    );
};


export default VisglMap;
