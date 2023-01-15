import { deletePokemon } from "../../../data/repository/pokemonRepository";

export function deletePokemonUseCase(id) {
    return deletePokemon(id);
}
