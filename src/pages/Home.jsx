import React from "react";
import usePokemonList from "../hooks/usePokemonList";
import PokemonCard from "../components/PokemonCard";

export default function Home() {
  const { pokemons, offset, setOffset, loading, error } = usePokemonList();

  return (
    <div className="min-h-screen p-8 bg-gray-100">
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
          onClick={() => offset >= 20 && setOffset(offset - 20)}
          disabled={offset === 0}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setOffset(offset + 20)}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
