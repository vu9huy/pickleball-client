import { barlowCondensed } from "@/fonts/googleFont";

export const HeaderComp = ({ children }) => {

    return (
        <span className={barlowCondensed.className}>{children}</span>
    );
};
