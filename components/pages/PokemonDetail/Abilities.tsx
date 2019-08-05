import React, { StatelessComponent } from 'react';
import { Ability } from '../../../pages/pokemons/[name]';

export interface AbilitiesProps {
    abilities: Array<Ability>;
}

const Abilities: StatelessComponent<AbilitiesProps> = ({
    abilities,
}) => {
    return (
        <ol>
            {abilities.map(ability => (
                <li key={ability.ability.name}>
                    {ability.ability.name}
                </li>
            ))}
        </ol>
    )
};

export default Abilities;