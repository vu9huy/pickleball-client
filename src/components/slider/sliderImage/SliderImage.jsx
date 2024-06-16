import Image from "next/image";
import styles from "./SliderImage.module.css";

const SliderImage = ({ src, index, isLazy, imageClass, alt }) => {

    return <div key={index} className={styles[imageClass]}>
        {src ? <Image className={styles["slider-image"]} src={src} alt={alt || "pickleball"} fill={true} loading={isLazy ? "lazy" : "eager"} /> : ""}
    </div>;
};

export default SliderImage;
