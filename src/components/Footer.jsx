
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>&copy; 2023 Guadzefie. All rights reserved.</div>
        <div className="space-x-4">
          <Link to="/login" className="hover:text-gray-400">
            Login
          </Link>
          <Link to="/cart" className="hover:text-gray-400">
            Cart
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;