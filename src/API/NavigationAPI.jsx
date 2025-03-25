import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, 
});

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

export { getRoute };