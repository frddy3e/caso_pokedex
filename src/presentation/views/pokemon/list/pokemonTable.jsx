import Table from "../../../components/table";
import Actions from "../../../components/actions";
import PropTypes from "prop-types";

/**
 * The pokemon table component, which renders a table with the pokemon data.
 * @component
 * @example
 * const pokemonData = [
 *    {
 *      id: 1,
 *      name: 'bulbasaur',
 *      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
 *      attack: 49,
 *      defense: 49
 *    }
 * ];
 * const filter = '';
 * return (
 * <PokemonTable pokemonData={pokemonData} filter={filter} />
 * )
 */
const PokemonTable = (props) => {
  const { pokemonData, filter, onEdit, onDelete } = props;
  const headers = ["Nombre", "Imagen", "Ataque", "Defensa", "Acciones"];

  const filteredPokemonData = pokemonData.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(filter.toLowerCase());
  });

  const rows = filteredPokemonData.map((pokemon) => {
    return [
      pokemon.name,
      <img src={pokemon.image} alt={pokemon.name} height={50} width={50} />,
      pokemon.attack,
      pokemon.defense,
      <Actions
        onEdit={() => {
          onEdit(pokemon);
        }}
        onDelete={() => {
          onDelete(pokemon);
        }}
      />,
    ];
  });

  return (
    <div data-testid="pokemon-table">
      <Table headers={headers} rows={rows} />
    </div>
  );
};

PokemonTable.propTypes = {
  /**
   * The pokemon data, which is an array of objects.
   */
  pokemonData: PropTypes.array.isRequired,
};

PokemonTable.defaultProps = {
  pokemonData: [],
};

export default PokemonTable;
