// App.tsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; // Assuming store is properly configured in store.ts

import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';

const App: React.FC = () => {
  const [selectedPokemonId, setSelectedPokemonId] = useState<string | null>(null);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div style={{ display: 'flex' }}>
          <PokemonList onPokemonClick={setSelectedPokemonId} />
          {selectedPokemonId && <PokemonDetails id={selectedPokemonId} />}
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;