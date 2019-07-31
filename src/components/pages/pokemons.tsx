import React from 'react'
import axios from 'axios'
import withLayout from '../templates/withLayout'
import { NextPage } from 'next';

export interface PokemonsProps {
  pokemons: Array<{name: string}>
}

const Pokemons: NextPage<PokemonsProps> = ({ pokemons }) => {
  return (
    <React.Fragment>
      <h1>pokemons</h1>
      <ul>
        {pokemons.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}
      </ul>
    </React.Fragment>
  );
}

Pokemons.getInitialProps = async () => {
  const pokemons = await axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(({ data }) => data)
      .then(response => {
        return response.results.map((pokemon: {name: string, url: string}) => ({
          name: pokemon.name
        }))
      })

  return {
    pokemons,
  }
}

export default withLayout()(Pokemons)