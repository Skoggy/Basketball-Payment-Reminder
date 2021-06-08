import { React, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import styled from 'styled-components'


const LoginStyles = styled.div`
display:grid;
align-items: center;
justify-content: center;
`

const TeamStyles = styled.button`

`

export default function Login() {

    const [selectedTeam, setSelectedTeam] = useState({
        name: '',
        players: []
    })

    console.log(selectedTeam)
    const { isLoading, error, data } = useQuery('teams', () =>
        axios('http://localhost:3001/api/teams'))
    console.log(data)
    if (isLoading) return "Loading...";

    if (error) return "An error has occured: " + error.message;

    const updateTheTeam = (team) => {
        setSelectedTeam({
            ...selectedTeam,
            name: team.name,
            players: team.player
        })
    }


    return (
        <LoginStyles>
            <h1>Choose Your Team</h1>
            <div>

                {data.data.map(team => <TeamStyles
                    key={team.uuid}
                    onClick={(e) => updateTheTeam(team)}
                >
                    {team.name}
                </TeamStyles>)}

                {selectedTeam.length === 0
                    ?
                    <div></div>
                    :
                    <div>
                        {selectedTeam.players.map(player =>
                            <p key={player.uuid}>{player.name}</p>
                        )}
                    </div>
                }
            </div>


        </LoginStyles>
    )
}