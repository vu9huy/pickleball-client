"use client";

import { ClusteredCourtsMarkers } from "../cluster/ClusteredCourtsMarkers";
import { Map } from "@vis.gl/react-google-maps";
import { getCategories, loadCourtDataset } from "../data/courts";
import { useState, useEffect, useMemo } from "react";
import { ControlPanel } from "../controlPannel/ControlPannel";
import { GOOGLE_MAP_MAP_ID, VIETNAME_BOUND, VIETNAME_CENTER_COORDINATES, COUNTRY_ZOOM } from "../VisglMapConstant";

const VisglMap = () => {

    const [courts, setCourts] = useState();
    const [selectedCategory, setSelectedCategory] = useState(null);

    // load data asynchronously
    useEffect(() => {
        loadCourtDataset().then(data => setCourts(data));
    }, []);

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
                    <ClusteredCourtsMarkers courts={filteredCourts} categories={categories} setSelectedCategory={setSelectedCategory} /> :
                    ""}
            </Map>
            {/* <ControlPanel
                categories={categories}
                onCategoryChange={setSelectedCategory}
            /> */}
        </>
    );
};


export default VisglMap;
