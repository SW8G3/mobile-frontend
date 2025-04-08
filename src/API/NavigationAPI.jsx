import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, 
});

const searchWithTag = async (searchTag) => {
    try {
        const data = {
            searchTag,
        };
        const response = await api.post("/graph/search", data);
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

const getNodeFromId = async (nodeId) => {
    try {
        const data = {
            nodeId,
        };
        const response = await api.post("/graph/node", data);
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// src = source, dst = destination
const getRoute = async (src, dst) => {
    try {
        const data = {
            src: parseInt(src),
            dst: parseInt(dst),
        };
        const response = await api.post("/graph/route", data);
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const getDirectionPhoto = async (src, dst) => {
    try {
        const data = {
            src: parseInt(src),
            dst: parseInt(dst),
        };
        const response = await api.post("/graph/direction", data);
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export { searchWithTag, getNodeFromId, getRoute, getDirectionPhoto };