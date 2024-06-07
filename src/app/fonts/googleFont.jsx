import { DM_Sans } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";


export const dm_sans = DM_Sans({ subsets: ["latin"] });

export const barlowCondensed = Barlow_Condensed({
    weight: ["300", "600"],
    subsets: ["latin"],
    variable: "--font-barlow-condensed"
});
