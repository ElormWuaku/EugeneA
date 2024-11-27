import { about, eugene, landingbg, produce } from "../../assets";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#244521] mb-4">
            About the Visionary Behind the App
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Meet <span className="text-[#EABC5E] font-semibold">Eugene Amoakwah</span>, 
            a passionate innovator from Takoradi, Ghana. Driven by a mission to 
            reduce post-harvest losses and provide affordable, fresh produce to buyers, 
            Eugene has created this app to transform the agricultural supply chain.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          {/* Left - Image */}
          <div>
            <img
              src= {eugene}
              alt="Eugene Amoakwah"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Right - Story */}
          <div>
            <h2 className="text-2xl font-bold text-[#244521] mb-4">The Problem</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ghanaian farmers often lose a significant portion of their harvest due 
              to poor market access, inefficient storage systems, and lack of 
              connections to buyers. Meanwhile, buyers in cities struggle to find 
              affordable, fresh produce at fair prices.
            </p>
            <h2 className="text-2xl font-bold text-[#244521] mb-4">The Solution</h2>
            <p className="text-gray-600 leading-relaxed">
              This app bridges the gap between farmers and buyers by creating a direct 
              connection. Farmers can list their fresh produce, while buyers can 
              browse and purchase high-quality food at competitive prices, delivered 
              straight from the farms.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-bold text-center text-[#244521] mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 text-center leading-relaxed">
            To empower farmers, minimize post-harvest losses, and provide buyers 
            with affordable, fresh, and healthy food directly from farms, 
            contributing to a sustainable agricultural economy in Ghana.
          </p>
        </div>

        {/* Image Grid Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div>
            <img
              src= {landingbg}
              alt="Farmers and Buyers"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="text-center text-gray-600 mt-2">
              Farmers connecting directly with buyers.
            </p>
          </div>
          <div>
            <img
              src= {produce}
              alt="Fresh Produce"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="text-center text-gray-600 mt-2">
              Fresh and affordable food straight from the farms.
            </p>
          </div>
          <div>
            <img
              src= {about}
              alt="Technology in Agriculture"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="text-center text-gray-600 mt-2">
              Leveraging technology to fight post-harvest loss.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#244521] mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Be a part of this transformative initiative. Together, we can 
            revolutionize agriculture in Ghana and beyond.
          </p>
          <a
            href="/products"
            className="bg-[#EABC5E] hover:bg-[#c49d4e] text-white font-bold py-3 px-6 rounded-lg"
          >
            Explore Fresh Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
