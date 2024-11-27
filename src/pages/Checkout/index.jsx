import { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  const [deliveryOption, setDeliveryOption] = useState("Doorstep Delivery");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this alert with API calls to save data in a real app

    // Include deliveryOption in the submitted data
    const orderData = {
      ...userDetails,
      paymentMethod,
      deliveryOption,
    };

    console.log(orderData); // Replace with API call to save data
    alert("Order placed successfully!");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-4xl mx-auto mt-6 bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-[#244521] mb-6">Checkout</h1>

        {/* User Details Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-600 font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-600 font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-gray-600 font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={userDetails.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              required
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="address"
              className="block text-gray-600 font-bold mb-2"
            >
              Delivery Address
            </label>
            <textarea
              id="address"
              name="address"
              value={userDetails.address}
              onChange={handleInputChange}
              placeholder="Enter your delivery address"
              required
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {/* Delivery Options */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Delivery Method
            </h2>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="delivery"
                  value="Doorstep Delivery"
                  checked={deliveryOption === "Doorstep Delivery"}
                  onChange={(e) => setDeliveryOption(e.target.value)}
                  className="w-5 h-5"
                />
                <span className="text-gray-600">Doorstep Delivery</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="delivery"
                  value="Pickup Point"
                  checked={deliveryOption === "Pickup Point"}
                  onChange={(e) => setDeliveryOption(e.target.value)}
                  className="w-5 h-5"
                />
                <span className="text-gray-600">Pickup Point</span>
              </label>
            </div>
            {deliveryOption === "Pickup Point" && (
              <div className="mt-4">
                <label
                  htmlFor="pickupPoint"
                  className="block text-gray-600 font-bold mb-2"
                >
                  Select Pickup Point
                </label>
                <select
                  id="pickupPoint"
                  name="pickupPoint"
                  required
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="">Select a location</option>
                  <option value="Point A">Point A</option>
                  <option value="Point B">Point B</option>
                  <option value="Point C">Point C</option>
                </select>
              </div>
            )}
          </div>

          {/* Payment Options */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Payment Method
            </h2>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  value="Mobile Money"
                  checked={paymentMethod === "Mobile Money"}
                  onChange={handlePaymentChange}
                  className="w-5 h-5"
                />
                <span className="text-gray-600">Mobile Money</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  checked={paymentMethod === "Cash on Delivery"}
                  onChange={handlePaymentChange}
                  className="w-5 h-5"
                />
                <span className="text-gray-600">Cash on Delivery</span>
              </label>
            </div>
          </div>

          {/* Total and Submit */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Order Total:</h3>
              <p className="text-xl font-semibold">$65.00</p>{" "}
              {/* Replace with dynamic total */}
            </div>
            {/* <button
              type="submit"
              className="w-full bg-[#EABC5E] hover:bg-[#c49d4e] text-white font-bold py-3 px-6 rounded-lg"
            >
              Place Order
            </button> */}
            <Link
              to="/payment"
              className="bg-[#EABC5E] hover:bg-[#c49d4e] text-white font-bold py-3 px-6 rounded-lg"
            >
              Place Order
            </Link>
          </div>
        </form>

        {/* Back to Cart Link */}
        <div className="mt-6">
          <Link to="/cart" className="text-green-600 hover:underline">
            ← Back to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
