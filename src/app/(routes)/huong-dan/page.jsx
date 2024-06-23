import { getMetadataGeneral } from "@/metadata/universal/metadataGeneral";
import styles from "./page.module.css";


export const metadata = getMetadataGeneral("huong-dan");

export default function HuongDan() {

    return <div className={styles["huong-dan-container"]}>
        Hướng dẫn
    </div>;
}
