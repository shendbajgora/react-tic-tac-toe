import React, {useState} from 'react';
import Square from "../Square/Square";

const Board = () => {

    const initialState = {
        squares: Array(9).fill(null),
        xIsNext: true
    };
    const [{squares, xIsNext}, setState] = useState(initialState);

    const handleClick = (index) => {
        const newSquares = squares.slice();

        if (calculateWinner(newSquares) || squares[index]) {
            return;
        }

        newSquares[index] = xIsNext ? 'X' : 'O';

        setState((prevState) => {
            return {
                squares: newSquares,
                xIsNext: !prevState.xIsNext
            }
        });
    }

    const renderSquare = (index) => {
        return (
            <Square value={squares[index]}
                    onClick={() => handleClick(index)}
            />
        )
    }

    const winner = calculateWinner(squares);
    let status;

    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
        </>
    );
}

function calculateWinner (squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Board;
