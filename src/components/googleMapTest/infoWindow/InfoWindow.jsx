import CourtInfoWindow from "@/components/courtInfoWindow/CourtInfoWindow";
import { InfoWindow } from "@vis.gl/react-google-maps";

const VisglInfoWindow = ({ selectedCourtKey, markers, handleInfoWindowClose, selectedCourt, handleZoom }) => {

    console.log("selectedCourt", selectedCourt);

    return (
        <>
            {selectedCourtKey && (
                <InfoWindow
                    anchor={markers[selectedCourtKey]}
                // onCloseClick={handleInfoWindowClose}
                >
                    <CourtInfoWindow court={selectedCourt} handleZoom={handleZoom} handleInfoWindowClose={handleInfoWindowClose} />
                </InfoWindow>
            )}</>
    );
};

export default VisglInfoWindow;
