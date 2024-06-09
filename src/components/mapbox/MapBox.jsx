"use client";
import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapboxMap = () => {
    const customMarkerStyle = {
        width: "40px",
        height: "40px"
    };


    return (
        <Map
            mapboxAccessToken="pk.eyJ1IjoidnU5aHV5IiwiYSI6ImNseDdmdGVwdzB1aGsya3M1dmNybnE4enYifQ.Cx99uFgHkRZBKi7ygN3q7Q"
            initialViewState={{
                longitude: 105.7947648,
                latitude: 20.9780736,
                zoom: 15
            }}
            cooperativeGestures={true}
            style={{ width: 1000, height: 600 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        >
            <Marker
                longitude={105.7947648}
                latitude={20.9780736}
                anchor="bottom"
                clickable={true}
                onClick={() => alert("marker was clicked!")}
                title={"clickable google.maps.Marker"}

            >
                <img src="./logo-fit-96x96.png" style={customMarkerStyle} />
            </Marker>

            <Popup
                longitude={105.7947648}
                latitude={20.9780736}
                // onClose={() => setSelectedLocation(null)}
                closeOnClick={true}
                anchor="top"
                offsetTop={-80}
            >
                <div>rreoiklklkl</div>
            </Popup>
        </Map>
    );
};

export default MapboxMap;
