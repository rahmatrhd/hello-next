import axios from 'axios';
import { NextPage } from 'next';
import withLayout from '../../components/templates/withLayout';

export interface Pokemon {
    abilities: Array<Object>;
    base_experience: number;
    forms: Array<Object>;
    game_indices: Array<Object>;
    height: number;
    held_items: Array<Object>;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Array<Object>;
    name: string;
    order: number;
    species: Object;
    sprites: Object;
    stats: Array<Object>;
    types: Array<Object>;
    weight: number;
}

export interface PokemonDetailProps {
    pokemon: Pokemon;
}

const PokemonDetail: NextPage<PokemonDetailProps> = ({
    pokemon
}) => {
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <ul>
                <li>height: {pokemon.height}</li>
                <li>weight: {pokemon.weight}</li>
            </ul>
        </div>
    );
}

PokemonDetail.getInitialProps = async ({ query }) => {
    const name = query.name;
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(({ data }) => data)

  return {
    pokemon
  }
}

export default withLayout()(PokemonDetail);