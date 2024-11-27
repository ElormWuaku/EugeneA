import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Lock,
  Mail,
  ArrowRight,
  Tractor,
  ShoppingCart,
} from "lucide-react";
import { landingbg } from "../../assets";

const Auth = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [userType, setUserType] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically add your authentication logic
    // For this example, we'll use a simple routing based on userType
    if (userType === 'farmer') {
      // Redirect to farmer dashboard
      navigate('/dashboard');
    } else if (userType === 'buyer') {
      // Redirect to home page
      navigate('/');
    }
  };

  const renderLoginForm = () => {
    return (
      <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
        {activeTab === "signup" && (
          <div className="animate-slide-in">
            <label
              htmlFor="name"
              className=" text-sm font-medium text-gray-700 flex items-center"
            >
              <User className="mr-2 text-green-600" size={20} />
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 transition-all duration-300"
              placeholder="Enter your full name"
              required={activeTab === "signup"}
            />
          </div>
        )}

        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 flex items-center"
          >
            <Mail className="mr-2 text-green-600" size={20} />
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 transition-all duration-300"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700 flex items-center"
          >
            <Lock className="mr-2 text-green-600" size={20} />
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 transition-all duration-300"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 group"
        >
          {activeTab === "login" ? "Log In" : "Create Account"}
          <ArrowRight
            className="ml-2 group-hover:translate-x-1 transition-transform"
            size={20}
          />
        </button>
      </form>
    );
  };

  const renderUserTypeSelection = () => {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {activeTab === "login" ? "Login as" : "Join as"}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setUserType("buyer")}
            className={`py-5 px-6 rounded-xl border-2 transform transition-all duration-300 group ${
              userType === "buyer"
                ? "bg-green-600 text-white border-green-700 scale-105"
                : "bg-white text-gray-700 border-gray-300 hover:border-green-500 hover:shadow-lg"
            }`}
          >
            <div className="flex justify-center mb-3">
              <ShoppingCart
                className={`${
                  userType === "buyer"
                    ? "text-white"
                    : "text-green-600 group-hover:text-green-700"
                }`}
                size={32}
              />
            </div>
            <div className="text-lg font-semibold">Buyer</div>
            <div className="text-xs mt-2 opacity-70">
              Purchase fresh produce directly from local farmers
            </div>
          </button>

          <button
            type="button"
            onClick={() => setUserType("farmer")}
            className={`py-5 px-6 rounded-xl border-2 transform transition-all duration-300 group ${
              userType === "farmer"
                ? "bg-green-600 text-white border-green-700 scale-105"
                : "bg-white text-gray-700 border-gray-300 hover:border-green-500 hover:shadow-lg"
            }`}
          >
            <div className="flex justify-center mb-3">
              <Tractor
                className={`${
                  userType === "farmer"
                    ? "text-white"
                    : "text-green-600 group-hover:text-green-700"
                }`}
                size={32}
              />
            </div>
            <div className="text-lg font-semibold">Farmer</div>
            <div className="text-xs mt-2 opacity-70">
              Sell your fresh produce and connect with buyers
            </div>
          </button>
        </div>

        {userType && renderLoginForm()}
      </div>
    );
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-8">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
        style={{
          backgroundImage: `url(${landingbg})`,
          filter: "brightness(0.8) contrast(1.1)",
        }}
      />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-700/20 z-10" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mt-8 border border-green-100 transform transition-all duration-300 hover:shadow-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 mb-2">
            Guadzefie
          </h1>
          <p className="text-gray-600 text-sm tracking-wide">
            Your local farm-to-table marketplace
          </p>
        </div>

        <div className="mb-6 flex justify-center">
          <div className="inline-flex bg-green-100 rounded-xl p-1 shadow-inner">
            <button
              type="button"
              onClick={() => {
                setActiveTab("login");
                setUserType(null);
              }}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                activeTab === "login"
                  ? "bg-green-600 text-white shadow-md"
                  : "text-green-800 hover:bg-green-200"
              }`}
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab("signup");
                setUserType(null);
              }}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                activeTab === "signup"
                  ? "bg-green-600 text-white shadow-md"
                  : "text-green-800 hover:bg-green-200"
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {renderUserTypeSelection()}

        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-sm text-green-600 hover:underline hover:text-green-800 transition-colors"
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;