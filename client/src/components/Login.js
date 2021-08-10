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

    const playerUrl = 'http://localhost:3001/api/players'

    const [amountOwed, setAmountOwed] = useState({
        uuid: '',
        amount: '',
    })

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

    const [selectedPlayer, setSelectedPlayer] = useState({
        name: '',
        email: '',
        amountOwed: 0,
        uuid: ''
    })

    const [sent, setSent] = useState(false);
    const [text, setText] = useState('');

    const handleSend = async (e) => {
        setSent(true)
        try {
            await axios.post('http://localhost:3001/api/send_mail', {
                text
            })
        } catch (error) {
            console.log(error)
        }
    }



    // console.log(selectedPlayer)

    const [newPlayerDisplay, setNewPlayerDisplay] = useState(false);
    const [displayPlayersBoolean, setDisplayPlayersBoolean] = useState(false);

    // console.log(selectedTeam)
    const { isLoading, error, data, refetch } = useQuery('teams', () =>
        axios('http://localhost:3001/api/teams',))
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

    // takes what is put in the amount to be updated.
    const onAmountChange = (e) => {
        e.persist();
        setAmountOwed({ ...amountOwed, amount: e.target.value })
    }

    const updateAmountOwed = (e) => {
        e.preventDefault();
        const data = selectedPlayer.uuid;
        const amount = { amountOwed: [JSON.parse(selectedPlayer.amountOwed) + JSON.parse(amountOwed.amount)] }
        axios.put(`${playerUrl}/${data}`, amount).then((result) => {
            console.log(`You have added/subtracted ${amountOwed.amount}`)
            refetch('teams')
            setAmountOwed({ ...amountOwed, amount: 0 })
            setSelectedPlayer('')
        })
    }
    console.log(selectedPlayer.amountOwed + amountOwed.amount)

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
                            <div key={player.uuid}>
                                <button
                                    onClick={(e) => setSelectedPlayer(player)}
                                >{player.name}</button>
                                <p>{player.amountOwed}</p>


                            </div>
                        )}
                        <h3>Update what {selectedPlayer.name} owes</h3>
                        <input type='number'
                            name='PlayerOwes'
                            id='PlayerOwes'
                            value={amountOwed.amount}
                            onChange={onAmountChange} />
                        <button onClick={updateAmountOwed}>Update Owed</button>
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

            {!sent ? (
                <form onSubmit={handleSend}>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                    <button type='submit'>Send Email</button>

                </form>
            ) : (
                <h1>Email Sent</h1>
            )}
        </LoginStyles>
    )
}