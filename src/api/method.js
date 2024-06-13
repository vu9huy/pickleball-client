
const getApi = async ({ axios, url, headers }) => {
    const response = await axios.get(url, headers);
    return response;
};

const postApi = async ({ axios, url, headers, data }) => {
    const response = await axios.post(url, data, headers);
    return response;
};

const putApi = async ({ axios, url, headers, data }) => {
    const response = await axios.put(url, data, headers);
    return response;
};

const patchApi = async ({ axios, url, headers, data }) => {
    const response = await axios.patch(url, data, headers);
    return response;
};

const deleteApi = async ({ axios, url, headers }) => {
    const response = await axios.delete(url, headers);
    return response;
};
export {
    getApi,
    postApi,
    putApi,
    patchApi,
    deleteApi
};