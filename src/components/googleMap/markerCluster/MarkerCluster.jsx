import React from "react";
import { MarkerClusterer, Marker } from "@react-google-maps/api";

const Pin = ({ position, index, clusterer }) => (
    <Marker key={index} position={position} clusterer={clusterer} />
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
    // <GoogleMap
    //   id="marker-example"
    //   mapContainerStyle={{
    //     height: "400px",
    //     width: "800px"
    //   }}
    //   zoom={15}
    //   center={{ lat: -42.735258, lng: 147.438 }}
    //   options={{ styles: demoMapStyles }}
    // >
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
    // </GoogleMap>
    );
};

export default Map2;
