import { useState } from "react";
import { Link } from "react-router-dom";
import { cucumbers, tomato } from "../../assets";

const initialCart = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: 2.5,
    quantity: 2,
    image: tomato, 
  },
  {
    id: 2,
    name: "Organic Cucumber",
    price: 3.0,
    quantity: 1,
    image: cucumbers, 
  },
];

const Carte = () => {
  const [cart, setCart] = useState(initialCart);

  // Update Quantity
  const updateQuantity = (id, value) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, value) } : item
      )
    );
  };

  // Calculate Total Price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Remove Item
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-4xl mx-auto mt-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-[#244521] p-6 border-b">
          Shopping Cart
        </h1>
        {cart.length === 0 ? (
          <div className="p-6 text-center">
            <p className="text-gray-600">Your cart is empty!</p>
            <Link
              to="/products"
              className="mt-4 inline-block text-[#244521] font-bold underline"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="p-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4 mb-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="w-16 p-2 border rounded text-center"
                    />
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 font-bold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Total Price */}
            <div className="p-6 border-t">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Total:</h3>
                <p className="text-xl font-semibold">
                  ${calculateTotal().toFixed(2)}
                </p>
              </div>
              <Link
                to="/checkout"
                className="block bg-[#EABC5E] hover:bg-[#c49d4e] text-white text-center font-bold py-3 px-6 rounded-full"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Carte;
