import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-cinzel text-white">
                I am Stars
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="/"
                className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Beranda
              </Link>
              <Link
                to="/about"
                className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Tentang Kami
              </Link>
              <Link
                to="/products"
                className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Produk
              </Link>
              <Link
                to="/contact"
                className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Kontak
              </Link>
              <Link
                to="/products"
                className="bg-secondary text-black hover:bg-secondary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Beli Sekarang
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-black/90 backdrop-blur-md`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block text-white/80 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Beranda
          </Link>
          <Link
            to="/about"
            className="block text-white/80 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Tentang Kami
          </Link>
          <Link
            to="/products"
            className="block text-white/80 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Produk
          </Link>
          <Link
            to="/contact"
            className="block text-white/80 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Kontak
          </Link>
          <Link
            to="/products"
            className="block bg-secondary text-black hover:bg-secondary/90 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Beli Sekarang
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 