import { useState } from "react";
import InfoWindowComp from "../infoWindow/InfoWindowComp";

const { Marker} = require("@react-google-maps/api")


const MarkerComp = ({position,}) => {

    const [isDisplayInfoWindow, setIsDisplayInfoWindow] = useState(false);

    const handleClickMarker = () => {
        console.log('handleClickMarker');
        setIsDisplayInfoWindow(true)
    }
 
    return(
        <Marker 
            position={position} 
            icon={{
                url: "/logo-fit-96x96.png",
                scaledSize: new window.google.maps.Size(40, 40),
            }}
            onClick={()=>handleClickMarker()}
            >
                {isDisplayInfoWindow ? 
                <InfoWindowComp position={position} setIsDisplayInfoWindow={setIsDisplayInfoWindow}/>:
                ""}
            </Marker>
    )
}
export default MarkerComp;
