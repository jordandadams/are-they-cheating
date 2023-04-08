import React, { useState } from 'react';
import Link from 'next/link';
import SubmitModal from './SubmitModal';

const Navbar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Open the SubmitModal when the "Submit Video" link is clicked
    const handleModalOpen = (e) => {
        e.preventDefault(); // Prevent default navigation behavior
        setModalIsOpen(true);
    };

    // Close the SubmitModal
    const handleModalClose = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <nav className="flex items-center justify-between p-6">
                <div className="text-black font-bold text-xl font-inter">
                    <Link href="/"></Link>
                </div>
                <div className="flex space-x-4">
                    <Link
                        href="/docs"
                        className="text-white bg-black font-inter border rounded-full px-4 py-2 hover:bg-transparent hover:text-black hover:border-black"
                    >
                        Docs
                    </Link>
                    <SubmitModal isOpen={modalIsOpen} onRequestClose={handleModalClose} />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
