import { getMetadataGeneral } from "@/seo/metadata/metadataGeneral";

export const metadata = getMetadataGeneral("huong-dan");

export default function HuongDanLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
}