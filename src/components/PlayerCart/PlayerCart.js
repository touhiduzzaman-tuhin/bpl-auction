import React from 'react';
import './PlayerCart.css';

const PlayerCart = (props) => {
    const players = props.selectedPlayer;
    const totalPrice = players.reduce(((total, player) => total + player.basePrice), 0);
    return (
        <div className="cart-style">
            <h1>Player Cart</h1>
            <hr/>
            <h3>Selected Players : {players.length} </h3>
            <p>Total Cost : {totalPrice} TK</p>
            <hr/>
            <h3>Player List</h3>
            <hr/>
            {
                players.map(player => 
                    <div className="cart-image-style">
                        <img src={player.image} alt=""/>
                        <div>
                            <p>{player.name}</p>
                            <p>{player.role}</p>
                        </div>
                    </div>
                    )
            }
        </div>
    );
};

export default PlayerCart;