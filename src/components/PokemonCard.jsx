import React from "react";
import { Link } from "react-router-dom";

export default function PokemonCard({ name }) {
  return (
    <div className="pokemon-card-list">
  
  <p className="capitalize text-lg font-semibold mb-2 tracking-wide text-white drop-shadow-sm">
    {name}
  </p>

  <Link
    to={`/pokemon/${name}`}
    className="name"
  >
    View Details
  </Link>

  {/* soft glow accent */}
  <div className="cardlist-glow-accent"></div>
</div>

  );
}
