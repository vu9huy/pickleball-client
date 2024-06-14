"use client";

import React from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import styles from "./VisglMap.module.css";
import VisglMapChild from "./VisglMapChild";
import { GOOGLE_MAP_API_KEY, VIETNAME_REGION_CODE, VIETNAMESE_LANGUAGE_CODE } from "./VisglMapConstant";

const VisglMap = ({ viewState }) => {
    return (
        <div className={styles["visgl-map-container"]}>
            <APIProvider
                apiKey={GOOGLE_MAP_API_KEY}
                region={VIETNAME_REGION_CODE}
                language={VIETNAMESE_LANGUAGE_CODE}
            >
                < VisglMapChild viewState={viewState} />
            </APIProvider>
        </div>
    );
};


export default VisglMap;
