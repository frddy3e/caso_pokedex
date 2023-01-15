import { createPokemon } from "../../../data/repository/pokemonRepository";

export function createPokemonUseCase(pokemon) {
    return createPokemon(pokemon);
}
