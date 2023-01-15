import React from "react";
import InputTextIcon from "../../../components/inputTextIcon";
import { AiOutlineSearch } from "react-icons/ai";

const PokemonFiler = (props) => {
  return (
    <InputTextIcon
      placeholder={"Buscar"}
      icon={<AiOutlineSearch size={20} color={"#ccc"} />}
      onChange={props.onChange}
    />
  );
};

export default PokemonFiler;
