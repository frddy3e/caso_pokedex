import { getAllPokemon } from "../../../data/repository/pokemonRepository";

export function getAllPokemonUseCase() {
    return getAllPokemon();
}