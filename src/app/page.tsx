'use client';
import { useState } from 'react';

type Props = {
    value: string;
    onClick: () => void;
}

function Square({value, onSquareClick}: {value:any, onSquareClick:any}) {
    return <button className="W-16 h-16 bg-zinc-200" onClick={onSquareClick}>{value}</button>;
}

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i:any) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner ' + winner
    } else {
        status = 'Next player: ' + (xIsNext ? "X": "O");
    }

    return (
        <main className="flex min-h-screen">
            <div className="m-auto">
                <div className="text-center font-bold text-3xl">Tic-Tac-Toe</div>
                <div>{status}</div>
                <div className="grid grid-cols-3 grid-rows-3">
                    {[...Array(9)].map((e, i) => <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)}/>)}
                </div>
            </div>
        </main>
    );
}

function calculateWinner(squares: any) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}
