import { useState, useEffect } from "react";
import { User, ShoppingBag } from "lucide-react";
import { logo } from "../assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    if (path.startsWith("#")) {
      // For in-page section scrolling
      const section = document.querySelector(path);
      if (section) {
        // If on landing page, scroll smoothly
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        // If not on landing page, navigate to landing page and then scroll
        navigate("/");
        // Use setTimeout to ensure page loads before scrolling
        setTimeout(() => {
          const sectionAfterNavigation = document.querySelector(path);
          if (sectionAfterNavigation) {
            sectionAfterNavigation.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      // For page navigation
      navigate(path);
    }
  };

  return (
    <nav
      className={`flex justify-between items-center py-4 px-6 fixed z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo - Navigate to Hero */}
      <div
        className="cursor-pointer"
        onClick={() => handleNavigation("/")}
      >
        <img
          src={logo}
          alt="Guadzefie Logo"
          className="h-12 transition-transform duration-300 ease-in-out"
        />
      </div>

      {/* Links */}
      <div className="space-x-6 text-sm">
        {[
          { name: "HOME", path: "#home" },
          { name: "SHOP", path: "/products" },
          { name: "ABOUT", path: "#about" },
          { name: "CONTACT", path: "#contact" },
        ].map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavigation(item.path)}
            className="text-[#244521] hover:text-black relative group uppercase"
          >
            {item.name}
            <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </button>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => handleNavigation("/auth")}
          className="text-[#244521]"
        >
          <User className="h-6 w-6" />
        </button>
        <button
          onClick={() => handleNavigation("/cart")}
          className="text-[#244521]"
        >
          <ShoppingBag className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;