import { useState } from "react";
import { User, ShoppingBag, Menu, X } from "lucide-react";
import { logo } from "../assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setMenuOpen(false); // Close menu on navigation
    if (path.startsWith("#")) {
      const section = document.querySelector(path);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const sectionAfterNavigation = document.querySelector(path);
          if (sectionAfterNavigation) {
            sectionAfterNavigation.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div
        className="cursor-pointer"
        onClick={() => handleNavigation("/")}
      >
        <img
          src={logo}
          alt="Guadzefie Logo"
          className="h-10 sm:h-12"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 text-sm lg:text-base">
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
      <div className="hidden md:flex items-center space-x-4">
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

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#244521]"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md">
          <div className="flex flex-col space-y-4 py-4 px-6">
            {[
              { name: "HOME", path: "#home" },
              { name: "SHOP", path: "/products" },
              { name: "ABOUT", path: "#about" },
              { name: "CONTACT", path: "#contact" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="text-[#244521] hover:text-black text-left uppercase"
              >
                {item.name}
              </button>
            ))}

            {/* Icons for Mobile */}
            <div className="flex items-center space-x-4 pt-2 border-t">
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
