import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={`min-h-screen bg-gradient-to-b from-gray-100 to-white ${inter.className}`}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}