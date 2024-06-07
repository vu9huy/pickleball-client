
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/foooter/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
    width: "device-width",
    initialScale: 1
};

export const metadata = {
    title:  {
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
    // verification: {
    //     google: "YOUR_DATA",
    //     yandex: ["YOUR_DATA"],
    //     other: {
    //         "msvalidate.01": ["YOUR_DATA"],
    //         "facebook-domain-verification": ["YOUR_DATA"]
    //     }
    // },
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
            <body className={inter.className}>
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
