import React, { useCallback } from "react";
import { AdvancedMarker, useMap } from "@vis.gl/react-google-maps";
import Image from "next/image";

export const TreeMarker = (props) => {
    const { tree, onClick, setMarkerRef } = props;

    const handleClick = useCallback(() => onClick(tree), [onClick, tree]);
    const ref = useCallback(
        (marker) =>
            setMarkerRef(marker, tree.key),
        [setMarkerRef, tree.key]
    );

    return (
        <AdvancedMarker position={tree.position} ref={ref} onClick={handleClick}>
            <Image src="/logo-fit-96x96.png" alt="court marker" width={45} height={45} />
        </AdvancedMarker>
    );
};
