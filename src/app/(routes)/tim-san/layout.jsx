
import { getMetadataGeneral } from "@/seo/metadata/metadataGeneral";


export const metadata = getMetadataGeneral("tim-san");

export default function TimSanLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
}