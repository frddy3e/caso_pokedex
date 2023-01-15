import PokemonTable from "./pokemonTable";
import { render, screen } from "@testing-library/react";

describe("PokemonTable", () => {
  test("should render pokemon table component", () => {
    render(<PokemonTable />);
    const pokemonListElement = screen.getByTestId("pokemon-table");
    expect(pokemonListElement).toBeInTheDocument();
  });

  test("pokemon table should render data", () => {
    const pokemonData = [
      {
        id: 1,
        name: "bulbasaur",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        attack: 49,
        defense: 49,
      },
    ];
    render(<PokemonTable pokemonData={pokemonData} filter={""} />);
    const tableBodyElement = screen.getByTestId("table-body");
    expect(tableBodyElement.children.length).toBe(1);
  });

  test("pokemon table should render data with filter", () => {
    const pokemonData = [
      {
        id: 1,
        name: "bulbasaur",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        attack: 49,
        defense: 49,
      },
      {
        id: 1,
        name: "ivysaur",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        attack: 49,
        defense: 49,
      },
    ];
    render(<PokemonTable pokemonData={pokemonData} filter={"bul"} />);
    const tableBodyElement = screen.getByTestId("table-body");
    expect(tableBodyElement.children.length).toBe(1);
  });

  test("pokemon table should not render data, filter not match", () => {
    const pokemonData = [
      {
        id: 1,
        name: "bulbasaur",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        attack: 49,
        defense: 49,
      },
      {
        id: 1,
        name: "ivysaur",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        attack: 49,
        defense: 49,
      },
    ];
    render(<PokemonTable pokemonData={pokemonData} filter={"char"} />);
    const tableBodyElement = screen.getByTestId("table-body");
    expect(tableBodyElement.children.length).toBe(1);
    expect(tableBodyElement.children[0].children[0].textContent).toBe(
      "No hay datos"
    );
  });
});
