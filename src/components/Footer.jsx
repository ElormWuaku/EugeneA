// 

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#244521] text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h1 className="text-2xl font-bold mb-4 text-[#EABC5E]">Guadzefie</h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting you to quality products. We value your satisfaction and
              provide fresh and locally sourced goods.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#EABC5E]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-gray-400">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="#reviews" className="hover:text-gray-400">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="#contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Account Links & Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#EABC5E]">Account</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/auth" className="hover:text-gray-400">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-gray-400">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-gray-400">
                  Register
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-lg font-bold mb-4 text-[#EABC5E]">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/guadzefie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-100 transition-colors"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61569857780347"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-100 transition-colors"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@guadzefie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-100 transition-colors"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-sm text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Guadzefie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;