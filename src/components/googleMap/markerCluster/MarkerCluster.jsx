import React from "react";
import { MarkerClusterer, Marker } from "@react-google-maps/api";
import MarkerComp from "../maker/Marker";

const Pin = ({ position, index, clusterer }) => (
    <MarkerComp key={index} position={position} clusterer={clusterer} />
);

const Map2 = ({ children }) => {
    const listings = [
        { lat: 21.03084456566645, lng: 105.90984335934346 },
        { lat: 21.04084456566645, lng: 105.80984335934346 },
        { lat: 21.05084456566645, lng: 105.30984335934346 },
        { lat: 21.06084456566645, lng: 105.60984335934346 },
        { lat: 21.09084456566645, lng: 105.10984335934346 }
    ];
    let testArray = [];
    for (let i = 0; i < listings.length; i++) {
        let location = listings[i];
        testArray.push(
            <Pin position={location} id={i} key={i} clusterer={listings} />
        );
    }

    return (
        <MarkerClusterer
            options={{
                imagePath:
                    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
                styles: []
            }}
        >
            {clusterer =>
                listings.map((location, i) => (
                    <Pin key={i} position={location} clusterer={clusterer} />
                ))
            }
        </MarkerClusterer>
    );
};

export default Map2;
