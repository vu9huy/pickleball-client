import styles from "./CourtInfoWindow.module.css";
import Link from "next/link";
import ReactResponsiveCarousel from "../slider/ReactResposiveCarousel";

const CourtInfoWindow = ({ court, loading, handleInfoWindowClose, handleZoom }) => {

    return (
        <div className={styles["court-info-window-container"]}>
            <div className={styles["court-info-window-close-button"]} onClick={handleInfoWindowClose}>
                <p>+</p>
            </div>
            <div className={styles["court-info-window-header"]} >
                <h2 className={styles["court-info-window-title"]}>{court.name}</h2>
            </div>
            <div className={styles["court-info-window-body"]}>
                <Link className={styles["court-info-window-google-map-link"]} target="_blank" rel="noopener noreferrer " href={`/tim-san/${court.id}`} passHref={true}>
                    <button className={`${styles["court-info-window-go-to-court"]} button`}>Xem chi tiết</button>
                </Link>
                <p className={styles["court-info-window-description"]}>{court.description}</p>
                <div className={styles["court-info-window-images-list"]}>
                    <ReactResponsiveCarousel images={court.images} slideImageClass={"infowindow-slide"} isLazy={true} />
                </div>
                <Link className={styles["court-info-window-google-map-link"]} target="_blank" rel="noopener noreferrer nofollow" href={`https://maps.google.com/?q=${court?.position?.lat},${court?.position?.lng}`} passHref={true}>
                    Xem trên google map
                </Link>
                <button className={`${styles["court-info-window-google-map-zoom-button"]} button`} onClick={() => handleZoom(court)}>Zoom gần</button>
            </div>
        </div >
    );
};
export default CourtInfoWindow;