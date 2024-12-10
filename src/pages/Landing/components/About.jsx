import { Link } from "react-router-dom";
import { about } from "../../../assets";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left side - Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={about} alt="Guadzefie logo" className="w-full h-auto" />
        </div>

        {/* Right side - Content */}
        <div className="md:w-1/2 md:pl-12">
          <h3 className="text-gray-500 uppercase tracking-wider mb-2">
            ABOUT Guadzefie
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#EABC5E] mb-4">
            Quality Makes the Belief for Customers
          </h2>
          <p className="text-gray-600 mb-6">
        Guadziefie is an online marketplace designed to connect farmers, specifically those in rural areas directly to consumers and buyers. The focus is on making food more accessible and improving farmer-consumer connections by removing intermediaries and introducing strategically placed pick-up points for easier logistics.
          </p>
          <button className="bg-[#234522] text-white py-3 px-6 rounded-full flex items-center hover:bg-[#C2B931] transition duration-300">
           <Link to="/about" className="w-full h-full">
           Read More
           </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
