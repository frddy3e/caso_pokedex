import { useState } from "react";

export default function PokemonSearchViewModel() {
  const [filter, setFilter] = useState("");

  return {
    filter,
    setFilter,
  };
}
