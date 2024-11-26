// 

import { corp, palm, vegan, woman } from "../assets";


const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 relative">
      <div className="container mx-auto flex flex-col lg:flex-row">
        {/* Left Side */}
        <div className="lg:w-1/3 pr-8 border-r border-gray-700">
          <h3 className="text-sm font-semibold mb-2">STAY IN THE KNOW</h3>
          <p className="text-2xl font-light mb-4">Sign up for 10% off your first order.</p>
          <div className="relative mb-8">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full bg-transparent border-b border-white pb-2 focus:outline-none"
            />
            <button className="absolute right-0 bottom-0 bg-white text-black px-4 py-1 text-sm font-semibold">
              Subscribe
            </button>
          </div>
          <div className="flex flex-wrap gap-4 mb-4">
            {/* Certification icons */}
            <img src= {corp} alt="B Corp" className="h-10" />
            <img src= {vegan} alt="Cruelty Free and Vegan" className="h-10" />
            <img src= {palm} alt="Certified Palm Oil Free" className="h-10" />
            <img src= {woman} alt="Woman Owned" className="h-10" />
          </div>
          {/* Accessibility icon */}
          {/* <div>
            <img src="/path-to-accessibility-icon.svg" alt="Accessibility" className="h-8" />
          </div> */}
        </div>

        {/* Right Side */}
        <div className="lg:w-2/3 lg:pl-8 mt-8 lg:mt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Shop Section */}
            <div>
              <h3 className="text-sm font-semibold mb-4">SHOP</h3>
              <ul className="space-y-2 text-sm">
                <li>All Products</li>
                <li>Oral Care</li>
                <li>Body</li>
                <li>Sets</li>
              </ul>
            </div>

            {/* Learn Section */}
            <div>
              <h3 className="text-sm font-semibold mb-4">LEARN</h3>
              <ul className="space-y-2 text-sm">
                <li>Ingredients</li>
                <li>Sustainability</li>
                <li>About Us</li>
                <li>Store Locator</li>
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h3 className="text-sm font-semibold mb-4">HELP</h3>
              <ul className="space-y-2 text-sm">
                <li>Account ↗</li>
                <li>Wholesale ↗</li>
                <li>FAQs</li>
                <li>Sitemap</li>
              </ul>
            </div>

            {/* Follow Section */}
            <div>
              <h3 className="text-sm font-semibold mb-4">FOLLOW</h3>
              <ul className="space-y-2 text-sm">
                <li>Instagram ↗</li>
                <li>Twitter ↗</li>
                <li>TikTok ↗</li>
                <li>Facebook ↗</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
        <div>© 2024 Bite. All Rights Reserved.</div>
        <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-4 md:mt-0">
          <span>Privacy policy</span>
          <span>Terms of service</span>
          <span>Shipping policy</span>
          <span>hello@bitetoothpastebits.com</span>
        </div>
      </div>

      {/* Arrow in Box */}
      <div className="absolute top-8 right-8">
        <button className="bg-transparent border border-white p-2" aria-label="Back to top">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;