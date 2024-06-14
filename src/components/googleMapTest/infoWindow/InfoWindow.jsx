import { InfoWindow } from "@vis.gl/react-google-maps";

const VisglInfoWindow = ({ selectedTreeKey, markers, handleInfoWindowClose, selectedTree, handleZoom }) => {


    return (
        <>
            {selectedTreeKey && (
                <InfoWindow
                    anchor={markers[selectedTreeKey]}
                    onCloseClick={handleInfoWindowClose}>
                    <div className="">
                        <h1>{selectedTree?.name}</h1>
                        <p>dfsjkdfskjdskjsd</p>
                        <button onClick={() => handleZoom(selectedTree)}>Zoom</button>
                    </div>
                </InfoWindow>
            )}</>
    );
};

export default VisglInfoWindow;
