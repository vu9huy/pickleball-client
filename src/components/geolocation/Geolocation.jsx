"use client";
import { useState, useEffect } from "react";
import styles from "./Geolocation.module.css";
import { useGetGeolocation } from "@/hooks/useGetGeolocation/useGetGeolocation";

export default function Timsan() {
    const [location, setLocation] = useState({});
    const [status, setStatus] = useState("");


    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                setStatus("Requesting location access...");
                navigator.geolocation.getCurrentPosition(success, error);
            } else {
                setStatus("Geolocation is not supported by this browser.");
            }
        };
    
        const success = (position) => {
            const crd = position?.coords;
            const latitude = crd?.latitude;
            const longitude = crd?.longitude;
    
            setStatus("Location access granted.");
            setLocation({ latitude, longitude });
        };
    
        const error = () => {
            setStatus("Unable to retrieve your location.");
        };
    
        getLocation();
    }, []);

    const handleGetGeolocation = () => {
        const getLocation = () => {
            if (navigator.geolocation) {
                setStatus("Requesting location access...");
                navigator.geolocation.getCurrentPosition(success, error);
            } else {
                setStatus("Geolocation is not supported by this browser.");
            }
        };
    
        const success = (position) => {
            const crd = position?.coords;
            const latitude = crd?.latitude;
            const longitude = crd?.longitude;
    
            setStatus("Location access granted.");
            setLocation({ latitude, longitude });
        };
    
        const error = () => {
            setStatus("Unable to retrieve your location.");
        };
    
        getLocation();
    }

    return <div className={styles["tim-san-container"]}>
        <div>
            <span>{status}</span>
            {location.latitude ? 
            <div>
                <p>Latitude: {location.latitude}, Longitude: {location.longitude}</p>
                <button onClick={()=>handleGetGeolocation()}>Truy cập vị trí mới</button>
            </div>
            : 
            <button className="" onClick={()=>handleGetGeolocation()}>Cho phép truy cập vị trí</button>}
        </div>
    </div>;
}
