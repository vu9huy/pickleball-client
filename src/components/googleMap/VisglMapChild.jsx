"use client";

import React, { useEffect } from "react";
import { Map, useMap } from "@vis.gl/react-google-maps";
import VisglMarkers from "./VisglMarker";
import { GOOGLE_MAP_MAP_ID, VIETNAME_BOUND, VIETNAME_CENTER_COORDINATES, COUNTRY_ZOOM } from "./VisglMapConstant";

const convertCurrentView = (viewState, VIETNAME_CENTER_COORDINATES) => {
    const result = viewState?.lat && viewState?.lng ? viewState : VIETNAME_CENTER_COORDINATES;
    return result;
};

const convertCurrentZoom = (viewState, COUNTRY_ZOOM) => {
    const result = viewState?.zoom && viewState?.zoom != 0 ? viewState?.zoom : COUNTRY_ZOOM;
    return result;
};

const courts = [
    { lat: 21.03084456566645, lng: 105.90984335934346, key: "1" },
    { lat: 21.04084456566645, lng: 105.80984335934346, key: "2" },
    { lat: 21.06084456566645, lng: 105.60984335934346, key: "3" },
    { lat: 21.09084456566645, lng: 105.10984335934346, key: "4" }
];

const VisglMapChild = ({ viewState }) => {
    const map = useMap();
    const currentView = convertCurrentView(viewState, VIETNAME_CENTER_COORDINATES);
    const currentZoom = convertCurrentZoom(viewState, COUNTRY_ZOOM);

    useEffect(() => {
        if (!map) return;
        map.setCenter(currentView);
        map.setZoom(currentZoom);
    }, [map, currentView.lat, currentView.lng, currentZoom]);

    return (
        <Map
            mapId={GOOGLE_MAP_MAP_ID}
            style={{ width: "100%", height: "100%" }}
            defaultCenter={VIETNAME_CENTER_COORDINATES}
            defaultZoom={COUNTRY_ZOOM}
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
            <VisglMarkers points={courts} />
        </Map>
    );
};


export default VisglMapChild;
