import React from 'react';
import { render } from '@testing-library/react';
import PokemonList from './PokemonList';

test('renders Pokemon List header', () => {
  const onPokemonClick = jest.fn(); // Create a mock function
  const { getByText } = render(<PokemonList onPokemonClick={onPokemonClick} />); // Pass the mock function as a prop
  const headerElement = getByText(/Pokemon List/i);
  expect(headerElement).toBeInTheDocument();
});