import { gros } from "../../../assets";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-1/2 bg-[#F8D7B6] flex items-center justify-center px-4 py-16 lg:py-0">
        <div className="w-full max-w-md text-center lg:text-left">
          <div className="text-3xl lg:text-5xl mb-4">
            <span className="font-bold">Welcome to Guadzefie</span>
          </div>
          <p className="mb-6 text-base lg:text-lg">
            Your Home Of Healthy Organic Vegetables<br />
            Fresh From Farm To Your Table
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Link 
              to="/about" 
              className="bg-white px-4 lg:px-6 py-2 rounded-full drop-shadow-lg uppercase text-[#C2B931] text-xs lg:text-sm hover:bg-gray-100 transition duration-300"
            >
              Learn More
            </Link>
            <Link 
              to="/products" 
              className="bg-[#244521] text-white px-4 lg:px-6 py-2 rounded-full drop-shadow-lg uppercase text-xs lg:text-sm hover:bg-green-600 transition duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <motion.div 
        className="w-full lg:w-1/2 h-64 lg:h-screen"
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

export default Hero;