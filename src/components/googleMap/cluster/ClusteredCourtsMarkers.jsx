// import { useMap } from "@vis.gl/react-google-maps";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { CourtMarker } from "../marker/CourtMarker";
import VisglInfoWindow from "../infoWindow/InfoWindow";
import MarkerControlPanel from "../controlPannel/ControlPannel";
import { COURT_ZOOM, LAT_ZOOM_INFOWINDOW } from "../constants/VisglMapConstant";


export const ClusteredCourtsMarkers = ({ map, courts, categories, setSelectedCategory }) => {
    const [markers, setMarkers] = useState({});
    const [selectedCourtKey, setSelectedCourtKey] = useState(null);

    const selectedCourt = useMemo(
        () =>
            courts && selectedCourtKey
                ? courts.find(t => t.key === selectedCourtKey) || null
                : null,
        [courts, selectedCourtKey]
    );

    // create the markerClusterer once the map is available and update it when
    // the markers are changed
    // const map = useMap();
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
        setSelectedCourtKey(null);
    }, []);

    const handleMarkerClick = useCallback((court) => {
        setSelectedCourtKey(court.key);
    }, []);

    const handleZoom = (selectedCourt) => {
        const coordinates = {
            // Cộng LAT_ZOOM_INFOWINDOW để zoom vào infowindow thay vì marker, nếu không cộng thì sẽ zoom vào marker và infowindow sẽ bị che mất
            lat: selectedCourt?.position?.lat + LAT_ZOOM_INFOWINDOW,
            lng: selectedCourt?.position?.lng
        };
        map.setCenter(coordinates);
        map.setZoom(COURT_ZOOM);
    };

    return (
        <>
            {courts.map(court => (
                <CourtMarker
                    key={court.key}
                    court={court}
                    onClick={handleMarkerClick}
                    setMarkerRef={setMarkerRef}
                />
            ))}
            <VisglInfoWindow
                selectedCourtKey={selectedCourtKey}
                markers={markers}
                handleInfoWindowClose={handleInfoWindowClose}
                selectedCourt={selectedCourt}
                handleZoom={handleZoom}
            />
            {/* <MarkerControlPanel
                categories={categories}
                onCategoryChange={setSelectedCategory}
                setSelectedCourtKey={setSelectedCourtKey}
            /> */}
        </>
    );
};
