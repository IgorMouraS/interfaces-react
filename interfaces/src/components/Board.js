import React from 'react';
import Square from './Square';
import calculateWinner from './calculateWinner';

function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
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
            <div className="status">{status}</div>
            {[0, 1, 2].map((row) => (
                <div className="board-row" key={row}>
                    {[0, 1, 2].map((col) => (
                        <Square
                            key={col}
                            value={squares[row * 3 + col]}
                            onSquareClick={() => handleClick(row * 3 + col)}
                        />
                    ))}
                </div>
            ))}
        </>
    );
}


export default Board;