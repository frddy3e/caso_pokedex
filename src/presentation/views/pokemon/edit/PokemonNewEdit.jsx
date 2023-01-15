import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import InputText from "../../../components/inputText";
import Button from "../../../components/button";
import Slider from "../../../components/slider";
import Title from "../../../components/title";

import { AiOutlineSave } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import Style from "./PokemonNewEdit.module.css";

/**
 * The componenet that renders the pokemon new/edit view.
 * @component
 * @example
 * return (
 * <PokemonNewEdit
 *  pokemon={pokemon}
 * onSave={onSave}
 * onCancel={onCancel}
 * newPokemon=false
 * editPokemon=true
 *  />
 * )
 */
const PokemonNewEdit = (props) => {
  const [name, setName] = useState(props.pokemon.name);
  const [attack, setAttack] = useState(props.pokemon.attack);
  const [defense, setDefense] = useState(props.pokemon.defense);
  const [image, setImage] = useState(props.pokemon.image);

  const { onSave, onCancel, newPokemon, editPokemon } = props;

  return (
    <div data-testid="pokemon-new-edit" className={Style.container}>
      <Title
        text={
          newPokemon ? "Nuevo Pokemon" : editPokemon ? "Editar Pokemon" : ""
        }
      />
      <div className={Style.formRow}>
        <InputText
          id="name"
          name="name"
          label="Nombre: "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Slider
          id="attack"
          name="attack"
          label="Ataque: "
          value={attack}
          minValue={0}
          maxValue={100}
          onChange={(e) => setAttack(parseInt(e.target.value))}
        />
      </div>
      <div className={Style.formRow}>
        <InputText
          id="image"
          name="image"
          label="Imagen: "
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Slider
          id="defense"
          name="defense"
          label="Defensa: "
          value={defense}
          minValue={0}
          maxValue={100}
          onChange={(e) => setDefense(parseInt(e.target.value))}
        />
      </div>
      <div className={Style.buttonRow}>
        <Button
          text={<p>Guardar</p>}
          onClick={() => {
            const savePokemon = {
              id: props.pokemon.id,
              name: name,
              attack: attack,
              defense: defense,
              image: image,
              hp: 100,
              type: "NA",
              idAuthor: 1,
            };

            //console.log(savePokemon);
            onSave(savePokemon);
          }}
          icon={<AiOutlineSave size={20} />}
          disabled={
            name === "" || (attack === 0 && defense === 0) || image === ""
          }
        />
        <Button
          text={<p>Cancelar</p>}
          onClick={onCancel}
          icon={<AiOutlineClose size={20} />}
          disabled={false}
        />
      </div>
    </div>
  );
};

PokemonNewEdit.defaultProps = {
  pokemon: {},
  onSave: () => {},
  onCancel: () => {},
  newPokemon: false,
  editPokemon: false,
};

PokemonNewEdit.propTypes = {
  /**
   * The pokemon data
   */
  pokemon: PropTypes.object,
  /**
   * The function to call when the user clicks on the save button
   */
  onSave: PropTypes.func,
  /**
   * The function to call when the user clicks on the cancel button
   */
  onCancel: PropTypes.func,

  /**
   * The flag to indicate if the view is for a new pokemon
   * @default false
   * @type {boolean}
   */
  newPokemon: PropTypes.bool,

  /**
   * The flag to indicate if the view is for a edit pokemon
   * @default false
   * @type {boolean}
   */
  editPokemon: PropTypes.bool,
};

export default PokemonNewEdit;
