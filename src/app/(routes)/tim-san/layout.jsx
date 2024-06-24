
import { getMetadataGeneral } from "@/utils/metadata/universal/metadataGeneral";

// export async function generateMetadata() {
//     const product = await fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => res.json());
//     return {
//         title: product.title,
//         description: product.body
//     };
// }

export const metadata = getMetadataGeneral("tim-san");

export default function TimSanLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
}