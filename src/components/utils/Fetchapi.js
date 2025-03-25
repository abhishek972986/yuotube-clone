import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyAIDGA9MF8_LDqQF2G3ksWLzqihlcQGxUs"; // Replace with your API Key

const options = {
  params: {
    part: "snippet",
    maxResults: 5,
    key: API_KEY,
  },
};

export const Fetchapi = async (query) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/search`, {
      ...options,
      params: { ...options.params, q: query },
    });

    console.log("API Response:", data); // Debugging
    return data; // Return full response
  } catch (error) {
    console.error("API Fetch Error:", error);
    return null; // Handle errors properly
  }
};
