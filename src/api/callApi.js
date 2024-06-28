const BASE_API_ENDPOINT = "http://localhost:2704/v1";

const getCourtByIdApi = async (courtId) => {
    try {
        const data = await fetch(`${BASE_API_ENDPOINT}/courts/${courtId}`);
        const courts = await data.json();
        return courts;
    } catch (error) {
        console.log("getCourtById error", error);
        return null;
    }
};

export {
    getCourtByIdApi
}