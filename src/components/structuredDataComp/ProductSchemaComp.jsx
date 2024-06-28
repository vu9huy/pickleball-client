import { ProductJsonLd } from "next-seo";


export default function ProductSchemaComp({ productData }) {
    const { name, description, images, reviews, aggregateRating, url, lowPrice } = productData;
    return (
        <ProductJsonLd
            useAppDir={true}
            productName={name}
            images={images}
            description={description}
            brand="sanpickleball.com"
            // aggregateRating={{
            //     ratingValue: '4.8',
            //     reviewCount: '12',
            // }}
            aggregateRating={aggregateRating}
            aggregateOffer={{
                lowPrice: lowPrice,
                priceCurrency: 'VND',
                priceValidUntil: '2030-01-01',
                itemCondition: 'https://schema.org/NewCondition',
                availability: 'https://schema.org/InStock',
                url: { url }
            }}
        />
    );
}