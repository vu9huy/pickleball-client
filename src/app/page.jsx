import styles from "./homepage.module.css";
import { getMetadataGeneral } from "@/seo/metadata/metadataGeneral";


export const metadata = getMetadataGeneral("/");

export default function Home() {
    return <div className={styles["home-container"]}>
        fddfdf
    </div>;
}
