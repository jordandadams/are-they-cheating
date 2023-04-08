import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { useState } from 'react';
import { GameContext } from '../components/GameSelect';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  // State variable to track the currently selected game
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <main className={`min-h-screen bg-gradient-to-b from-gray-100 to-white ${inter.className}`}>
      <Navbar />
      <GameContext.Provider value={{ selectedGame, setSelectedGame }}>
        <Component {...pageProps} />
      </GameContext.Provider>
    </main>
  )
}