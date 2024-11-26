
import { herobg } from "../../../assets";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image (Full Screen) */}
      <img
        src={herobg}
        alt="Toothpaste Bits Background"
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16 text-white z-10">
        <div className="w-full md:w-3/5 space-y-6">
          {/* Heading */}
          <h1 className="text-2xl md:text-5xl font-bold tracking-wide leading-tight drop-shadow-lg">
            Home of Quality Products <br />
            and Fresh Food
          </h1>
          {/* Subtext */}
          {/* <p className="text-lg md:text-xl font-light text-gray-300">
            Discover a variety of premium products tailored for your health and lifestyle.
          </p> */}
          {/* Call to Action Button */}
          <a
            href="#shop"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#72F2C7] to-[#39A3E0] text-black text-lg font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            SHOP
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
