import { faMinus, faPlus, faSave, faUser, faUserMinus, faUserPlus, faUserSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import './PlayerDetails.css';

const PlayerDetails = (props) => {
    // console.log(props);
    
    // console.log(props.player);
    const {name, age, image, country, role, t20Match, t20Run, t20Fifty, t20Wicket, t20Hundred, t20Hattrick, t20FiveWicket, t20BatsmanRank, t20BowlerRank, basePrice} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="player-details-style">
            <div className="left-side-style">
                <p>
                    <FontAwesomeIcon icon = { faUser }></FontAwesomeIcon> &nbsp;
                    {name}
                </p>
                <p>
                    {age} Years Old.
                </p>
                <p>
                    Country - {country}
                </p>
                <p>
                    Role - {role}
                </p>
                <p>
                    Base Price - {basePrice} Tk
                </p>
            </div>
            <div className='middle-side-style'>
                <img src={image} alt=""/>
            </div>
            <div className='right-side-style'>
                <h3>
                    Total Match Played : {t20Match}
                </h3>
                <div className='player-stats'>
                    <div className="batting-style">
                        <p>
                            Total Run : {t20Run}
                        </p>
                        <p>
                            Total Fifty : {t20Fifty}
                        </p>
                        <p>
                            Total Hundred : {t20Hundred}
                        </p>
                        <p>
                            Batsman Rank : {t20BatsmanRank}
                        </p>
                    </div>
                    <div className="bowling-style">
                        <p>
                            Total Wickets : {t20Wicket}
                        </p>
                        <p>
                            Total Hat-tricks : {t20Hattrick}
                        </p>
                        <p>
                            Total Five Wickets : {t20FiveWicket}
                        </p>
                        <p>
                            Bowler Rank : {t20BowlerRank}
                        </p>
                    </div>
                </div>
            </div>
            <div className="button-side-style">
                <Button className='firstButton' variant="primary" onClick={() => {handleAddPlayer(props.player)}}>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> &nbsp;
                    Add Player &nbsp;
                    <FontAwesomeIcon icon = { faUserPlus }></FontAwesomeIcon>
                </Button>
                <br/>
                <Button variant="primary">
                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon> &nbsp;
                    Delete Player &nbsp;
                    <FontAwesomeIcon icon = { faUserMinus }></FontAwesomeIcon>
                </Button>
                {/* <br/> */}
                <Button variant="primary">
                    <FontAwesomeIcon icon={faSave}></FontAwesomeIcon> &nbsp;
                    Save Player &nbsp;
                    <FontAwesomeIcon icon = { faUserSlash }></FontAwesomeIcon>
                </Button>
                {/* <Button variant="primary">Save Player</Button>{' '} */}
                {/* <button>Add Player</button>
                <button>Delete Player</button> */}
            </div>
        </div>
    );
};

export default PlayerDetails;