"use client";

import React from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import { GOOGLE_MAP_API_KEY, VIETNAME_REGION_CODE, VIETNAMESE_LANGUAGE_CODE } from "./constants/VisglMapConstant";
import VisglMap from "./visglMap/VisglMap";
import "./VisglMapProvider.css";

const VisglMapContainer = ({ viewState, courts }) => {
    return (
        <div className="visgl-map-provider">
            <APIProvider
                // apiKey={GOOGLE_MAP_API_KEY}
                apiKey={""}
                region={VIETNAME_REGION_CODE}
                language={VIETNAMESE_LANGUAGE_CODE}
            >
                <VisglMap viewState={viewState} courts={courts} />
            </APIProvider>
        </div>
    );
};


export default VisglMapContainer;
