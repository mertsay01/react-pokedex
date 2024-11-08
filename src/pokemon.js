import React from 'react';
import './pokemon.css';

const Pokemon = ({ data }) => (
  <div className="pokemon">
    <h2>{data.name.toUpperCase()}</h2>
    <img className="pokemonimg" src={data.sprites.front_default} alt={data.name} />
    
    <div>
      <h3 className="pokemonh3">Abilities</h3>
      <ul className="pokemonul">
        {data.abilities.map((ability, index) => (
          <li className="pokemonli" key={index}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
    
    <div>
      <h3 className="pokemonh3">Type</h3>
      <ul className="pokemonul">
        {data.types.map((type, index) => (
          <li className="pokemonli" key={index}>{type.type.name}</li>
        ))}
      </ul>
    </div>
    
    <div>
      <h3 className="pokemonh3">Moves</h3>
      <ul className="pokemonul">
        {data.moves.slice(0, 4).map((move, index) => (
          <li className="pokemonli" key={index}>{move.move.name}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default Pokemon;
