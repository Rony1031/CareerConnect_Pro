import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api", // Update with your backend API endpoint
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token") || ""}`, // Include the token in headers
  },
});

export default api;
