import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

export default function GetData(props) {

    const { isLoading, error, data } = useQuery('test', () =>
        axios('http://localhost:3001/api/teams'))

    return (
        <div>
            <p> {data.data.map(item => item.name)} </p>
        </div>
    )
}