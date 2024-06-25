import styles from "./page.module.css";

const BASE_API_ENDPOINT = "http://localhost:2704/v1"

const getCourtData = async (courtId) => {
    const data = await fetch(`${BASE_API_ENDPOINT}/courts/${courtId}`);
    const post = await data.json();

    return post;
};

const CourtDetail = async ({ params: { courtId } }) => {

    const court = await getCourtData(courtId);
    console.log("court", court);

    return (
        <div className={styles["court-detail-container"]}>
            <div className={styles.header}>
                <h1 className={styles.title}>{court.name}</h1>
                <img src={court.images[0].url} alt={court.images[0].alt} className={styles.image} />
            </div>
            <p className={styles.description}>{court.description}</p>

            <div className={styles.infoSection}>
                <div className={styles.infoBlock}>
                    <h2>Location</h2>
                    <p>{court.location.address}</p>
                    <p>{court.location.district}, {court.location.province}</p>
                </div>

                <div className={styles.infoBlock}>
                    <h2>Geolocation</h2>
                    <p>Latitude: {court.geolocation.latitude}</p>
                    <p>Longitude: {court.geolocation.longitude}</p>
                </div>

                <div className={styles.infoBlock}>
                    <h2>Features</h2>
                    <ul>
                        <li>Lighting: {court.feature.lighting ? 'Yes' : 'No'}</li>
                        <li>Indoor: {court.feature.indoor ? 'Yes' : 'No'}</li>
                        <li>Canopy: {court.feature.canopy ? 'Yes' : 'No'}</li>
                        <li>Rent Things: {court.feature.rentThings ? 'Yes' : 'No'}</li>
                        <li>Free Trainer: {court.feature.freeTrainer ? 'Yes' : 'No'}</li>
                    </ul>
                </div>

                <div className={styles.infoBlock}>
                    <h2>Availability</h2>
                    <p>Open Time: {court.availability.openTime}</p>
                    <p>Close Time: {court.availability.closeTime}</p>
                </div>

                <div className={styles.infoBlock}>
                    <h2>Booking Information</h2>
                    <p>Price Per Hour: {court.bookingInfo.pricePerHour} VND</p>
                </div>

                <div className={styles.infoBlock}>
                    <h2>Number of Courts</h2>
                    <p>{court.numberOfCourts}</p>
                </div>
            </div>
        </div>
    );
};
export default CourtDetail;