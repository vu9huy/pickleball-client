
import Link from "next/link";
import styles from "./page.module.css";
import ReactResponsiveCarousel from "@/components/slider/ReactResposiveCarousel";
import { IconSprites1 } from "@/components/iconSprites/IconSprites";
import NotFound from "@/components/error/notFound/NotFound";
import ServerError from "@/components/error/serverError/ServerError";

const BASE_API_ENDPOINT = "http://localhost:2704/v1";

// const getCourtById = async (courtId) => {
//     const data = await fetch(`${BASE_API_ENDPOINT}/courts/${courtId}`);
//     if (data.status === 404) return null;
//     if (data.status !== 200) return null;
//     const courts = await data.json();
//     return courts;
// };

const getCourtById = async (courtId) => {
    try {
        const data = await fetch(`${BASE_API_ENDPOINT}/courts/${courtId}`);
        const courts = await data.json();
        return courts;
    } catch (error) {
        console.log("getCourtById error", error);
        return null;
    }
};

const CourtDetail = async ({ params: { courtId } }) => {
    const court = await getCourtById(courtId);

    const responseStatus = court?.code;
    if (!court || responseStatus >= 500) return <ServerError />;
    if (responseStatus === 404) return <NotFound type={"court"} />;

    return (
        <div className={styles["court-detail-container"]}>
            <div className={styles["court-detail-header"]}>
                <h1 className={styles["court-detail-header-title"]}>{court.name}</h1>
            </div>
            <div className={styles["court-detail-body"]}>
                <div className={styles["court-detail-body-images"]}>
                    <ReactResponsiveCarousel images={court.images} slideImageClass={"court-detail-slide"} isLazy={false} />
                </div>
                <p className={styles["court-detail-body-description"]}>{court.description}</p>
                <div className={styles["court-detail-body-info-block"]}>
                    <p className={styles["court-detail-body-info-block-label"]}>
                        <IconSprites1 id="sprites-icon-location" width="20px" height="20px" fill="#99de47" />
                        <span>Địa chỉ</span>
                    </p>
                    <p>{court.location.address}</p>
                    <p>{court.location.district}, {court.location.province}</p>
                    <Link className={styles["court-detail-body-link"]} target="_blank" rel="noopener noreferrer nofollow" href={`https://maps.google.com/?q=${court?.geolocation?.latitude},${court?.geolocation?.longitude}`} passHref={true}>
                        Xem trên google map
                    </Link>
                </div>

                <div className={styles["court-detail-body-info-block"]}>
                    <p className={styles["court-detail-body-info-block-label"]}>Số lượng sân: {court.numberOfCourts}</p>
                </div>

                <div className={styles["court-detail-body-info-block"]}>
                    <p className={styles["court-detail-body-info-block-label"]}>Thời gian mở cửa: {court.availability.openTime} - {court.availability.closeTime}</p>
                </div>

                <div className={styles["court-detail-body-info-block"]}>
                    <p className={styles["court-detail-body-info-block-label"]}>
                        <IconSprites1 id="sprites-icon-list" width="20px" height="20px" stroke="#99de47" fill="transparent" />
                        <span>Dịch vụ</span>
                    </p>
                    <ul>
                        <li>Chiếu sáng: {court.feature.lighting ? "Yes" : "No"}</li>
                        <li>Trong nhà: {court.feature.indoor ? "Yes" : "No"}</li>
                        <li>Mái che: {court.feature.canopy ? "Yes" : "No"}</li>
                        <li>Cho thuê đồ: {court.feature.rentThings ? "Yes" : "No"}</li>
                        <li>Hướng dẫn miễn phí: {court.feature.freeTrainer ? "Yes" : "No"}</li>
                    </ul>
                </div>

                <div className={styles["court-detail-body-info-block"]}>
                    <p className={styles["court-detail-body-info-block-label"]}>
                        <IconSprites1 id="sprites-icon-dollar" width="20px" height="20px" stroke="#99de47" fill="transparent" />
                        <span>Giá</span>
                    </p>
                    <ul>
                        <li>Ngày thường khung giờ 8h-16h:  {court.bookingInfo.pricePerHour}</li>
                        <li>Ngày thường khung giờ 16h-23h:  {court.bookingInfo.pricePerHour}</li>
                        <li>Cuối tuần khung giờ 8h-16h:  {court.bookingInfo.pricePerHour}</li>
                        <li>Cuối tuần khung giờ 16h-23h:  {court.bookingInfo.pricePerHour}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default CourtDetail;