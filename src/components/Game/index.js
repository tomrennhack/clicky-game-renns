import React from "react";

function Game(props) {
    return (
    <div className = "Game">
        {props.cards.map( card => <img alt="" src={card.url} key={card.id} />)}
    </div>
    )
}

export default Game;