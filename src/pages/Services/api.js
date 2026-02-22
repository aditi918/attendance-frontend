import API from "./axios";

// REGISTER (must be POST)
export const registerUser = (payload) => {
  return API.post("/auth/register", payload);
};

// LOGIN (must be POST)
export const loginUser = (payload) => {
  return API.post("/auth/login", payload);
};