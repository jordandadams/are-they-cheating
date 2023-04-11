import React, { useEffect, useState } from 'react';
import { useSelectedGame } from './GameSelect';
import { data } from 'autoprefixer';

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
};

function Game() {
    const { selectedGame } = useSelectedGame();
    const gameDisplayName = selectedGame ? gameDisplayNames[selectedGame] : 'No game selected';

    const [videos, setVideos] = useState([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [twitterEmbedHtml, setTwitterEmbedHtml] = useState(null);

    useEffect(() => {
        if (selectedGame) {
            // Fetch all videos for the selected game from the API
            fetch(`http://localhost:3001/api/video/${selectedGame}`)
                .then(response => response.json())
                .then(data => {
                    setVideos(data);
                    setCurrentVideoIndex(0);
                    console.log('Videos fetched:', data);
                })
                .catch(error => console.error(error));
        }
    }, [selectedGame]);

    // Update Twitter embed HTML when videoLink changes
    useEffect(() => {
        const videoLink = videos[currentVideoIndex]?.videoLink;
        if (videoLink && videoLink.includes('twitter.com')) {
            fetch(`https://publish.twitter.com/oembed?url=${videoLink}`)
                .then((response) => response.json())
                .then((data) => {
                    setTwitterEmbedHtml(data.html);
                })
                .catch((error) => console.error(error));
        } else {
            setTwitterEmbedHtml(null); // Clear the state if not a Twitter video
        }
    }, [videos, currentVideoIndex]);

    const handleLegitClick = () => {
        // Handle the "Legit" button click
        // Move to the next video, if available
        if (currentVideoIndex < videos.length - 1) {
            setCurrentVideoIndex(currentVideoIndex + 1);
            console.log(currentVideoIndex + 1);
        }
    };

    const handleCheaterClick = () => {
        // Handle the "Cheater" button click
        // Move to the next video, if available
        if (currentVideoIndex < videos.length - 1) {
            setCurrentVideoIndex(currentVideoIndex + 1);
            console.log(currentVideoIndex + 1);
        }
    };

    const renderVideo = () => {
        if (videos.length === 0) return null;
    
        const videoLink = videos[currentVideoIndex].videoLink;
    
        if (videoLink.includes('youtube.com')) {
            const videoId = new URL(videoLink).searchParams.get('v');
            return <iframe width="640" height="360" src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allowFullScreen></iframe>;
        } else if (videoLink.includes('twitch.tv')) {
            const videoId = videoLink.split('/').pop();
            return <iframe width="640" height="360" src={`https://player.twitch.tv/?video=${videoId}`} frameBorder="0" allowFullScreen></iframe>;
        } else if (videoLink.includes('twitter.com')) {
            // Render the Twitter embed HTML
            return <div dangerouslySetInnerHTML={{ __html: twitterEmbedHtml }} />;
        }
    
        return null;
    };    


    return (
        <div className="flex flex-col items-center justify-center mt-10 mb-20">
            <h1 className="text-6xl font-bold text-black font-inter mb-1 leading-normal">Selected Game:</h1>
            <h2 className="text-4xl font-semibold text-gray-600 font-inter mb-1 leading-normal">{gameDisplayName}</h2>

            {renderVideo()}

            {videos.length > 0 && (
                <div className="mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4" onClick={handleLegitClick}>Legit</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleCheaterClick}>Cheater</button>
                </div>
            )}
        </div>
    );
}

export default Game;