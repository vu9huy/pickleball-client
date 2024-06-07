import Link from "next/link";
import styles from "./MoveHoverLink.module.css";

const MoveHoverLink = ({ href, label }) => {

    return (
        <Link href={href} className={styles["move-hover-link"]}>
            <span>{label}</span>
        </Link>
    );
}
export default MoveHoverLink;