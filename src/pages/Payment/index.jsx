import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-[#244521] mb-6">
          Secure Payment Platform
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Thank you for placing your order! Complete your payment below to finalize the purchase.
        </p>
        {/* Mock Payment Details */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-700 font-semibold">
            Card Number
          </label>
          <input
            type="text"
            placeholder="Enter card number"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EABC5E]"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">
              Expiry Date
            </label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EABC5E]"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">
              CVV
            </label>
            <input
              type="text"
              placeholder="123"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EABC5E]"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-700 font-bold">Total: $45.00</p>
          <Link
            to="/confirmation"
            className="bg-[#244521] hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg"
          >
            Pay Now
          </Link>
        </div>
        <p className="text-gray-500 text-center text-sm">
          Your payment is securely processed.
        </p>
      </div>
    </div>
  );
};

export default Payment;
