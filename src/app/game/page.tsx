'use client';
import { useState } from 'react';

function Square({value, onSquareClick}: {value:any, onSquareClick:any}) {
    if (!value) {
        return <button className="h-24 sm:w-32 sm:h-32 text-2xl sm:text-3xl font-bold bg-white sm:hover:bg-zinc-300 transition ease-in-out " onClick={onSquareClick}>{value}</button>;
    }
    return <button className="h-24 sm:w-32 sm:h-32 text-2xl sm:text-3xl font-bold bg-white" disabled>{value}</button>;
}

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [count, setCount] = useState(0);

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
        setCount(count + 1);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = winner + ' wins!';
    } else if (count === 9) {
        status = "It's a tie!";
    } else {
        status = 'Next player: ' + (xIsNext ? "X": "O");
    }

    return (
        <main className="flex min-h-screen w-full bg-black">
            <div className="w-full sm:w-auto m-auto text-center text-white">
                <div className="font-bold text-3xl sm:text-6xl mb-3">Tic-Tac-Toe</div>
                <div className="font-semibold text-xl mb-3">{status}</div>
                <div className="w-10/12 sm:w-auto mx-auto grid grid-cols-3 grid-rows-3 text-zinc-900 shadow-md rounded-xl overflow-hidden gap-1">
                    {Array(9).fill(null).map((e, i) => <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)}/>)}
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
