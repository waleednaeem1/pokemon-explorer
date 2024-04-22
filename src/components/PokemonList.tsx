// PokemonList.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetPokemonListQuery } from '../services/pokemonApi';
import './PokemonList.css'; // Import CSS file for styling

interface PokemonListProps {
  onPokemonClick: (id: string) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ onPokemonClick }) => {
  const { data: pokemonListResponse, error, isLoading, refetch } = useGetPokemonListQuery({});

  useEffect(() => {
    refetch(); // This will trigger a re-fetch of the Pokemon list
  }, [refetch]); // Ensure the effect runs only when refetch changes

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    if ('message' in error) {
      return <div>Error: {error.message}</div>;
    } else {
      return <div>Error occurred</div>;
    }
  }

  const pokemonList = pokemonListResponse;

  return (
    <div className="pokemon-list-container">
      <h1>PokeReact</h1>
      <table className="pokemon-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {pokemonList &&
            pokemonList.results &&
            pokemonList.results.map((pokemon: any) => (
              <tr key={pokemon?.name} onClick={() => onPokemonClick(pokemon.url.split('/')[6])}>
                <td>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                    alt={pokemon?.name}
                    className="pokemon-image"
                  />
                </td>
                <td>
                  <Link to={`/pokemon/${pokemon.name}`} className="pokemon-link">
                    {pokemon?.name.toUpperCase()}
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonList;