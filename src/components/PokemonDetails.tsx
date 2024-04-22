// PokemonDetails.tsx
import React from 'react';
import { useGetPokemonByIdQuery } from '../services/pokemonApi';

interface PokemonDetailsProps {
  id: string;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ id }) => {
  const { data: pokemon, error, isLoading } = useGetPokemonByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    if ('message' in error) {
      return <div>Error: {error.message}</div>;
    } else {
      return <div>Error occurred</div>;
    }
  }

  return (
    <div>
      {/* <h1>Pokemon Details</h1> */}
      <h2>{pokemon?.name.toUpperCase()}</h2>
      <div>
        <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      </div>
      <div><strong>Name</strong> {pokemon?.name}</div>
      <hr/>
      <div><strong>Height</strong> {pokemon?.height} cm</div>
      <hr/>
      <div><strong>Weight</strong> {pokemon?.weight} kg</div>
      <hr/>
      {/* <div>Types: {pokemon?.types}</div> */}
    </div>
  );
};

export default PokemonDetails;
