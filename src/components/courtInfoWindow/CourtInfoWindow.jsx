import Image from "next/image";
import styles from "./CourtInfoWindow.module.css";
import Link from "next/link";

const CourtInfoWindow = ({ court }) => {

    return (
        <div className={styles["court-info-window-container"]}>
            <h2 className={styles["court-info-window-title"]}>{court.title}</h2>
            <p className={styles["court-info-window-description"]}>{court.description}</p>
            <div className={styles["court-info-window-images-wrapper"]}>
                {court.images.map((image, index) => {
                    return <Image key={index} src={image.url} alt={image.alt} width={50} height={50} />;
                })}
            </div>
            <Link className={styles["court-info-window-google-map-link"]} target="_blank" rel="noopener noreferrer nofollow" href={`https://maps.google.com/?q=${court.latitude},${court.longitude}`} passHref={true}>
                Mở trong google map
            </Link>
        </div >
    );
};
export default CourtInfoWindow;