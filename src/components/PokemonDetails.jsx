import React from "react";

export default function PokemonDetails({ pokemon }) {
  if (!pokemon) return null;
  const type = pokemon.types?.[0]?.type?.name;

  const glowColor =
    type === "fire"
      ? "bg-red-500"
      : type === "electric"
      ? "bg-yellow-300"
      : type === "grass"
      ? "bg-green-400"
      : "bg-slate-400";

  const gradient =
    type === "fire"
      ? "from-red-500/20 to-red-900/10"
      : type === "electric"
      ? "from-yellow-400/20 to-yellow-900/10"
      : type === "grass"
      ? "from-green-400/20 to-green-900/10"
      : "from-gray-400/10 to-gray-800/5";

  return (
    <div
      className={`pokemon-card bg-gradient-to-b ${gradient}`}
    >
      {/* Glow accent */}
      <div
        className={`card-details-glow ${glowColor}`}
      ></div>

      {/* Card content */}
      <h2>
        {pokemon.name}
      </h2>

      <div className="info">
        <p>
          <strong className="text-white">ID:</strong> {pokemon.id}
        </p>
        <p>
          <strong className="text-white">Weight:</strong> {pokemon.weight}
        </p>

        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="mx-auto w-32 h-32 drop-shadow-lg"
        />
      </div>
    </div>
  );
}
