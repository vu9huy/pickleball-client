const convertNumberFormat = ({ number, locale, style }) => {
    return number.toLocaleString(locale, { style: "decimal" }) || number;
};

export const convertVietNameMoneyFormat = (number) => {
    const locale = "vi-VN";
    const result = convertNumberFormat({ number, locale });
    return result;
};