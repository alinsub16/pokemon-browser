import axios from "axios";

const BASE_URL = import.meta.env.VITE_POKE_API_URL;

export const fetchPokemonList = async (limit = 20, offset = 0) => {
  try {
    const response = await axios.get(`${BASE_URL}?limit=${limit}&offset=${offset}`);
    return response.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch Pokémon list");
  }
};

export const fetchPokemonDetails = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/${name}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch Pokémon details");
  }
};
