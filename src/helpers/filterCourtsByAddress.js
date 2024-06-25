const filterCourtsByAddress = ({ data, province, district }) => {
    const queryCourts = data?.filter(court => {
        if (!province?.value && !district?.value) return true;
        if (province?.value && !district?.value) return court?.location?.province === province?.value;
        if (province?.value && district?.value) return court?.location?.province === province?.value && court?.location?.district === district?.value;
    });
    return queryCourts;
}
export default filterCourtsByAddress;