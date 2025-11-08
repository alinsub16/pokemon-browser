import React from "react";

export default function PokemonDetails({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className="bg-white rounded-xl shadow p-6 text-center max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 uppercase">{pokemon.name}</h2>
      <div className="space-y-2">
        <p><strong>ID:</strong> {pokemon.id}</p>
        <p><strong>Weight:</strong> {pokemon.weight}</p>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
