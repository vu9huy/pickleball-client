import { getCourtByIdApi } from "@/api/callApi";
import BreadcrumbSchemaComp from "@/components/structuredDataComp/BreadcrumbSchemaComp";
import ProductSchemaComp from "@/components/structuredDataComp/ProductSchemaComp";
import { globalConfig } from "@/config/globalConfig";
import { getMetadataSpecific } from "@/seo/metadata/metadataGeneral";

export async function generateMetadata({ params: { courtId } }) {
    const court = await getCourtByIdApi(courtId);
    const images = court.images.map(image => {
        return {
            url: image.url,
            alt: image.alt,
            width: 1200,
            height: 630
        };
    });
    const metadataObj = {
        title: court.name,
        description: court.description,
        images: images,
        path: `/tim-san/${court.id}`
    };
    return getMetadataSpecific(metadataObj);
}

export default async function CourtDetailLayout({ children, params: { courtId } }) {
    const court = await getCourtByIdApi(courtId);
    const listElements = [
        {
            position: 2,
            name: "Tìm sân",
            item: `https://${globalConfig.domain}/tim-san`
        },
        {
            position: 3,
            name: court.name,
            item: `https://${globalConfig.domain}/tim-san/${court.id}`
        }
    ];

    const images = court.images.map(image => image.url);
    const fakeAggregateRating = {
        ratingValue: "4.8",
        reviewCount: "12"
    };

    const productData = {
        name: court.name,
        description: court.description,
        images: images,
        reviews: null,
        aggregateRating: fakeAggregateRating,
        url: `https://${globalConfig.domain}/tim-san/${court.id}`,
        lowPrice: court.bookingInfo?.averagePrice || "100000"
    };

    return (
        <>
            <BreadcrumbSchemaComp listElements={listElements} />
            <ProductSchemaComp productData={productData} />
            {children}
        </>
    );
}