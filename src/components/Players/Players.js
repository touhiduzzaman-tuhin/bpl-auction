import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import PlayerCart from '../PlayerCart/PlayerCart';
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import './Players.css';

const Players = () => {
    
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState([]);

    useEffect( () => {
        setPlayers(fakeData);
    }, []);

    // console.log(players.length);
    const handleAddPlayer = (player) => {
        const newPlayer = [...selectedPlayer, player];
        setSelectedPlayer(newPlayer);
    }

    return (
        <div className="player-style">
            <div className="player-description">
                {
                    players.map(player => <PlayerDetails key={player.id} handleAddPlayer = {handleAddPlayer} player={player}></PlayerDetails>)
                }
            </div>
            <div className="player-cart-style">
                <PlayerCart selectedPlayer = {selectedPlayer}></PlayerCart>
            </div>
        </div>
    );
};

export default Players;