import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { gros, logo } from "../../../assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Guadzefie Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-800 hover:text-green-600">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-green-600">About</Link>
            <Link to="/products" className="text-gray-800 hover:text-green-600">Products</Link>
            <Link to="/contact" className="text-gray-800 hover:text-green-600">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              ) : (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md"
              >
                About
              </Link>
              <Link 
                to="/products" 
                className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md"
              >
                Products
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex flex-col-reverse md:flex-row">
      {/* Left Content */}
      <div className="w-full md:w-1/2 bg-[#F8D7B6] flex items-center justify-center px-4 py-16 md:py-0">
        <div className="w-full max-w-md text-center md:text-left">
          <div className="text-3xl md:text-5xl mb-4">
            <span className="font-bold">Welcome to Guadzefie</span>
          </div>
          <p className="mb-6 text-base md:text-lg">
            Your Home Of Healthy Organic Vegetables<br />
            Fresh From Farm To Your Table
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link 
              to="/about" 
              className="bg-white px-4 md:px-6 py-2 rounded-full drop-shadow-lg uppercase text-[#C2B931] text-xs md:text-sm hover:bg-gray-100 transition duration-300"
            >
              Learn More
            </Link>
            <Link 
              to="/products" 
              className="bg-[#244521] text-white px-4 md:px-6 py-2 rounded-full drop-shadow-lg uppercase text-xs md:text-sm hover:bg-green-600 transition duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <motion.div 
        className="w-full md:w-1/2 h-1/2 md:h-full"
        initial={{ scale: 1 }}
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 2, -2, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      >
        <img 
          src={gros} 
          alt="hero" 
          className="object-cover w-full h-full"
        />
      </motion.div>
    </div>
  );
};

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Your other page content follows */}
    </div>
  );
};

export default Layout;