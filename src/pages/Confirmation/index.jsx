import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-[#244521] mb-4">
          Order Confirmed!
        </h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase! Your order will be processed and delivered soon.
        </p>
        <Link
          to="/products"
          className="bg-[#EABC5E] hover:bg-[#c49d4e] text-white font-bold py-3 px-6 rounded-lg"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
