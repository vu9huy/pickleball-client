
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/navbar/Navbar";
import { dm_sans } from "../fonts/googleFont";
import { siteMetadata } from "@/data/metadata/siteMetadata";
import SiteLinksSearchBoxSchemaComp from "@/components/structuredDataComp/SiteLinksSearchBoxSchemaComp";
import FaqSchemaComp from "@/components/structuredDataComp/FAQSchemaComp";

export const viewport = {
    width: "device-width",
    initialScale: 1
};

export const metadata = {
    title: {
        default: siteMetadata.title,
        template: `%s | ${siteMetadata.title}`
    },
    description: siteMetadata.description,
    keywords: siteMetadata.keywords,
    openGraph: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        type: "website",
        url: siteMetadata.siteUrl,
        locale: "vi_VN",
        siteName: siteMetadata.siteName,
        images: siteMetadata.images
    },
    twitter: {
        card: "summary_large_image",
        title: siteMetadata.title,
        description: siteMetadata.description,
        creator: siteMetadata.creator,
        images: siteMetadata.images,
        site: siteMetadata.site
    },
    alternates: {
        canonical: siteMetadata.canonicalLink
    },
    metadataBase: new URL(siteMetadata.siteUrl),
    robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
        googleBot: "index, follow"
    },
    applicationName: siteMetadata.applicationName,
    appleWebApp: {
        title: "Sân Pickleball",
        statusBarStyle: "default",
        capable: true
    },
    verification: {
        other: {
            ...siteMetadata.bingSearchConsole
        }
    },
    icons: {
        icon: [
            siteMetadata.shortcut,
            siteMetadata.icon
        ],
        shortcut: [
            siteMetadata.shortcut
        ],
        apple: [
            siteMetadata.icon
        ]
    }
};

const faqHome = [
    {
        questionName: 'Pickleball là gì?',
        acceptedAnswerText: '',
    },
    {
        questionName: 'Cách chơi picklball?',
        acceptedAnswerText: '',
    },
]

export default function RootLayout({ children }) {
    return (
        <html lang="vi">
            <head>
                <SiteLinksSearchBoxSchemaComp />
                <FaqSchemaComp faqData={faqHome} />
            </head>

            <body className={dm_sans.className} >
                <div className="container">
                    <Navbar />
                    <div className="content-container">
                        <div className="content-wrapper">
                            {children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </body>
            <GoogleAnalytics gaId="G-XXXXXXXXXXXXX" />
        </html>
    );
}
