"use client";

import { ClusteredCourtsMarkers } from "../cluster/ClusteredCourtsMarkers";
import { Map, useMap } from "@vis.gl/react-google-maps";
import { getCategories, loadCourtDataset } from "../../../data/courts/courts";
import { useState, useEffect, useMemo } from "react";
import { GOOGLE_MAP_MAP_ID, VIETNAME_BOUND, VIETNAME_CENTER_COORDINATES, COUNTRY_ZOOM } from "../constants/VisglMapConstant";

const convertCurrentView = (viewState, VIETNAME_CENTER_COORDINATES) => {
    const result = viewState?.lat && viewState?.lng ? viewState : VIETNAME_CENTER_COORDINATES;
    return result;
};

const convertCurrentZoom = (viewState, COUNTRY_ZOOM) => {
    const result = viewState?.zoom && viewState?.zoom != 0 ? viewState?.zoom : COUNTRY_ZOOM;
    return result;
};

const VisglMap = ({ viewState }) => {

    const [courts, setCourts] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // load data asynchronously
    useEffect(() => {
        loadCourtDataset().then(data => setCourts(data));
    }, []);

    const map = useMap();
    const currentView = convertCurrentView(viewState, VIETNAME_CENTER_COORDINATES);
    const currentZoom = convertCurrentZoom(viewState, COUNTRY_ZOOM);

    useEffect(() => {
        if (!map) return;
        map.setCenter(currentView);
        map.setZoom(currentZoom);
    }, [map, currentView.lat, currentView.lng, currentZoom]);

    // get category information for the filter-dropdown
    const categories = useMemo(() => getCategories(courts), [courts]);

    const filteredCourts = useMemo(() => {
        if (!courts) return null;
        return courts.filter(court => !selectedCategory || court.category === selectedCategory);
    }, [courts, selectedCategory]);

    return (
        <>
            <Map
                mapId={GOOGLE_MAP_MAP_ID}
                style={{ width: "100%", height: "100%" }}
                defaultCenter={VIETNAME_CENTER_COORDINATES}
                defaultZoom={COUNTRY_ZOOM}
                // minZoom={5.5}
                // maxZoom={18}
                gestureHandling={"greedy"}
                // gestureHandling={"cooperative"}
                disableDefaultUI={true}
                reuseMaps={true}
            // restriction={{
            //     latLngBounds: VIETNAME_BOUND,
            //     strictBounds: true
            // }}
            >
                {filteredCourts ?
                    <ClusteredCourtsMarkers map={map} courts={filteredCourts} categories={categories} setSelectedCategory={setSelectedCategory} /> :
                    ""}
            </Map>
        </>
    );
};


export default VisglMap;
