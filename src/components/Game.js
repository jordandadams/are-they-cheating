import React from 'react';
import { useSelectedGame } from './GameSelect';

// Mapping between image file names and display names
const gameDisplayNames = {
    'apex-legends.jpg': 'Apex Legends',
    'csgo.jpg': 'Counter Strike Global Offensive',
    'fortnite.jpg': 'Fortnite',
    'leagueoflegends.jpg': 'League of Legends',
    'minecraft.jpg': 'Minecraft',
    'mw2.jpg': 'Modern Warfare 2',
    'overwatch2.jpg': 'Overwatch 2',
    'valorant.jpg': 'Valorant',
    'wz2.jpg': 'Warzone 2',
    // Add other mappings as needed
};

function Game() {
    // Destructure the selectedGame property from the object returned by useSelectedGame
    const { selectedGame } = useSelectedGame();

    // Get the display name from the mapping
    const gameDisplayName = selectedGame ? gameDisplayNames[selectedGame] : 'No game selected';

    return (
        <div className="flex flex-col items-center justify-center mt-10 mb-20">
            <h1 className="text-6xl font-bold text-black font-inter mb-1 leading-normal">
                Selected Game:
            </h1>
            <h2 className="text-4xl font-semibold text-gray-600 font-inter mb-1 leading-normal">
                {gameDisplayName}
            </h2>
        </div>
    );
}

export default Game;