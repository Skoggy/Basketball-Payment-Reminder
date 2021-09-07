
import React from 'react';

const Player = (props) => {
    return (
        <div className="card">
            <div className='content'>
                <ul>
                    <li>
                        Player Name: <button onClick={props.onClick}> {props.name}</button>
                    </li>
                    <li>
                        Ammount Owed: {props.ammountOwed}
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Player;
