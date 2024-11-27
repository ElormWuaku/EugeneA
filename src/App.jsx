import { BrowserRouter, Routes, Route } from "react-router-dom"
import "@fortawesome/fontawesome-free/css/all.min.css";
import RootLayout from "./layouts/RootLayout"
import Landing from "./pages/Landing"
import TrackOrder from "./pages/TrackOrder"
import ProductPage from "./pages/ProductPage"
import Checkout from "./pages/Checkout"
import Carte from "./pages/Carte"
import Auth from "./pages/Auth"
import FarmerDashboard from "./pages/FarmerDashboard"
import About from "./pages/About"
import ProductDetails from "./pages/ProductDetails";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Landing />} />
          <Route path="dashboard" element={<FarmerDashboard />} />
          <Route path="about" element={<About />} />
          <Route path="track-order" element={<TrackOrder />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="product-details/:id" element={<ProductDetails />} />
          <Route path="auth" element={<Auth/>} />
          <Route path="cart" element={<Carte />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment" element={<Payment />} />
          <Route path="confirmation" element={<Confirmation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App