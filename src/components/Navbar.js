import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-6">
            <div className="text-black font-bold text-xl font-inter">
                <Link href="/"></Link>
            </div>
            <div className="flex space-x-4">
                <Link
                    href="/docs"
                    className="text-black font-inter border border-black rounded-full px-4 py-2"
                >
                    Docs
                </Link>
                <Link
                    href="/login"
                    className="text-black font-inter border border-black rounded-full px-4 py-2"
                >
                    Submit Video
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;