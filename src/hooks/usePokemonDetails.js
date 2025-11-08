import { useState } from "react";
import { fetchPokemonDetails } from "../services/pokeApi";

export default function usePokemonDetails() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // This function can be called by the parent
  const getPokemonDetails = async (name) => {
    if (!name) return;
    try {
      setLoading(true);
      setError(null);
      const data = await fetchPokemonDetails(name);
      setSelectedPokemon(data);
      console.log( "DEtails of Pekemon", selectedPokemon);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { selectedPokemon, getPokemonDetails, loading, error };
}
