import React, { useEffect, useState, useRef } from "react";
import { useMap, AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import Image from "next/image";

const VisglMarkers = ({ points }) => {
    const map = useMap();
    const [markers, setMarkers] = useState({});
    const clusterer = useRef(null);

    // // Initialize MarkerClusterer
    useEffect(() => {
        if (!map) return;
        if (!clusterer.current) {
            clusterer.current = new MarkerClusterer({ map });
        }
    }, [map]);

    // Update markers
    useEffect(() => {
        clusterer.current?.clearMarkers();
        clusterer.current?.addMarkers(Object.values(markers));
    }, [markers]);

    const setMarkerRef = (marker, key) => {
        if (marker && markers[key]) return;
        if (!marker && !markers[key]) return;

        setMarkers(prev => {
            if (marker) {
                return { ...prev, [key]: marker };
            } else {
                const newMarkers = { ...prev };
                delete newMarkers[key];
                return newMarkers;
            }
        });
    };

    const [markerSelected, setMarkerSelected] = useState(null);

    console.log("markerSelected", markerSelected);

    return (
        <>
            {points.map((point, index) => (
                <AdvancedMarker
                    position={point}
                    key={point.key}
                    ref={marker => setMarkerRef(marker, point.key)}
                    onClick={() => setMarkerSelected(points[index])}>
                    <Image src="/logo-fit-96x96.png" alt="court marker" width={45} height={45} />
                    {markerSelected ?
                        <InfoWindow
                            position={markerSelected}
                            options={{ pixelOffset: new window.google.maps.Size(0, -45) }}
                            onCloseClick={() => setMarkerSelected(null)}
                        >
                            <div className="">jdfjkfdkjdfjkjk</div>
                        </InfoWindow> : ""}
                </AdvancedMarker>
            ))}
        </>
    );
};

export default VisglMarkers;