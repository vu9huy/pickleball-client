import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import VisglMarkers from "./VisglMarker";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

const trees = [
    { name: "dsjhds", lat: 21.03084456566645, lng: 105.90984335934346, key: "1" },
    { name: "axzzx", lat: 21.04084456566645, lng: 105.80984335934346, key: "2" },
    { name: "iuio", lat: 21.06084456566645, lng: 105.60984335934346, key: "3" },
    { name: "gvbvb", lat: 21.09084456566645, lng: 105.10984335934346, key: "4" }
];

const VisglMap = () => {
    return (
        <APIProvider
            apiKey={API_KEY}
            region={"VN"}
            language={"vi"}
        >
            <Map
                mapId={"729e7c3cebfeadab"}
                style={{ width: "100%", height: "100%" }}
                defaultCenter={{ lat: 21.03084456566645, lng: 105.90984335934346 }}
                defaultZoom={10}
                gestureHandling={"cooperative"}
                disableDefaultUI={true}
                reuseMaps={true}
            >
                {/* <Markers points={trees} /> */}
                <VisglMarkers points={trees} />
            </Map>
        </APIProvider >
    );
};


export default VisglMap;
