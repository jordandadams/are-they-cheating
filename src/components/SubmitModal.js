import React, { useState } from 'react';

// Define a list of games for the dropdown
const gamesList = ['Apex Legends', 'Counter Strike Global Offensive', 'Fortnite', 'League of Legends', 'Minecraft', 'Modern Warfare 2', 'Overwatch 2', 'Valorant', 'Warzone 2'];

function SubmitModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [submittedBy, setSubmittedBy] = useState('');
    const [videoLink, setVideoLink] = useState('');
    const [selectedGame, setSelectedGame] = useState('');

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleSubmit = () => {
        // Perform submission logic here
        console.log({
            submittedBy,
            videoLink,
            selectedGame,
        });
        closeModal();
    };

    return (
        <div>
            <button className="text-white bg-black font-inter border rounded-full px-4 py-2 hover:bg-transparent hover:text-black hover:border-black" onClick={openModal}>
                Submit Video
            </button>
            {modalIsOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 w-96">
                        <h2 className="text-2xl font-bold mb-4">Submit Video</h2>
                        <form>
                            <label className="block mb-4">
                                Submitted By:
                                <input
                                    type="text"
                                    value={submittedBy}
                                    onChange={(e) => setSubmittedBy(e.target.value)}
                                    className="block w-full mt-1 p-2 border border-gray-300 rounded"
                                />
                            </label>
                            <label className="block mb-4">
                                Video Link:
                                <input
                                    type="text"
                                    value={videoLink}
                                    onChange={(e) => setVideoLink(e.target.value)}
                                    className="block w-full mt-1 p-2 border border-gray-300 rounded"
                                />
                                <p className="mt-1 text-xs text-gray-500 italic">
                                    YouTube, Twitter, Twitch, Medal, Streamable allowed!
                                </p>
                            </label>
                            <label className="block mb-4">
                                Game:
                                <select
                                    value={selectedGame}
                                    onChange={(e) => setSelectedGame(e.target.value)}
                                    className="block w-full mt-1 p-2 border border-gray-300 rounded"
                                >
                                    <option value="">Select a game</option>
                                    {gamesList.map((game) => (
                                        <option key={game} value={game}>
                                            {game}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <div className="flex justify-end space-x-2">
                                <button
                                    id='playNowBtn'
                                    className="px-6 py-3 font-semibold rounded-md font-inter bg-gradient-to-r from-red-500 to-orange-500 text-white hover:text-transparent hover:bg-clip-text"
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
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
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SubmitModal;
