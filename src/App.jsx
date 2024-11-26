import { BrowserRouter, Routes, Route } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Landing from "./pages/Landing"
import UserDashboard from "./pages/UserDashboard"
import TrackOrder from "./pages/TrackOrder"
import ProductPage from "./pages/ProductPage"
import Login from "./pages/Login"
import Checkout from "./pages/Checkout"
import Carte from "./pages/Carte"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Landing />} />
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="track-order" element={<TrackOrder />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="login" element={<Login />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="carte" element={<Carte />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App