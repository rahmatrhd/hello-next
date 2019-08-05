import React, { FunctionComponent } from 'react';
import axios from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { TypesProps } from '../../components/pages/PokemonDetail/Types';
import { AbilitiesProps } from '../../components/pages/PokemonDetail/Abilities';

const Types = dynamic(() => import('../../components/pages/PokemonDetail/Types'));
const Abilities = dynamic(() => import('../../components/pages/PokemonDetail/Abilities'));

export interface Type {
    slot: number,
    type: {
        name: string,
        url: string,
    }
}

export interface Ability {
    slot: number,
    is_hidden: boolean,
    ability: {
        name: string,
        url: string,
    }
}
export interface Pokemon {
    abilities: Array<Ability>;
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
    types: Array<Type>;
    weight: number;
}

export interface PokemonDetailProps {
    pokemon: Pokemon;
    tabIndex?: number;
}

export enum TAB_INDEXES {
    TYPES = 'types',
    ABILITIES = 'abilities',
}

interface DynamicTabProps {
    selectedTab: TAB_INDEXES;
    props: TypesProps | AbilitiesProps,
}

const DynamicTab: FunctionComponent<DynamicTabProps> = ({
    selectedTab,
    props,
}) => {
    if (selectedTab === TAB_INDEXES.TYPES) return <Types {...props as TypesProps} />
    if (selectedTab === TAB_INDEXES.ABILITIES) return <Abilities {...props as AbilitiesProps} />

    return null
}

const PokemonDetail: NextPage<PokemonDetailProps> = ({
    pokemon,
}) => {
    const { query } = useRouter();
    const selectedTab = query.tab as TAB_INDEXES || TAB_INDEXES.TYPES;

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <ul>
                <li>height: {pokemon.height}</li>
                <li>weight: {pokemon.weight}</li>
            </ul>

            <Link
                href={`/pokemons/[name]?tab=${TAB_INDEXES.TYPES}`}
                as={`/pokemons/${pokemon.name}?tab=${TAB_INDEXES.TYPES}`}
                shallow
            >
                <a>
                    <button>types</button>
                </a>
            </Link>
            <Link
                href={`/pokemons/[name]?tab=${TAB_INDEXES.ABILITIES}`}
                as={`/pokemons/${pokemon.name}?tab=${TAB_INDEXES.ABILITIES}`}
                shallow
            >
                <a>
                    <button>abilities</button>
                </a>
            </Link>

            <DynamicTab selectedTab={selectedTab} props={{
                ...(selectedTab === TAB_INDEXES.TYPES ? { types: pokemon.types } : {}),
                ...(selectedTab === TAB_INDEXES.ABILITIES ? { abilities: pokemon.abilities } : {}),
            } as TypesProps | AbilitiesProps}/>
        </div>
    );
}

PokemonDetail.getInitialProps = async ({ query }) => {
    const name = query.name;
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(({ data }) => data)
    
    return {
        pokemon,
    }
}

export default PokemonDetail;