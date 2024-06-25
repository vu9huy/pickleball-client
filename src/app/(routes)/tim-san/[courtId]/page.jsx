
import Link from "next/link";
import styles from "./page.module.css";
import ReactResponsiveCarousel from "@/components/slider/ReactResposiveCarousel";
import { IconSprites1 } from "@/components/iconSprites/IconSprites";

const BASE_API_ENDPOINT = "http://localhost:2704/v1"

const getCourtById = async (courtId) => {
    const data = await fetch(`${BASE_API_ENDPOINT}/courts/${courtId}`);
    const courts = await data.json();
    return courts;
};

const CourtDetail = async ({ params: { courtId } }) => {
    const court = await getCourtById(courtId);

    return (
        <div className={styles["court-detail-container"]}>
            <div className={styles["court-detail-header"]}>
                <h1 className={styles["court-detail-header-title"]}>{court.name}</h1>
            </div>
            <div className={styles["court-detail-body"]}>
                <div className={styles["court-detail-body-images"]}>
                    <ReactResponsiveCarousel images={court.images} slideImageClass={"court-detail-slide"} isLazy={false} />
                    {/* {court.images.map((image, index) => {
                        return <Image key={index} src={image.url} alt={image.alt} fill />
                    })} */}
                </div>
                <p className={styles["court-detail-body-description"]}>{court.description}</p>
                <div className={styles["court-detail-body-infoBlock"]}>
                    <h4><IconSprites1 id="sprites-icon-location" width="20px" height="20px" fill="#99de47" /> Địa chỉ</h4>
                    <p>{court.location.address}</p>
                    <p>{court.location.district}, {court.location.province}</p>
                    <Link className={styles["court-detail-body-link"]} target="_blank" rel="noopener noreferrer nofollow" href={`https://maps.google.com/?q=${court?.geolocation?.latitude},${court?.geolocation?.longitude}`} passHref={true}>
                        Xem trên google map
                    </Link>
                </div>

                <div className={styles["court-detail-body-infoBlock"]}>
                    <p>Số lượng sân: {court.numberOfCourts}</p>
                </div>

                <div className={styles["court-detail-body-infoBlock"]}>
                    <p>Thời gian mở cửa: {court.availability.openTime} - {court.availability.closeTime}</p>
                </div>

                <div className={styles["court-detail-body-infoBlock"]}>
                    <h4><IconSprites1 id="sprites-icon-list" width="20px" height="20px" stroke="#99de47" fill="transparent" /> Dịch vụ</h4>
                    <ul>
                        <li>Chiếu sáng: {court.feature.lighting ? 'Yes' : 'No'}</li>
                        <li>Trong nhà: {court.feature.indoor ? 'Yes' : 'No'}</li>
                        <li>Mái che: {court.feature.canopy ? 'Yes' : 'No'}</li>
                        <li>Cho thuê đồ: {court.feature.rentThings ? 'Yes' : 'No'}</li>
                        <li>Hướng dẫn miễn phí: {court.feature.freeTrainer ? 'Yes' : 'No'}</li>
                    </ul>
                </div>

                <div className={styles["court-detail-body-infoBlock"]}>
                    <h4><IconSprites1 id="sprites-icon-dollar" width="20px" height="20px" stroke="#99de47" fill="transparent" /> Giá</h4>
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