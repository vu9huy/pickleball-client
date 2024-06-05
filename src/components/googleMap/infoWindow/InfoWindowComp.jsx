const { InfoWindow} = require("@react-google-maps/api")


const InfoWindowComp = ({position, setIsDisplayInfoWindow}) => {

    const handleCloseInfoWindow = () => {
        setIsDisplayInfoWindow(false)
    }

    return(
        <InfoWindow 
        position={position} 
        options={{ pixelOffset: new window.google.maps.Size(0, -40) }}
        onCloseClick={() => handleCloseInfoWindow()}>
            <div>dfdfdffddf</div>
        </InfoWindow>
    )
}
export default InfoWindowComp;
