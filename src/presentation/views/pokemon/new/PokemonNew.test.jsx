import PokemonNew from "./PokemonNew";
import { render, screen } from "@testing-library/react";

describe("PokemonNew", () => {
  test("should render pokemon new component", () => {
    render(<PokemonNew />);
    const pokemonNewElement = screen.getByTestId("pokemon-new");
    expect(pokemonNewElement).toBeInTheDocument();
  });

  test("on click should be called when button is clicked", () => {
    const onClick = jest.fn();
    render(<PokemonNew onClick={onClick} />);
    const buttonElement = screen.getByTestId("button");
    buttonElement.click();
    expect(onClick).toBeCalled();
  });
});
