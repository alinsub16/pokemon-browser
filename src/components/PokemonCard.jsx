import React from "react";
import { Link } from "react-router-dom";

export default function PokemonCard({ name }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition text-center">
      <p className="capitalize text-lg font-semibold mb-2">{name}</p>
      <Link
        to={`/pokemon/${name}`}
        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-1 px-3 rounded"
      >
        View Details
      </Link>
    </div>
  );
}
