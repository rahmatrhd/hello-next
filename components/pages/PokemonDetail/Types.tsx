import React, { StatelessComponent } from 'react';
import { Type } from '../../../pages/pokemons/[name]';

export interface TypesProps {
    types: Array<Type>;
}

const Types: StatelessComponent<TypesProps> = ({
    types,
}) => {
    return (
        <ol>
            {types.map(type => (
                <li key={type.type.name}>
                    {type.type.name}
                </li>
            ))}
        </ol>
    )
};

export default Types;