const DOMAIN = "https://sanpickleball.com";

const metadataGeneralList = {
    "tim-san": {
        title: "",
        description: "",
        path: "/tim-san"
    },
    "huong-dan": {

    }
}

export const getMetadataGeneral = (path) => {
    if (!path) return null;
    const metadataObj = metadataGeneralList[path];
    const metadata = {
        title: metadataObj?.title,
        description: metadataObj?.description,
        openGraph: {
            type: "website",
            title: metadataObj?.title,
            description: metadataObj?.description,
            url: `${DOMAIN}${metadataObj?.path}`,
            locale: "vi_VN",
            siteName: "Sân Pickleball",
            images: metadataObj?.images
        },
        twitter: {
            card: "summary_large_image",
            title: metadataObj?.title,
            description: metadataObj?.description,
            creator: "@vu9huy",
            site: "@sanpickleball",
            images: [
                {
                    url: "images/san-pickleball.webp", // Must be an absolute URL
                    width: 1200,
                    height: 630,
                    alt: "sân pickleball"
                }
            ]
        },
    };
    return metadata;
} 