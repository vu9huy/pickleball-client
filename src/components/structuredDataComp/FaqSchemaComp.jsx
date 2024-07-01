import { FAQPageJsonLd } from "next-seo";

const FaqSchemaComp = ({ faqData }) => {

    return (
        <FAQPageJsonLd
            useAppDir={true}
            mainEntity={faqData}
        />
    );
};

export default FaqSchemaComp;