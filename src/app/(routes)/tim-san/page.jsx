import styles from "./page.module.css";
import { headers } from "next/headers";

export async function generateMetadata({ params, searchParams }, parent) {
    const headersList = headers();
    const pathname = headersList.get("x-invoke-path") || "";
    console.log('pathname', pathname);
    const product = await fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => res.json());
    return {
        title: product.title,
        description: product.body
    };
}

export default function Timsan() {
    console.log('params');
    return <div className={styles["tim-san-container"]}>
        gfgfgfgffg
    </div>;
}
