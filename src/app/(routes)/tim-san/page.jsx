"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export async function generateMetadata() {
    const product = await fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => res.json());
    return {
        title: product.title,
        description: product.body
    };
}

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
            console.log("positionfdkjfdjk", position);
            const crd = position?.coords;
            const latitude = crd?.latitude;
            const longitude = crd?.longitude;

            setStatus("Location access granted.");
            setLocation({ latitude, longitude });
        };

        const error = () => {
            console.log("not access");
            setStatus("Unable to retrieve your location.");
        };

        getLocation();
    }, []);

    return <div className={styles["tim-san-container"]}>
        <div>
            <span>{status}</span>
            {location.latitude && (
                <p>
                    Latitude: {location.latitude}, Longitude: {location.longitude}
                </p>
            )}
        </div>
    </div>;
}
