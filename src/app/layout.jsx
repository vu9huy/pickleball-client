
import "./globals.css";
// import { DM_Sans } from "next/font/google";
import Footer from "@/components/foooter/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/navbar/Navbar";
import { dm_sans } from "./fonts/googleFont";


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
    openGraph: {
        siteName: "Sân Pickleball",
        type: "website",
        locale: "vi_VN"
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
                url: "logo-fit-96x96.png",
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
                url: "logo-fit-96x96.png",
                sizes: "96x96",
                type: "image/png"
            }
        ]
    }
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={dm_sans.className} >
                <div className="container">
                    <div className="wrapper">
                        <Navbar />
                        {children}
                        {/* <Footer /> */}
                    </div>
                </div>
            </body>
            <GoogleAnalytics gaId="G-XXXXXXXXXXXXX" />
        </html>
    );
}
