import React, { useState } from 'react';

// Define a list of games for the dropdown
const gamesList = [
    'Apex Legends',
    'Counter Strike Global Offensive',
    'Fortnite',
    'League of Legends',
    'Minecraft',
    'Modern Warfare 2',
    'Overwatch 2',
    'Valorant',
    'Warzone 2',
];

// Define a regular expression for allowed video platforms
const videoLinkRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|clips\.twitch\.tv|twitter\.com|medal\.tv|streamable\.com)\/.+/;

function SubmitModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [submittedBy, setSubmittedBy] = useState('');
    const [videoLink, setVideoLink] = useState('');
    const [selectedGame, setSelectedGame] = useState('');

    // State variables to track validation errors
    const [submittedByError, setSubmittedByError] = useState('');
    const [videoLinkError, setVideoLinkError] = useState('');
    const [selectedGameError, setSelectedGameError] = useState('');

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    // Separate validation function for "Submitted By" input field
    const validateSubmittedBy = () => {
        const finalSubmittedBy = submittedBy || 'Anonymous';
        if (finalSubmittedBy.length < 3 || finalSubmittedBy.length > 15 || /[@!$]/.test(finalSubmittedBy)) {
            setSubmittedByError('Name must be 3-15 characters long and cannot contain symbols like "@,!,$".');
            return false;
        }
        setSubmittedByError('');
        return true;
    };

    // Separate validation function for "Video Link" input field
    const validateVideoLink = () => {
        if (!videoLink || !videoLinkRegex.test(videoLink)) {
            setVideoLinkError('Video link must be from YouTube, Twitch, Twitter, Medal.tv, or Streamable.');
            return false;
        }
        setVideoLinkError('');
        return true;
    };

    //Separate validation function for "Game Select" dropdown
    const validateGameSelect = () => {
        if (!selectedGame) {
            setSelectedGameError('Please select a game!');
            isValid = false;
        }
        setSelectedGameError('');
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page

        // Reset validation errors
        setSubmittedByError('');
        setVideoLinkError('');
        setSelectedGameError('');

        // Perform validation logic
        let isValid = true;

        // Validate "Submitted By" field
        isValid = validateSubmittedBy() && isValid;

        // Validate "Video Link" field
        isValid = validateVideoLink() && isValid;

        // Validate game selection
        isValid = validateGameSelect() && isValid;

        // Submit if validation passes
        if (isValid) {
            // Perform submission logic here
            console.log({
                submittedBy: submittedBy || 'Anonymous',
                videoLink,
                selectedGame,
            });
            closeModal();
        }
    };

    return (
        <div>
            <button
                className="text-white bg-black font-inter border rounded-full px-4 py-2 hover:bg-transparent hover:text-black hover:border-black"
                onClick={openModal}
            >
                Submit Video
            </button>
            {modalIsOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 w-96">
                        <h2 className="text-2xl font-bold mb-4">Submit Video</h2>
                        <form onSubmit={handleSubmit}>
                            <label className="block mb-4">
                                {submittedByError && <p className="mt-1 text-sm text-red-500">{submittedByError
                                }</p>}
                                Submitted By:
                                <input
                                    type="text"
                                    value={submittedBy}
                                    onChange={(e) => setSubmittedBy(e.target.value)}
                                    onBlur={validateSubmittedBy} // Call the validation function when the input field loses focus
                                    className="block w-full mt-1 p-2 border border-gray-300 rounded"
                                />
                                <p className="mt-1 text-xs text-gray-500 italic">
                                    If you wish to not use a name, leave empty!
                                </p>
                            </label>
                            <label className="block mb-4">
                                {videoLinkError && <p className="mt-1 text-sm text-red-500">{videoLinkError}</p>}
                                Video Link:
                                <input
                                    type="text"
                                    value={videoLink}
                                    onChange={(e) => setVideoLink(e.target.value)}
                                    onBlur={validateVideoLink}
                                    className="block w-full mt-1 p-2 border border-gray-300 rounded"
                                />
                                <p className="mt-1 text-xs text-gray-500 italic">
                                    YouTube, Twitter, Twitch, Medal, Streamable allowed!
                                </p>
                            </label>
                            <label className="block mb-4">
                                {selectedGameError && <p className="mt-1 text-sm text-red-500">{selectedGameError}</p>}
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
                                    id="playNowBtn"
                                    className="px-6 py-3 font-semibold rounded-md font-inter bg-gradient-to-r from-red-500 to-orange-500 text-white hover:text-transparent hover:bg-clip-text"
                                    type="submit"
                                    disabled={!!submittedByError || !!videoLinkError || !!selectedGameError} // Disable the button if there are validation errors
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