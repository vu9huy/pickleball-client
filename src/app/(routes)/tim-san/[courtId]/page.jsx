
import Link from "next/link";
import styles from "./page.module.css";
import ReactResponsiveCarousel from "@/components/slider/ReactResposiveCarousel";
import { IconSprites1 } from "@/components/iconSprites/IconSprites";
import NotFoundComp from "@/components/error/notFound/NotFoundComp";
import ServerError from "@/components/error/serverError/ServerError";
import { convertVietNameMoneyFormat } from "@/utils/convertMoneyFormat";
import { getCourtByIdApi } from "@/api/callApi";


const CourtDetail = async ({ params: { courtId } }) => {
    const court = await getCourtByIdApi(courtId);

    const responseStatus = court?.code;
    if (!court || responseStatus >= 500) return <ServerError />;
    if (responseStatus === 404) return <NotFoundComp type={"court"} />;

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
                        <span>Địa chỉ&nbsp;</span>
                        <IconSprites1 id="sprites-icon-location" width="20px" height="20px" fill="#99de47" />
                        <span>:</span>
                    </p>
                    <p>{court.location.address}, {court.location.district}, {court.location.province}</p>
                    <Link className={styles["court-detail-body-link"]} target="_blank" rel="noopener noreferrer nofollow" href={`https://maps.google.com/?q=${court?.geolocation?.latitude},${court?.geolocation?.longitude}`} passHref={true}>
                        Xem trên google map
                    </Link>
                </div>

                <div className={styles["court-detail-body-info-block"]}>
                    <p className={styles["court-detail-body-info-block-label"]}>Số lượng sân: {court.numberOfCourts} sân</p>
                </div>

                <div className={styles["court-detail-body-info-block"]}>
                    <p className={styles["court-detail-body-info-block-label"]}>Thời gian mở cửa: {court.availability.openTime} - {court.availability.closeTime}</p>
                </div>

                <div className={styles["court-detail-body-info-block"]}>
                    <p className={styles["court-detail-body-info-block-label"]}>
                        <span>Dịch vụ&nbsp;</span>
                        <IconSprites1 id="sprites-icon-list" width="20px" height="20px" stroke="#99de47" fill="transparent" />
                        <span>:</span>
                    </p>
                    <ul>
                        <li>Chiếu sáng: {court.feature.lighting ? "Có" : "Không"}</li>
                        <li>Trong nhà: {court.feature.indoor ? "Có" : "Không"}</li>
                        <li>Mái che: {court.feature.canopy ? "Có" : "Không"}</li>
                        <li>Cho thuê đồ: {court.feature.rentThings ? "Có" : "Không"}</li>
                        <li>Hướng dẫn miễn phí: {court.feature.freeTrainer ? "Có" : "Không"}</li>

                    </ul>
                </div>

                <div className={styles["court-detail-body-info-block"]}>
                    <p className={styles["court-detail-body-info-block-label"]}>
                        <span>Giá&nbsp;</span>
                        <span className={styles["court-detail-body-info-block-fake-icon"]}>$</span>
                        <span>:</span>
                    </p>
                    <ul>
                        <li>Ngày thường khung giờ 8h-16h:  {convertVietNameMoneyFormat(court.bookingInfo.pricePerHour)}đ</li>
                        <li>Ngày thường khung giờ 16h-23h:  {convertVietNameMoneyFormat(court.bookingInfo.pricePerHour)}đ</li>
                        <li>Cuối tuần khung giờ 8h-16h:  {convertVietNameMoneyFormat(court.bookingInfo.pricePerHour)}đ</li>
                        <li>Cuối tuần khung giờ 16h-23h:  {convertVietNameMoneyFormat(court.bookingInfo.pricePerHour)}đ</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default CourtDetail;