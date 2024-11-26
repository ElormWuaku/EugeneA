
// import { useState, useEffect } from "react";
import { User, ShoppingBag } from "lucide-react";
import { logo } from "../assets";


const Navbar = () => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 0);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <nav
    className={`flex justify-between items-center py-4 px-6 fixed z-50 w-full bg-white transition-all duration-300 ease-in-out backdrop-blur-sm border-b border-black`}
  >
    {/* Logo */}
    <div className="cursor-pointer transition-all duration-300 ease-in-out">
      <img
        src={logo}
        alt="Guadzefie Logo"
        className="h-10 transition-transform duration-300 ease-in-out"
      />
    </div>


      {/* Links */}
      <div className="space-x-6 text-sm">
        {["SHOP", "ABOUT", "CONTACT US"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="text-[#244521] hover:text-black relative group uppercase"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </a>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
      <a href="#account" className="text-[#244521]">
          <User className="h-6 w-6" />
        </a>
        <a href="#cart" className="text-[#244521]">
          <ShoppingBag className="h-6 w-6" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;