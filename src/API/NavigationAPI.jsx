import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, 
});

// src = source, dst = destination
const getRoute = async (src, dst) => {
    console.log("Hi from getRoute in NavigationAPI.jsx");
    try {
        console.log("from try")
        console.log("the baseURL: " + baseURL)
        const response = await api.post("/graph/route", {
            source: src,
            destination: dst,
        });
        console.log("This is response: " + response);
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export { getRoute };