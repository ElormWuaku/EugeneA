import { Link } from "react-router-dom";
import {
  aubergine,
  banana,
  cucumbers,
  eggplant,
  okra,
  orange,
  pineapple,
  tangerine,
} from "../../../assets";

const Shop = () => {
  const products = [
    {
      id: 1,
      image: aubergine,
      name: "Fresh Aubergines",
      price: "$2.99/lb",
      description: "Locally-sourced aubergines, perfect for your next meal.",
    },
    {
      id: 2,
      image: banana,
      name: "Sweet Bananas",
      price: "$3.49/lb",
      description: "Sweet bananas, grown with care on our family farm.",
    },
    {
      id: 3,
      image: cucumbers,
      name: "cucumbers",
      price: "$1.79/lb",
      description:
        "Freshly harvested cucumbers, packed with nutrients and flavor.",
    },
    {
      id: 4,
      image: orange,
      name: "Juicy Oranges",
      price: "$2.49/lb",
      description: "Sweet and tangy oranges, bursting with vitamin C.",
    },
    {
      id: 5,
      image: eggplant,
      name: "Juicy Oranges",
      price: "$2.49/lb",
      description: "Sweet and tangy oranges, bursting with vitamin C.",
    },
    {
      id: 6,
      image: tangerine,
      name: "Juicy tangerines",
      price: "$2.49/lb",
      description: "Sweet and tangy oranges, bursting with vitamin C.",
    },
    {
      id: 7,
      image: okra,
      name: "Fresh okra",
      price: "$2.49/lb",
      description: "Sweet and tangy oranges, bursting with vitamin C.",
    },
    {
      id: 8,
      image: pineapple,
      name: "Juicy pineapples",
      price: "$2.49/lb",
      description: "Sweet pineapples, bursting with vitamin C.",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Our Products</h2>
          <button className="bg-[#234522] text-white py-3 px-6 rounded-full flex items-center hover:bg-[#C2B931] transition duration-300">
            <Link to="/products" className="w-full h-full">
              Go To Shop
            </Link>
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-[#EABC5E]">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.price}</p>
                <p className="text-gray-500 mb-4">{product.description}</p>
                <button className="bg-[#244521] hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
                  <Link to="/product-details" className="w-full h-full">
                    See More
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
