import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonDetails from './PokemonDetails'; // Import the component correctly

describe('PokemonDetails', () => {
  test('renders loading state', () => {
    render(<PokemonDetails id="1" />); // Provide a mock id prop
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });

  test('renders error state', () => {
    const errorMessage = 'Failed to fetch Pokemon details';
    render(<PokemonDetails id="1" error={errorMessage} />); // Provide a mock id prop
    const errorElement = screen.getByText(`Error: ${errorMessage}`);
    expect(errorElement).toBeInTheDocument();
  });

  test('renders Pokemon details', () => {
    const pokemonDetails = {
      name: 'Pikachu',
      sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
      height: 40,
      weight: 6,
    };
    render(<PokemonDetails id="1" pokemon={pokemonDetails} />); // Provide a mock id prop
    const pikachuNameElement = screen.getByText('PIKACHU');
    const pikachuImageElement = screen.getByAltText('Pikachu');
    const pikachuHeightElement = screen.getByText('Height: 40 cm');
    const pikachuWeightElement = screen.getByText('Weight: 6 kg');
    expect(pikachuNameElement).toBeInTheDocument();
    expect(pikachuImageElement).toBeInTheDocument();
    expect(pikachuHeightElement).toBeInTheDocument();
    expect(pikachuWeightElement).toBeInTheDocument();
  });
});
