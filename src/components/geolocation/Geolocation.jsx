"use client";
import { useState, useEffect } from "react";
import styles from "./Geolocation.module.css";
import { useGetGeolocation } from "@/hooks/useGetGeolocation/useGetGeolocation";

const options = {
    enableHighAccuracy: true
    // timeout: 5000,
    // maximumAge: 0,
};

export default function Timsan() {
    const [status, setStatus] = useState("Checking location access...");
    const [location, setLocation] = useState({});
    const [hasPermission, setHasPermission] = useState(false);

    useEffect(() => {
        checkLocation();
    }, []);

    const checkLocation = async () => {
        if (navigator.permissions) {
            const result = await navigator.permissions.query({ name: "geolocation" });
            if (result.state === "granted") {
                setHasPermission(true);
                getLocation();
            } else if (result.state === "prompt") {
                getLocation();
            } else {
                setStatus("User denied the request for Geolocation.");
            }
        } else {
            getLocation();
        }
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error, options);
        } else {
            setStatus("Geolocation is not supported by this browser.");
        }
    };

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("position", position);
        setStatus("Location access granted.");
        setLocation({ latitude, longitude });
        setHasPermission(true);
    };

    const error = (err) => {
        switch (err.code) {
        case err.PERMISSION_DENIED:
            setStatus("User denied the request for Geolocation.");
            setHasPermission(false);
            break;
        case err.POSITION_UNAVAILABLE:
            setStatus("Location information is unavailable.");
            break;
        case err.TIMEOUT:
            setStatus("The request to get user location timed out.");
            break;
        default:
            setStatus("An unknown error occurred.");
            break;
        }
    };

    return (
        <div>
            <h1>Location Access Example</h1>
            <p>{status}</p>
            {location.latitude && (
                <p>
                    Latitude: {location.latitude}, Longitude: {location.longitude}
                </p>
            )}
            {hasPermission ?
                <button onClick={() => getLocation()}>
                    Re-Ask Location
                </button> : ""}
        </div>
    );
}
