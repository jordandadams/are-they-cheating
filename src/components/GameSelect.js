import React, { createContext, useContext, useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Create a context to share the selected game
const GameContext = createContext();

// Custom hook to use the GameContext
const useSelectedGame = () => useContext(GameContext);

// Export the custom hook so it can be used in other components
export { useSelectedGame };

export default function GameSelect() {
    // List of game images
    const games = [
        'apex-legends.jpg',
        'csgo.jpg',
        'fortnite.jpg',
        'leagueoflegends.jpg',
        'minecraft.jpg',
        'mw2.jpg',
        'overwatch2.jpg',
        'valorant.jpg',
        'wz2.jpg',
    ];

    // State variable to track the currently selected game
    const [selectedGame, setSelectedGame] = useState(null);

    // State variable to track the centerSlidePercentage property
    const [centerSlidePercentage, setCenterSlidePercentage] = useState(25);

    // Handle game selection
    const handleGameSelect = (game) => {
        setSelectedGame(game);
        console.log(`Selected game: ${game}`);
    };

    // Function to update the centerSlidePercentage based on window width
    const updateCenterSlidePercentage = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 768) {
            setCenterSlidePercentage(50); // Mobile devices: 2 containers visible
        } else {
            setCenterSlidePercentage(25); // Desktop and larger screens: 4 containers visible
        }
    };

    useEffect(() => {
        updateCenterSlidePercentage();
        window.addEventListener('resize', updateCenterSlidePercentage);
        return () => {
            window.removeEventListener('resize', updateCenterSlidePercentage);
        };
    }, []);

    return (
        <GameContext.Provider value={selectedGame}>
            <div className="flex flex-col items-center justify-center mt-10 mb-20">
                <h1 className="text-6xl font-bold text-black font-inter mb-1 leading-normal">
                    Game Selection
                </h1>
                <p className="text-xl text-gray-600 font-inter mb-5">
                    Select a game to start playing!
                </p>
                <div>
                    <Carousel
                        showArrows={true}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        swipeable={true}
                        emulateTouch={true}
                        infiniteLoop={false}
                        interval={1000}
                        transitionTime={500}
                        centerMode={true}
                        centerSlidePercentage={centerSlidePercentage} // Use the state variable
                    >
                        {games.map((game, index) => (
                            <div
                                key={index}
                                className={`image-container ${selectedGame === game ? 'selected' : ''}`}
                                onClick={() => handleGameSelect(game)}
                            >
                                <img
                                    className="carousel-image"
                                    src={`/${game}`}
                                    alt={game}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <style jsx>{`
                    .image-container {
                        border-radius: 25px;
                        overflow: hidden;
                        margin: 0 5px;
                        cursor: pointer;
                        margin-top: 10px;
                        height: 300px;
                        transition: transform 0.3s ease;
                    }

                    .image-container:hover {
                        box-shadow: 0 0 11px rgba(33,33,33,.2);
                        transform: scale(1.05);
                        z-index: 1;
                    }

                    .image-container.selected {
                        border: 3px solid red;
                        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    }

                    .carousel-image {
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                    }

                    @media (max-width: 767px) {
                        .image-container {
                            height: 150px;
                        }
                    }
                `}</style>
            </div>
        </GameContext.Provider>
    );
}                                