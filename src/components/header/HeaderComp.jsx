import { barlowCondensed } from "@/app/fonts/googleFont";

export const HeaderComp = ({ children }) => {

    return (
        <span className={barlowCondensed.className}>{children}</span>
    );
};
