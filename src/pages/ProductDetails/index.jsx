import { useParams, Link } from "react-router-dom";
import products from "../../components/Products";


const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-[#EABC5E] mb-4">
              {product.name}
            </h1>

            <div className="mb-4">
              <p className="text-2xl font-semibold text-gray-800">
                ${product.price.toFixed(2)}/lb
              </p>
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Farm Details */}
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-bold text-green-800 mb-2">
                Farm Information
              </h2>
              <p>
                <strong>Farm Name:</strong> {product.farm}
              </p>
              <p>
                <strong>Location:</strong> {product.location}
              </p>
              <p>
                <strong>Available Stock:</strong> {product.availableKilos} kilos
              </p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4">
              <input
                type="number"
                min="1"
                max={product.availableKilos}
                defaultValue="1"
                className="w-20 p-2 border rounded"
              />
              <Link
                to="/cart"
                className="bg-[#244521] hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full"
              >
                Add to Cart
              </Link>
            </div>

            {/* Back to Products Link */}
            <div className="mt-6">
              <Link to="/products" className="text-green-600 hover:underline">
                ← Back to All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
