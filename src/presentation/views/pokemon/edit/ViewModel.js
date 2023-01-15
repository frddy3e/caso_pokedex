import { useState } from "react";
import { updatePokemonUseCase } from "../../../../domain/useCase/pokemon/UpdatePokemon";
import { deletePokemonUseCase } from "../../../../domain/useCase/pokemon/DeletePokemon";

export default function PokemonEditViewModel() {
  const [editPokemon, setEditPokemon] = useState({});
  const [isDeletingPokemon, setIsDeletingPokemon] = useState(false);
  const [isEditingPokemon, setIsEditingPokemon] = useState(false);

  async function handleEditPokemon(pokemon) {
    setIsEditingPokemon(true);
    setEditPokemon(pokemon);
  }

  async function handleSaveEditPokemon(pokemon) {
    const confirmation = window.confirm(
      `¿Estás seguro de editar la información de ${pokemon.name}?`
    );
    if (!confirmation) return;
    try {
      await updatePokemonUseCase(pokemon);
    } catch (error) {
      alert("Algo salió mal, intentalo de nuevo");
    }
    setIsEditingPokemon(false);
  }

  async function handleCancelEditPokemon() {
    setIsEditingPokemon(false);
  }

  async function handleDeletePokemon(pokemon) {
    const confirmation = window.confirm(
      `¿Estás seguro de eliminar a ${pokemon.name}?`
    );
    if (!confirmation) return;
    setIsDeletingPokemon(true);
    try {
      await deletePokemonUseCase(pokemon.id);
    } catch (error) {
      alert("Algo salió mal, intentalo de nuevo");
    }
    setIsDeletingPokemon(false);
  }

  return {
    editPokemon,
    isEditingPokemon,
    isDeletingPokemon,
    setEditPokemon,
    handleEditPokemon,
    handleSaveEditPokemon,
    handleCancelEditPokemon,
    handleDeletePokemon,
  };
}
