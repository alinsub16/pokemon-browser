import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import usePokemonDetails from "../hooks/usePokemonDetails";
import PokemonDetails from "../components/PokemonDetails";

export default function PokemonPage() {
  const { name } = useParams();
  const { selectedPokemon, getPokemonDetails, loading, error } = usePokemonDetails();

  // Call the hook function whenever 'name' changes
  useEffect(() => {
    getPokemonDetails(name);
  }, [name]);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="mb-6">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to List
        </Link>
      </div>

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Only render details when data is available */}
      {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}
    </div>
  );
}
