import { useState } from "react";
import { getAllPokemonUseCase } from "../../../../domain/useCase/pokemon/GetAllPokemon";

export default function PokemonListViewModel() {
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoadingPokemonList, setIsLoadingPokemonList] = useState(true);
    const [errorPokemonList, setErrorPokemonList] = useState(null);

    async function getPokemonList() {
        try{
            const pokemonList = await getAllPokemonUseCase();
            setPokemonList(pokemonList);
            setIsLoadingPokemonList(false);
            return pokemonList;
        } catch (error) {
            setErrorPokemonList(error);
        }
    }

    return {
        pokemonList,
        isLoadingPokemonList,
        errorPokemonList,
        getPokemonList
    }
}