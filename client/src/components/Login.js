import React from 'react';
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

    const { isLoading, error, data } = useQuery('teams', () =>
        axios('http://localhost:3001/api/teams'))

    if (isLoading) return "Loading...";

    if (error) return "An error has occured: " + error.message;

    console.log(data.data)
    return (
        <LoginStyles>
            <h1>Choose Your Team</h1>
            <div>

                {data.data.map(team => <TeamStyles key={team.uuid}>{team.name}</TeamStyles>)}
            </div>
        </LoginStyles>
    )
}