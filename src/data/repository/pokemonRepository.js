import {
    getAll,
    create,
    getOne,
    update,
    deleteOne
} from '../dataSource/pokemonDataSource';

export function getAllPokemon(){
    return getAll();
}

export function createPokemon(pokemon){
    return create(pokemon);
}

export function getPokemon(id){
    return getOne(id);
}

export function updatePokemon(pokemon){
    return update(pokemon);
}

export function deletePokemon(id){
    return deleteOne(id);
}
