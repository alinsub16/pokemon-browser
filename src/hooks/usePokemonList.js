import { useEffect, useState } from "react";
import { fetchPokemonList } from "../services/pokeApi";

export default function usePokemonList(limit = 20) {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // load data
  useEffect(() => {
    const loadPokemons = async () => {
      try {
        setLoading(true);
        const data = await fetchPokemonList(limit, offset);
        setPokemons(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadPokemons();
  }, [offset, limit]);

  return { pokemons, offset, setOffset, loading, error };
}
