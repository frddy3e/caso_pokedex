import { updatePokemon } from "../../../data/repository/pokemonRepository";

export function updatePokemonUseCase(pokemon) {
    return updatePokemon(pokemon);
}