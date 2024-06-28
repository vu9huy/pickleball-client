import { globalConfig } from "@/config/globalConfig";
import { SiteLinksSearchBoxJsonLd } from "next-seo";

const SiteLinksSearchBoxSchemaComp = ({ }) => {

    return (
        <SiteLinksSearchBoxJsonLd
            useAppDir={true}
            url={globalConfig.websiteUrl}
            potentialActions={[
                {
                    target: `https://${globalConfig.domain}/search?q`,
                    queryInput: 'search_term_string',
                }
            ]}
        />
    )
}

export default SiteLinksSearchBoxSchemaComp;