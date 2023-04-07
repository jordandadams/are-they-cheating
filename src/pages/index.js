import React from 'react'
import Head from 'next/head'

export default function HomePage() {
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
          <button id='test' className="px-6 py-3 font-semibold rounded-md font-inter bg-gradient-to-r from-red-500 to-orange-500 text-white hover:text-transparent hover:bg-clip-text">
            Play Now
          </button>
        </div>
        <style jsx>{`
          #test {
            position: relative;
            border: none;
            transition: box-shadow 0.2s ease;
          }
          #test:hover {
            box-shadow: 0 0 0 2px red, 0 0 0 4px orange;
          }
        `}</style>
      </div>
    </>
  );
}
