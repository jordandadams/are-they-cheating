import React, { useState } from 'react';
import Head from 'next/head';
import GameSelect, { useSelectedGame } from '../components/GameSelect';
import Game from '../components/Game';
import { animateScroll as scroll } from 'react-scroll';

export default function HomePage() {
  const [showGameSelect, setShowGameSelect] = useState(false);

  const { selectedGame } = useSelectedGame();

  // Function to handle scrolling to the GameSelect section
  const handlePlayNowClick = () => {
    setShowGameSelect(true);
    scroll.scrollToBottom(); // Scroll smoothly to the bottom of the page
  };

  return (
    <>
      <Head>
        {/* Add the link to the Google Fonts stylesheet for "Inter" */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex flex-col items-center justify-center mt-40">
        <h1 className="text-6xl font-bold text-black font-inter mb-1 leading-normal">
          Are They{' '}
          <span
            className="font-inter inline-block"
            style={{
              background: 'linear-gradient(to right, red, orange)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Cheating
          </span>
          ?
        </h1>
        <p className="text-xl text-gray-600 font-inter mb-5">
          Spot the cheater! Analyze gaming clips, make the call, and vote with others!
        </p>
        <div className="flex space-x-4">
          <button
            id='playNowBtn'
            className="px-6 py-3 font-semibold rounded-md font-inter bg-gradient-to-r from-red-500 to-orange-500 text-white hover:text-transparent hover:bg-clip-text"
            onClick={handlePlayNowClick} // Call the handlePlayNowClick function on click
          >
            Play Now
          </button>
        </div>
        <style jsx>{`
          #playNowBtn {
            position: relative;
            border: none;
            transition: box-shadow 0.2s ease;
          }
          #playNowBtn:hover {
            box-shadow: 0 0 0 2px red, 0 0 0 4px orange;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .fade-in {
            animation: fadeIn 1s;
            animation-fill-mode: forwards;
          }
        `}</style>
        {/* Add spacing between HomePage content and GameSelect section */}
        <div style={{ height: '20vh' }}></div>
        {/* Conditionally render the GameSelect component based on the state */}
        <div id="hello" className={showGameSelect ? 'fade-in' : ''}>
          {showGameSelect && <GameSelect />}
        </div>
        <div style={{ height: '20vh' }}></div>
        {selectedGame && (
          <div id="game-section">
            <Game />
          </div>
        )}
      </div>
    </>
  );
}
