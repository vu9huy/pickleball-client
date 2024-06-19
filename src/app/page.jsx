import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";


export const metadata = {
    // title: "Hướng dẫn chơi Pickleball",
    // description:
    //     "Hướng dẫn luật chơi và phương pháp luyện tập pickleball cho người mới",
    // openGraph: {
    //     type: "website",
    //     description:
    //         "Hướng dẫn luật chơi và phương pháp luyện tập pickleball cho người mới",
    //     url: "https://sanpickleball.com",
    //     title: "Hướng dẫn chơi Pickleball | Sân Pickleball",
    //     locale: "vi_VN",
    //     siteName: "Sân Pickleball",
    //     images: [
    //         {
    //             url: "images/san-pickleball.webp", // Must be an absolute URL, tỉ lệ 1200:630
    //             width: 1200,
    //             height: 630,
    //             alt: "Hướng dẫn chơi Pickleball"
    //         }
    //     ]
    // },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "Hướng dẫn chơi Pickleball",
    //     description:
    //         "Hướng dẫn luật chơi và phương pháp luyện tập pickleball cho người mới",
    //     creator: "@vu9huy",
    //     site: "@sanpickleball",
    //     images: [
    //         {
    //             url: "images/san-pickleball.webp", // Must be an absolute URL
    //             width: 1200,
    //             height: 630,
    //             alt: "sân pickleball"
    //         }
    //     ]
    // },
    // alternates: {
    //     canonical: "https://sanpickleball.com"
    // }
};

export default function Home() {
    return <div className={styles["home-container"]}>
        <Featured />
        <CategoryList />
        <div className={styles["content"]}>
            <CardList />
        </div>
    </div>;
}
