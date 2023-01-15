import PokemonNewEdit from './PokemonNewEdit';
import { render, screen } from '@testing-library/react';

describe('PokemonNewEdit', () => {
    test('should render pokemon new edit component', () => {
        const pokemon = {
            id: 1,
            name: 'bulbasaur',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            attack: 49,
            defense: 49
        };
        const onChange = () => {};
        const onSave = () => {};
        const onCancel = () => {};

        render(<PokemonNewEdit pokemon={pokemon} onChange={onChange} onSave={onSave} onCancel={onCancel} />);
        const pokemonNewEditElement = screen.getByTestId('pokemon-new-edit');
        expect(pokemonNewEditElement).toBeInTheDocument();
    });

});