"use client";

import React from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import { GOOGLE_MAP_API_KEY, VIETNAME_REGION_CODE, VIETNAMESE_LANGUAGE_CODE } from "./VisglMapConstant";
import VisglMap from "./visglMap/VisglMap";
import styles from "./VisglMapProvider.module.css";

const VisglMapContainer = () => {
    return (
        <div className={styles["visgl-map-provider"]}>
            <APIProvider
                apiKey={""}
                region={VIETNAME_REGION_CODE}
                language={VIETNAMESE_LANGUAGE_CODE}
            >
                <VisglMap />
            </APIProvider>
        </div>
    );
};


export default VisglMapContainer;
