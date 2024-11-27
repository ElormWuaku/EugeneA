// 
import { produce } from "../../../assets";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${produce})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
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
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-4xl px-6">
        <div className="text-center text-white">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">
            Welcome to Guadzefie
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mb-6">
            Your Home Of Healthy Organic Vegetables<br />
            Fresh From Farm To Your Table
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/about" 
              className="bg-white text-[#244521] px-4 py-2 rounded-full shadow-md uppercase text-xs lg:text-sm hover:bg-gray-100 transition duration-300"
            >
              Learn More
            </Link>
            <Link 
              to="/products" 
              className="bg-[#244521] text-white px-4 py-2 rounded-full shadow-md uppercase text-xs lg:text-sm hover:bg-green-600 transition duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;