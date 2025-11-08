import React from "react";
import { useEffect } from "react";
import usePokemonList from "../hooks/usePokemonList";
import { useSearchParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = 20;

  const { pokemons, offset, setOffset, loading, error } = usePokemonList();

// Sync offset with URL page
  useEffect(() => {
    setOffset((page - 1) * limit);
  }, [page, limit, setOffset]);

  
  const goToPage = (newPage) => {
    setSearchParams({ page: newPage });
  };

  return (
    <div className="min-h-screen p-8 ">
      <h1 className="text-3xl font-bold text-center mb-8">Pokémon Browser</h1>

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {pokemons.map((p) => (
          <PokemonCard key={p.name} name={p.name} />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page <= 1}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => goToPage(page + 1)}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
