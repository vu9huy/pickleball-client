import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow, MarkerClusterer } from "@react-google-maps/api";

const containerStyle = {
    width: "800px",
    height: "600px"
};

const center = { lat: 21.03084456566645, lng: 105.90984335934346 };

const locations = [
    { lat: 21.03084456566645, lng: 105.90984335934346 },
    { lat: 21.04084456566645, lng: 105.80984335934346 },
    { lat: 21.05084456566645, lng: 105.30984335934346 },
    { lat: 21.06084456566645, lng: 105.60984335934346 },
    { lat: 21.09084456566645, lng: 105.10984335934346 }
];

const GoogleMapTest = () => {
    const [selected, setSelected] = useState(null);

    const handleMarkerClick = useCallback((location) => {
        setSelected(location);
    }, []);

    const handleInfoWindowCloseClick = useCallback(() => {
        setSelected(null);
    }, []);

    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <MarkerClusterer>
                    {(clusterer) =>
                        locations.map((location, index) => (
                            <Marker
                                key={index}
                                position={location}
                                clusterer={clusterer}
                                onClick={() => handleMarkerClick(location)}
                            />
                        ))
                    }
                </MarkerClusterer>
                {selected && (
                    <InfoWindow
                        position={selected}
                        onCloseClick={handleInfoWindowCloseClick}
                    >
                        <div>
                            <h2>Info Window</h2>
                            <p>Location: {selected.lat}, {selected.lng}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapTest;
