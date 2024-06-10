"use client";
// import * as React from "react";
// import { useRef } from "react";
// import { Map, Source, Layer } from "react-map-gl";
// import { clusterLayer, clusterCountLayer, unclusteredPointLayer } from "./layers";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_API_KEY; // Set your mapbox token here

// export default function MapboxMapTest() {
//     const mapRef = useRef(null);

//     const onClick = event => {
//         const feature = event.features[0];
//         const clusterId = feature.properties.cluster_id;

//         const mapboxSource = mapRef.current.getSource("earthquakes");

//         mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
//             if (err) {
//                 return;
//             }

//             mapRef.current.easeTo({
//                 center: feature.geometry.coordinates,
//                 zoom,
//                 duration: 500
//             });
//         });
//     };

//     return (
//         <>
//             <Map
//                 initialViewState={{
//                     latitude: 40.67,
//                     longitude: -103.59,
//                     zoom: 3
//                 }}
//                 mapStyle="mapbox://styles/mapbox/dark-v9"
//                 mapboxAccessToken={MAPBOX_TOKEN}
//                 style={{ width: 1000, height: 600 }}
//                 interactiveLayerIds={[clusterLayer.id]}
//                 onClick={onClick}
//                 ref={mapRef}
//             >
//                 <Source
//                     id="earthquakes"
//                     type="geojson"
//                     data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
//                     cluster={true}
//                     clusterMaxZoom={14}
//                     clusterRadius={50}
//                 >
//                     <Layer {...clusterLayer} />
//                     <Layer {...clusterCountLayer} />
//                     <Layer {...unclusteredPointLayer} />
//                 </Source>
//             </Map>
//         </>
//     );
// }
import React, { useState } from 'react';
import Map, { Source, Layer } from 'react-map-gl';

// Sample point data
const samplePoints = [
    { latitude: 20.1780736, longitude: 105.1947648 },
    { latitude: 20.2780736, longitude: 105.5947648 },
    { latitude: 20.6780736, longitude: 105.3947648 },
    { latitude: 20.2780736, longitude: 105.3947648 },
    { latitude: 20.9780736, longitude: 105.7947648 }
    // Add more points as needed
];

// Function to generate GeoJSON data from points
const generateGeoJSON = (points) => {
    return {
        type: 'FeatureCollection',
        features: points.map(point => ({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [point.longitude, point.latitude],
            },
            properties: point,
        })),
    };
};

const renderMarker = (point, index) => {
    if (viewport.zoom > 14) {
        // Custom marker for high zoom levels
        return (
            <Marker key={index} latitude={point.latitude} longitude={point.longitude}>
                <div
                    style={{
                        backgroundColor: 'red',
                        borderRadius: '50%',
                        padding: '10px',
                        color: 'white',
                        cursor: 'pointer'
                    }}
                    onClick={() => setSelectedPoint(point)}
                >
                    High Zoom Marker
                </div>
            </Marker>
        );
    } else {
        // Custom marker for low zoom levels
        return (
            <Marker key={index} latitude={point.latitude} longitude={point.longitude}>
                <div
                    style={{
                        backgroundColor: 'blue',
                        borderRadius: '50%',
                        padding: '5px',
                        color: 'white',
                        cursor: 'pointer'
                    }}
                    onClick={() => setSelectedPoint(point)}
                >
                    Low Zoom Marker
                </div>
            </Marker>
        );
    }
};

const MapboxMapTest = () => {

    const geojson = generateGeoJSON(samplePoints);

    const clusterLayer = {
        id: 'clusters',
        type: 'circle',
        source: 'points',
        filter: ['has', 'point_count'],
        paint: {
            'circle-color': [
                'step',
                ['get', 'point_count'],
                '#51bbd6',
                100,
                '#f1f075',
                750,
                '#f28cb1',
            ],
            'circle-radius': [
                'step',
                ['get', 'point_count'],
                20,
                100,
                30,
                750,
                40,
            ],
        },
    };

    const clusterCountLayer = {
        id: 'cluster-count',
        type: 'symbol',
        source: 'points',
        filter: ['has', 'point_count'],
        layout: {
            'text-field': '{point_count_abbreviated}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12,
        },
    };

    const unclusteredPointLayer = {
        id: 'unclustered-point',
        type: 'circle',
        source: 'points',
        filter: ['!', ['has', 'point_count']],
        paint: {
            'circle-color': '#11b4da',
            'circle-radius': 8,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#fff',
        },
    };

    const customMarkersLayer = {
        id: 'custom-markers',
        type: 'symbol',
        source: 'points',
        filter: ['!', ['has', 'point_count']],
        paint: {
            'icon-image': './logo-fit-96x96.png', // Use a custom marker image
            'icon-size': 1.5,
            'icon-allow-overlap': true,
        },
    };

    return (
        <Map
            initialViewState={{
                latitude: 20.1780736,
                longitude: 105.1947648,
                zoom: 3
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={MAPBOX_TOKEN}
            style={{ width: 1000, height: 600 }}
            interactiveLayerIds={[clusterLayer.id]}
        // ref={mapRef}
        >
            <Source
                id="points"
                type="geojson"
                data={geojson}
                cluster={true}
                clusterMaxZoom={14}
                clusterRadius={50}
            >
                <Layer {...clusterLayer} />
                <Layer {...clusterCountLayer} />
                {/* <Layer {...unclusteredPointLayer} /> */}
                <Layer {...customMarkersLayer} />
            </Source>
        </Map>
    );
};


export default MapboxMapTest;
