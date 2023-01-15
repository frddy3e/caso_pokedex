import "./App.css";
import PokemonTable from "./presentation/views/pokemon/list/pokemonTable";
import PokemonNewEdit from "./presentation/views/pokemon/edit/PokemonNewEdit";
import PokemonFilter from "./presentation/views/pokemon/filter/PokemonFilter";
import PokemonNew from "./presentation/views/pokemon/new/PokemonNew";
import Title from "./presentation/components/title";

import { useEffect } from "react";
import PokemonListViewModel from "./presentation/views/pokemon/list/ViewModel";
import PokemonNewViewModel from "./presentation/views/pokemon/new/viewModel";
import PokemonEditViewModel from "./presentation/views/pokemon/edit/ViewModel";
import PokemonSearchViewModel from "./presentation/views/pokemon/filter/ViewModel";

function App() {
  const {
    getPokemonList,
    pokemonList,
    isLoadingPokemonList,
    errorPokemonList,
  } = PokemonListViewModel();
  const {
    handleSavePokemon,
    handleCancelCreatePokemon,
    newPokemon,
    isCreatingPokemon,
    handleCreatePokemon,
  } = PokemonNewViewModel();
  const {
    handleEditPokemon,
    handleSaveEditPokemon,
    handleCancelEditPokemon,
    handleDeletePokemon,
    editPokemon,
    isEditingPokemon,
    isDeletingPokemon,
  } = PokemonEditViewModel();

  const { filter, setFilter } = PokemonSearchViewModel();

  useEffect(() => {
    getPokemonList();
    // eslint-disable-next-line
  }, [isCreatingPokemon, isDeletingPokemon, isEditingPokemon]);

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="App">
      <div className="title" data-testid="general-title">
        <Title text="Listado de Pokemon" />
      </div>

      <div>
        {errorPokemonList && (
          <div data-testid="error-pokemon-list">
            Error al cargar la lista de Pokemons
          </div>
        )}
        {isLoadingPokemonList && (
          <div data-testid="loading-pokemon-list">
            Cargando lista de Pokemon...
          </div>
        )}
        {!isLoadingPokemonList && !errorPokemonList && (
          <div>
            <div className="filter-new">
              <PokemonFilter onChange={onChangeFilter} />
              <PokemonNew onClick={handleCreatePokemon} />
            </div>

            <PokemonTable
              pokemonData={pokemonList}
              filter={filter}
              onEdit={handleEditPokemon}
              onDelete={handleDeletePokemon}
            />
          </div>
        )}
      </div>

      <div>
        {isCreatingPokemon && (
          <PokemonNewEdit
            pokemon={newPokemon}
            newPokemon={isCreatingPokemon}
            onSave={handleSavePokemon}
            onCancel={handleCancelCreatePokemon}
          />
        )}
        {isEditingPokemon && (
          <PokemonNewEdit
            pokemon={editPokemon}
            editPokemon={isEditingPokemon}
            onSave={handleSaveEditPokemon}
            onCancel={handleCancelEditPokemon}
          />
        )}
      </div>
    </div>
  );
}

export default App;
