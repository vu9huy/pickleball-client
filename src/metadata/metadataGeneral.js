const DOMAIN = "https://sanpickleball.com";

const metadataGeneralList = {
    "/": {
        title: "Sân Pickleball",
        description: "Sân Pickleball - Tìm kiếm và đặt sân pickleball trên toàn quốc",
        path: "/",
        images: [
            {
                url: "images/san-pickleball.webp",
                width: 1200,
                height: 630,
                alt: "sân pickleball"
            }
        ]
    },
    "tim-san": {
        title: "Tìm sân Pickleball",
        description: "Tìm sân Pickleball theo các tỉnh/thành trên Việt Nam",
        path: "/tim-san",
        images: [
            {
                url: "images/san-pickleball.webp",
                width: 1200,
                height: 630,
                alt: "Tìm sân Pickleball"
            }
        ]
    },
    "huong-dan": {
        title: "Hướng dẫn chơi Pickleball",
        description: "Hướng dẫn luật chơi và phương pháp luyện tập pickleball cho người mới",
        path: "/",
        images: [
            {
                url: "images/san-pickleball.webp",
                width: 1200,
                height: 630,
                alt: "Hướng dẫn chơi Pickleball"
            }
        ]
    },
    "blog": {

    }
};

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
            images: metadataObj?.images
        },
    };
    return metadata;
};