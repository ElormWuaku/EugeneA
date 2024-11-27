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
          <Route path="auth" element={<Auth/>} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="cart" element={<Carte />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App