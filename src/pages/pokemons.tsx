import React from 'react'
import axios from 'axios'
import withLayout from '../components/templates/withLayout'

export interface PokemonsProps {
  pokemons: Array<{name: string}>
}

class Pokemons extends React.Component<PokemonsProps> {
  static getInitialProps = (): Promise<PokemonsProps> => {
    return axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(({ data }) => data)
      .then(response => {
        return response.results.map((pokemon: {name: string, url: string}) => ({
          name: pokemon.name
        }))
      })
      .then(pokemons => ({ pokemons }))
  }

  render() {
    const {
      pokemons,
    } = this.props

    return (
      <React.Fragment>
        <h1>pokemons</h1>
        <ul>
          {pokemons.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}
        </ul>
      </React.Fragment>
    )
  }
}

export default withLayout()(Pokemons)