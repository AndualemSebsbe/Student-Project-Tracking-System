import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <a className="text-white font-semibold text-xl">Home</a>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/projects">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                </Link>
                <Link href="/about">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</a>
                </Link>
                <Link href="/contact">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {status === 'loading' && (
                <span className="text-gray-300">Loading...</span>
              )}
              {status === 'authenticated' && session && (
                <>
                  <span className="text-gray-300 mr-2">Signed in as {session.user.email}</span>
                  <button
                    onClick={() => signOut()}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sign Out
                  </button>
                </>
              )}
              {status === 'unauthenticated' && (
                <>
                  <button
                    onClick={() => signIn()}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sign In
                  </button>
                  <Link href="/signup">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</a>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
