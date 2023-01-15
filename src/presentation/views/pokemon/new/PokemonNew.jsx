import React from "react";
import Button from "../../../components/button";
import { AiOutlinePlus } from "react-icons/ai";

const PokemonNew = (props) => {
  return (
    <div data-testid="pokemon-new">
      <Button
        onClick={props.onClick}
        disabled={false}
        text={<p>Nuevo</p>}
        icon={<AiOutlinePlus size={20} color={"#fff"} />}
      />
    </div>
  );
};

export default PokemonNew;
