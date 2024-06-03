import styles from "./page.module.css";

export async function generateMetadata({ params, searchParams }, parent) {
    const product = await fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => res.json());
    return {
        title: product.title,
        description: product.body
    };
}

export default function Timsan() {

    return <div className={styles["tim-san-container"]}>
        gfgfgfgffg
    </div>;
}
