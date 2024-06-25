import CourtInfoWindow from "@/components/courtInfoWindow/CourtInfoWindow";
import { InfoWindow } from "@vis.gl/react-google-maps";

const VisglInfoWindow = ({ selectedCourtKey, markers, handleInfoWindowClose, selectedCourt, handleZoomCourt }) => {


    return (
        <>
            {selectedCourtKey && (
                <InfoWindow
                    anchor={markers[selectedCourtKey]}
                // onCloseClick={handleInfoWindowClose}
                >
                    <CourtInfoWindow court={selectedCourt} handleZoom={handleZoomCourt} handleInfoWindowClose={handleInfoWindowClose} />
                </InfoWindow>
            )}</>
    );
};

export default VisglInfoWindow;
