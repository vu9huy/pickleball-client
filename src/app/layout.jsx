
import "./globals.css";
// import { DM_Sans } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/navbar/Navbar";
import { dm_sans } from "./fonts/googleFont";
import { keywords } from "@/metadata/keywords";


export const viewport = {
    width: "device-width",
    initialScale: 1
};

export const metadata = {
    title: {
        default: "Sân Pickleball",
        template: "%s | Sân Pickleball"
    },
    description:
        "Sân Pickleball - Tìm kiếm và đặt sân pickleball trên toàn quốc",
    keywords: keywords,
    openGraph: {
        type: "website",
        description:
            "Sân Pickleball - Tìm kiếm và đặt sân pickleball trên toàn quốc",
        url: "https://sanpickleball.com",
        title: "Sân Pickleball",
        locale: "vi_VN",
        siteName: "Sân Pickleball",
        images: [
            {
                url: "images/san-pickleball.webp", // Must be an absolute URL, tỉ lệ 1200:630
                width: 1200,
                height: 630,
                alt: "sân pickleball"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Sân Pickleball",
        description:
            "Sân Pickleball - Tìm kiếm và đặt sân pickleball trên toàn quốc",
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
    alternates: {
        canonical: "https://sanpickleball.com"
    },
    metadataBase: new URL("https://sanpickleball.com"),
    alternates: {
        canonical: "/"
    },
    robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
        googleBot: "index, follow"
    },
    applicationName: "Sân Pickleball",
    appleWebApp: {
        title: "Sân Pickleball",
        statusBarStyle: "default",
        capable: true
    },
    verification: {
        other: {
            //Bing search console
            "msvalidate.01": ["4ae656febbb7b281f0b75ac157bb5044"]
        }
    },
    icons: {
        icon: [
            {
                url: "/icon.ico",
                type: "image/x-icon"
            },
            {
                url: "images/logo-fit-96x96.png",
                sizes: "96x96",
                type: "image/png"
            }
        ],
        shortcut: [
            {
                url: "/icon.ico",
                type: "image/x-icon"
            }
        ],
        apple: [
            {
                url: "images/logo-fit-96x96.png",
                sizes: "96x96",
                type: "image/png"
            }
        ]
    }
};


export default function RootLayout({ children }) {
    return (
        <html lang="vi">
            <body className={dm_sans.className} >
                <div className="container">
                    <div className="wrapper">
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                </div>
            </body>
            <GoogleAnalytics gaId="G-XXXXXXXXXXXXX" />
        </html>
    );
}
