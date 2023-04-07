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
                    className="text-white bg-black font-inter border rounded-full px-4 py-2 hover:bg-transparent hover:text-black hover:border-black"
                >
                    Docs
                </Link>
                <Link
                    href="/login"
                    className="text-white bg-black font-inter border rounded-full px-4 py-2 hover:bg-transparent hover:text-black hover:border-black"
                >
                    Submit Video
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;