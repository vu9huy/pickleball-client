import React, { useCallback } from "react";
import { AdvancedMarker } from "@vis.gl/react-google-maps";
import Image from "next/image";

export const CourtMarker = (props) => {
    const { court, onClick, setMarkerRef } = props;

    const handleClick = useCallback(() => onClick(court), [onClick, court]);
    const ref = useCallback(
        (marker) =>
            setMarkerRef(marker, court.key),
        [setMarkerRef, court.key]
    );

    return (
        <AdvancedMarker position={court.position} ref={ref} onClick={handleClick}>
            <Image src="/logo-fit-96x96.png" alt="court marker" width={45} height={45} />
        </AdvancedMarker>
    );
};
