import { useMap } from "@vis.gl/react-google-maps";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { TreeMarker } from "../marker/TreeMarker";
import VisglInfoWindow from "../infoWindow/InfoWindow";
import { ControlPanel } from "../controlPannel/ControlPannel";


export const ClusteredCourtsMarkers = ({ courts, categories, setSelectedCategory }) => {
    const [markers, setMarkers] = useState({});
    const [selectedTreeKey, setSelectedTreeKey] = useState(null);

    const selectedTree = useMemo(
        () =>
            courts && selectedTreeKey
                ? courts.find(t => t.key === selectedTreeKey) || null
                : null,
        [courts, selectedTreeKey]
    );

    // create the markerClusterer once the map is available and update it when
    // the markers are changed
    const map = useMap();
    const clusterer = useMemo(() => {
        if (!map) return null;

        return new MarkerClusterer({ map });
    }, [map]);

    useEffect(() => {
        if (!clusterer) return;

        clusterer.clearMarkers();
        clusterer.addMarkers(Object.values(markers));
    }, [clusterer, markers]);

    // this callback will effectively get passsed as ref to the markers to keep
    // tracks of markers currently on the map
    const setMarkerRef = useCallback((marker, key) => {
        setMarkers(markers => {
            if ((marker && markers[key]) || (!marker && !markers[key]))
                return markers;

            if (marker) {
                return { ...markers, [key]: marker };
            } else {
                const { [key]: _, ...newMarkers } = markers;
                return newMarkers;
            }
        });
    }, []);

    const handleInfoWindowClose = useCallback(() => {
        setSelectedTreeKey(null);
    }, []);

    const handleMarkerClick = useCallback((tree) => {
        setSelectedTreeKey(tree.key);
    }, []);

    const handleZoom = (selectedCourt) => {
        console.log("selectedCourt", selectedCourt?.position);
        map.setCenter(selectedCourt?.position);
        map.setZoom(12);
    };

    return (
        <>
            {courts.map(tree => (
                <TreeMarker
                    key={tree.key}
                    tree={tree}
                    onClick={handleMarkerClick}
                    setMarkerRef={setMarkerRef}
                />
            ))}
            <VisglInfoWindow
                selectedTreeKey={selectedTreeKey}
                markers={markers}
                handleInfoWindowClose={handleInfoWindowClose}
                selectedTree={selectedTree}
                handleZoom={handleZoom}
            />
            <ControlPanel
                categories={categories}
                onCategoryChange={setSelectedCategory}
                setSelectedTreeKey={setSelectedTreeKey}
            />
        </>
    );
};
