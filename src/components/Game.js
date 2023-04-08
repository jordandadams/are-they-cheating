// Game.js
import React from 'react';
import { useSelectedGame } from './GameSelect';

function Game() {
    // Destructure the selectedGame property from the object returned by useSelectedGame
    const { selectedGame } = useSelectedGame();

    return (
        <div className="flex flex-col items-center justify-center mt-10 mb-20">
            <h1 className="text-6xl font-bold text-black font-inter mb-1 leading-normal">
                Selected Game:
            </h1>
            <h2 className="text-4xl font-semibold text-black font-inter mb-1 leading-normal">
                {selectedGame ? (
                    <p>{selectedGame}</p>
                ) : (
                    <p>No game selected</p>
                )}
            </h2>
        </div>
    );
}

export default Game;
