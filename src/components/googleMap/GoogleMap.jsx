"use client";

import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import { useCallback, useState } from "react";
import MarkerComp from "./maker/Marker";
import Map2 from "./markerCluster/MarkerCluster";
import "./GoogleMap.css";
const containerStyle = {
    width: "600px",
    height: "600px"
};

const center = {
    lat: 21.02073721684185,
    lng: 105.80941235953625
};


const GoogleMapComp = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    const demoMapStyles = [
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                {
                    color: "#e9e9e9"
                },
                {
                    lightness: 17
                }
            ]
        },
        {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
                {
                    color: "#f5f5f5"
                },
                {
                    lightness: 20
                }
            ]
        },
        {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#ffffff"
                },
                {
                    lightness: 17
                }
            ]
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#ffffff"
                },
                {
                    lightness: 29
                },
                {
                    weight: 0.2
                }
            ]
        },
        {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
                {
                    color: "#ffffff"
                },
                {
                    lightness: 18
                }
            ]
        },
        {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
                {
                    color: "#ffffff"
                },
                {
                    lightness: 16
                }
            ]
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
                {
                    color: "#f5f5f5"
                },
                {
                    lightness: 21
                }
            ]
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
                {
                    color: "#dedede"
                },
                {
                    lightness: 21
                }
            ]
        },
        {
            elementType: "labels.text.stroke",
            stylers: [
                {
                    visibility: "on"
                },
                {
                    color: "#ffffff"
                },
                {
                    lightness: 16
                }
            ]
        },
        {
            elementType: "labels.text.fill",
            stylers: [
                {
                    saturation: 36
                },
                {
                    color: "#333333"
                },
                {
                    lightness: 40
                }
            ]
        },
        {
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
                {
                    color: "#f2f2f2"
                },
                {
                    lightness: 19
                }
            ]
        },
        {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#fefefe"
                },
                {
                    lightness: 20
                }
            ]
        },
        {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#fefefe"
                },
                {
                    lightness: 17
                },
                {
                    weight: 1.2
                }
            ]
        }
    ];

    return <div className='google-map-container'>
        {isLoaded ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                // onLoad={onLoad}
                onUnmount={onUnmount}
            // clickableIcons={false}
            // options={{ styles: demoMapStyles }}
            >
                {/* <MarkerComp position={center}/>
                <MarkerComp position={{ lat: 21.027763, lng: 105.834160 }}/> */}
                <Map2 />
            </GoogleMap>
        ) : <></>}
    </div>;

};
export default GoogleMapComp;