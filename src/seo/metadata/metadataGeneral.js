import { globalConfig } from "@/config/globalConfig";
import { siteMetadata } from "@/data/metadata/siteMetadata";


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

export const getMetadataFromPath = (path) => {
    if (!path) return null;
    const metadataObj = metadataGeneralList[path] || null;
    return metadataObj;
};


export const getMetadataGeneral = ({ path }) => {
    const metadataObj = getMetadataFromPath(path);
    const metadata = {
        title: metadataObj?.title || siteMetadata.title,
        description: metadataObj?.description || siteMetadata.description,
        openGraph: {
            type: "website",
            title: metadataObj?.title || siteMetadata.title,
            description: metadataObj?.description || siteMetadata.description,
            url: `https://${globalConfig.domain}${metadataObj?.path}`,
            locale: siteMetadata.locale,
            siteName: siteMetadata.siteName,
            images: metadataObj?.images || siteMetadata.images
        },
        twitter: {
            card: "summary_large_image",
            title: metadataObj?.title || siteMetadata.title,
            description: metadataObj?.description || siteMetadata.description,
            creator: siteMetadata.creator,
            site: siteMetadata.site,
            images: metadataObj?.images || siteMetadata.images
        }
    };
    return metadata;
};


/**
 * @typedef {Object} Image
 * @property {string} url 
 * @property {string} alt 
 * @property {number} width 
 * @property {number} height 
 */

/**
 * @typedef {Object} metadataObj
 * @property {string} title
 * @property {string} description
 * @property {Image[]} images
 * @property {string} path
 */

export const getMetadataSpecific = (metadataObj) => {
    const { title, description, images, path } = metadataObj;
    const metadata = {
        title: title || siteMetadata.title,
        description: description || siteMetadata.description,
        openGraph: {
            type: "website",
            title: title || siteMetadata.title,
            description: description || siteMetadata.description,
            url: `https://${globalConfig.domain}${path}`,
            locale: siteMetadata.locale,
            siteName: siteMetadata.siteName,
            images: images || siteMetadata.images
        },
        twitter: {
            card: "summary_large_image",
            title: title || siteMetadata.title,
            description: description || siteMetadata.description,
            creator: siteMetadata.creator,
            site: siteMetadata.site,
            images: images || siteMetadata.images
        }
    };
    return metadata;
};