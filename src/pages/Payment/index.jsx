//
import { useState } from "react";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [network, setNetwork] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phoneNumber || !network || amount <= 0) {
      alert("Please fill in all fields correctly.");
      return;
    }

    setLoading(true);

    // Mock Payment Request (In a real app, send this data to your backend)
    setTimeout(() => {
      alert(
        `Payment of GHS ${amount.toFixed(
          2
        )} has been successfully made via ${network} for ${phoneNumber}.`
      );
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-green-700 mb-6">
          MoMo Payment
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Amount Input */}
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount (GHS)
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              min="1"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
              placeholder="Enter amount"
              required
            />
          </div>

          {/* Phone Number Input */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              pattern="[0-9]{10}"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
              placeholder="e.g. 0541234567"
              required
            />
          </div>

          {/* Network Selection */}
          <div>
            <label
              htmlFor="network"
              className="block text-sm font-medium text-gray-700"
            >
              Select Network
            </label>
            <select
              id="network"
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
              required
            >
              <option value="" disabled>
                Select your network
              </option>
              <option value="MTN MoMo">MTN MoMo</option>
              <option value="Vodafone Cash">Vodafone Cash</option>
              <option value="AirtelTigo Cash">AirtelTigo Cash</option>
            </select>
          </div>

          {/* Submit Button */}
          <Link to={loading ? "#" : "/confirmation"} className="w-full">
            <button
              className={`w-full py-2 mt-2 rounded-lg text-white font-bold ${
                loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
              } transition duration-300`}
              disabled={loading}
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
