import Geolocation from "@/components/geolocation/GeoLocation";
import styles from "./page.module.css";

export default function Timsan() {

    return <div className={styles["tim-san-container"]}>
        <Geolocation/>
    </div>;
}
