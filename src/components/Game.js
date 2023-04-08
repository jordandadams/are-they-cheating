import React from 'react';
import { useSelectedGame } from './GameSelect';

function Game() {
    // Use the custom hook to get the selected game
    const selectedGame = useSelectedGame();

    return (
        <div>
            <h2>Selected Game:</h2>
            {selectedGame ? (
                <p>{selectedGame}</p>
            ) : (
                <p>No game selected</p>
            )}
        </div>
    );
}

export default Game;
