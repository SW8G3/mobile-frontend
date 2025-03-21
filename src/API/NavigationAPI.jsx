import axios from "axios";

const api = axios.create({ 
    baseURL: import.meta.env.VITE_API_URL, 
});

// src = source, dst = destination
const getRoute = async (src, dst) => {
    try {
        const request = { source: src, destination: dst };
        const response = await api.get("/route", request);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export { getRoute };