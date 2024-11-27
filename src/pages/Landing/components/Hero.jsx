import { gros } from "../../../assets";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#F8D7B6] flex items-center justify-center">
        <div className="w-fit flex flex-col items-start gap-y-6">
          <div className="text-5xl flex flex-col">
            <span className="font-bold">Welcome to Guadzefie</span>
          </div>
          <p className="mb-4">
            Your Home Of Healthy Organic Vegetables<br />
            Fresh From Farm To Your Table
          </p>
          <div className="flex gap-4">
            <Link 
              to="/about" 
              className="bg-white px-6 py-2 rounded-full drop-shadow-lg uppercase text-[#C2B931] text-sm hover:bg-gray-100 transition duration-300"
            >
              Learn More
            </Link>
            <Link 
              to="/products" 
              className="bg-[#244521] text-white px-6 py-2 rounded-full drop-shadow-lg uppercase text-sm hover:bg-green-600 transition duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <motion.div 
        className="w-1/2"
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