import { globalConfig } from "@/config/globalConfig";
import { OrganizationJsonLd } from "next-seo";


const OrganizationSchemaComp = () => {

    return (
        <OrganizationJsonLd
            type="Corporation"
            id="https://sanpickleball.com"
            logo="https://www.example.com/photos/logo.jpg"
            name="Sân Pickleball"
            contactPoint={[
                {
                    contactType: "customer service",
                    email: "quan2704vu@gmail.com",
                    areaServed: "VN",
                    availableLanguage: ["Vietnamese"]
                }
            ]}
            url={globalConfig.websiteUrl}
        />
    );
};

export default OrganizationSchemaComp;