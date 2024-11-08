import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Pokemon from './pokemon';
import './index.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (event) => {
    if (event.key === 'Enter') {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
        if (!response.ok) throw new Error('Pokemon not found');
        const data = await response.json();
        setPokemonData(data);
        setError('');
      } catch (err) {
        setPokemonData(null);
        setError(err.message);
      }
    }
  };

  return (
    <div className="app">
      <h1>Pokedex</h1>
      <input
        type="text"
        placeholder="Search by name or number"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch}
      />
      {error && <p className="error">{error}</p>}
      {pokemonData && <Pokemon data={pokemonData} />}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
