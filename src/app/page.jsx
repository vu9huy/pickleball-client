import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import { getMetadataGeneral } from "@/metadata/metadataGeneral";


export const metadata = getMetadataGeneral("/");

export default function Home() {
    return <div className={styles["home-container"]}>
        <Featured />
        <CategoryList />
        <div className={styles["content"]}>
            <CardList />
        </div>
    </div>;
}
