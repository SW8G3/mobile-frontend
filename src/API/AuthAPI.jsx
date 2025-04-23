import axios from "axios";

const api = axios.create({
  baseURL: "/auth",
});

const registerUser = async (username, password) => {
  try {
    const data = {
      username,
      password,
    };
    const response = await api.post("/register", data);
    return response.data;
  } catch (err) {
    console.error("Error during user registration:", err);
    throw err;
  }
};

const loginUser = async (username, password) => {
  try {
    const data = {
      username,
      password,
    };
    const response = await api.post("/login", data);
    return response.data;
  } catch (err) {
    console.error("Error during user login:", err);
    throw err;
  }
};

export { registerUser, loginUser };
