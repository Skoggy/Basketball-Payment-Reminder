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
        players: [],
        teamId: ''
    })

    const [newPlayerInput, setNewPlayerInput] = useState({
        name: '',
        email: '',
        amountOwed: 0,
        uuid: ''
    })

    const [newPlayerDisplay, setNewPlayerDisplay] = useState(false);
    const [displayPlayersBoolean, setDisplayPlayersBoolean] = useState(false);

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
            players: team.player,
            teamId: team.id,
        })
        setDisplayPlayersBoolean(true)
    }

    const createPlayer = (e) => {
        e.preventDefault();
        const data = {
            name: newPlayerInput.name,
            email: newPlayerInput.email,
            amountOwed: newPlayerInput.amountOwed,
            teamId: selectedTeam.teamId
        }
        axios.post('http://localhost:3001/api/players', data).then((result) => {
            console.log(result, 'new player Added')

        })
    }

    const onChangeInput = (e) => {
        setNewPlayerInput({ ...newPlayerInput, [e.target.name]: e.target.value })
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

                {displayPlayersBoolean === false
                    ?
                    <div>Please Select your Team</div>
                    :
                    <div>
                        {selectedTeam.players.map(player =>
                            <p key={player.uuid}>{player.name}</p>
                        )}
                        <TeamStyles onClick={(e) => setNewPlayerDisplay(true)}>Add New Player</TeamStyles>
                    </div>
                }
                {newPlayerDisplay === false
                    ?
                    <div></div>
                    :
                    <div>
                        <label>Name</label>
                        <input type='text'
                            name='name'
                            id="Name"
                            placeholder='Name'
                            value={newPlayerInput.name}
                            onChange={onChangeInput} />
                        <label>email</label>
                        <input type='text'
                            name='email'
                            id="Email"
                            placeholder='Email'
                            value={newPlayerInput.email}
                            onChange={onChangeInput} />

                        <button type="submit" onClick={(e) => createPlayer(e)}>Submit</button>
                    </div>
                }
            </div>


        </LoginStyles>
    )
}