import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';



export const TestGet = () => {

    const { isLoading, error, data } = useQuery('test', () =>
        axios('http://localhost:3001/api/teams'))

    data.data.forEach(team => (team.player.forEach(individual => (console.log(individual.name)))))

    return (
        <div>
            <h1>Testing getting the info</h1>

            {error && <div>Something has gone wrong</div>}

            {isLoading ? (
                <div>Loading information...Please Wait...</div>
            ) : (
                data.data.map(team => (<div><h2 key={team.uuid}>{team.name}</h2>
                    <ul>
                        <li>{team.player.map(individual => individual.name)}</li>
                    </ul>
                </div>
                ))

            )
            }

        </div>
    )
}