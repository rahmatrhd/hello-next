import React, { useState } from 'react'
import axios from 'axios'
import withLayout from '../../components/templates/withLayout'
import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Pagination from '../../components/molecules/Pagination';

export interface PokemonsProps {
  pokemons: Array<{name: string}>;
  total: number;
}

export interface PokemonsQuery {
    page: number,
    limit: number,
}

const getQuery = (query: NextPageContext['query']): PokemonsQuery => {
    const page = parseInt(query.page as string, 10) || 1;
    const limit = parseInt(query.limit as string, 10) || 20;

    return { page, limit }
}

const Pokemons: NextPage<PokemonsProps> = ({ pokemons, total }) => {
    const { query } = useRouter();
    const { page, limit } = getQuery(query);

    return (
        <React.Fragment>
            <h1>pokemons</h1>
            <p>showing {((page - 1) * limit) + (pokemons.length && 1)} - {((page - 1) * limit) + pokemons.length} of {total}</p>
            <ul>
                {pokemons.map(pokemon => (
                    <li key={pokemon.name}>
                        <Link href="/pokemons/[name]" as={`/pokemons/${pokemon.name}`}>
                            <a>{pokemon.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <Pagination current={page} total={total} limit={limit} linkProps={(p) => ({ href: `/pokemons?page=${p}`})} />
        </React.Fragment>
    );
}

Pokemons.getInitialProps = async ({ query }) => {
    const { page, limit } = getQuery(query);
    const offset = limit * (page - 1);

    const { pokemons, total } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        .then(({ data }) => data)
        .then(response => {
            return {
                pokemons: response.results.map((pokemon: {name: string, url: string}) => ({
                    name: pokemon.name
                })),
                total: response.count,
            };
        });

    return {
        pokemons,
        total,
    }
}

export default withLayout()(Pokemons)