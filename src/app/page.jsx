import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";


export const metadata = {
    keywords: [
        "san pickleball",
        "pickleball",
        "san pickleball ha noi",
        "chơi pickleball"
    ],
    openGraph: {
        url: "https://sanpickleball.com",
        type: "website",
        title: "Sân Pickleball",
        description:
        "Sân Pickleball - Tìm kiếm và đặt sân pickleball trên toàn quốc",
        images: [
            {
                url: "/san-pickleball.jpeg",
                width: 1200,
                height: 630,
                alt: "sanpickleball"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Sân Pickleball",
        description:
        "Sân Pickleball - Tìm kiếm và đặt sân pickleball trên toàn quốc",
        creator: "@sanpickleball",
        site: "@sanpickleball",
        images: [
            {
                url: "/san-pickleball.jpeg",
                width: 1200,
                height: 630,
                alt: "sanpickleball"
            }
        ]
    },
    alternates: {
        canonical: "https://sanpickleball.com"
    }
};

export default function Home() {
    return <div className={styles["home-container"]}>
        <Featured />
        <CategoryList />
        <div className={styles["content"]}>
            <CardList />
            <Menu />
        </div>
    </div>;
}
