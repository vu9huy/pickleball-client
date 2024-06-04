import { useState } from "react";


export const useGetGeolocation = () => {

    const [location, setLocation] = useState({});
    const [status, setStatus] = useState("");

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

    return ({location, status})
}
