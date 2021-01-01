import React from 'react';
import Board from "../Board/Board";

const Game = () => {

    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>

            <div className="game-info">
                <div>{/* status */}</div>
                <div>{/* todo */}</div>
            </div>
        </div>
    );
}

export default Game;