import styles from "./MobileMenu.module.css";
import MobileLinkList from "./mobileLinkList/MobileLinkList";

const MobileMenu = ({ menu }) => {


    return (
        <div className={styles["mobile-menu-container"]}>
            <div className={styles["mobile-menu-icon"]}>OOO</div>
            <div className={styles["mobile-menu-body"]}>
                <MobileLinkList linkList={menu} />
            </div>
        </div>
    );
};

export default MobileMenu;
