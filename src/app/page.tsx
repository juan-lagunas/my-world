'use client';
import { useState } from 'react';

function Square({value, onSquareClick}: {value:any, onSquareClick:any}) {
    return <button className="h-24 sm:w-32 sm:h-32 text-2xl sm:text-3xl font-bold bg-zinc-200 hover:bg-zinc-400 transition ease-in-out" onClick={onSquareClick}>{value}</button>;
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
        status = winner + ' wins!'
    } else {
        status = 'Next player: ' + (xIsNext ? "X": "O");
    }

    return (
        <main className="flex min-h-screen w-full bg-violet-600">
            <div className="w-full sm:w-auto m-auto text-center text-white">
                <div className="font-bold text-3xl sm:text-6xl mb-2">Tic-Tac-Toe</div>
                <div className="font-semibold text-xl mb-2">{status}</div>
                <div className="w-10/12 sm:w-auto mx-auto grid grid-cols-3 grid-rows-3 text-gray-600 shadow-md rounded-xl overflow-hidden">
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
