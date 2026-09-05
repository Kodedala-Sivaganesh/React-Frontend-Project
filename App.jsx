import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import CartProvider from "./context/CartContext";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import FoodManagement from "./pages/FoodManagement";

import All from "./pages/menu/All";
import Starters from "./pages/menu/Starters";
import MainCourse from "./pages/menu/MainCourse";
import Desserts from "./pages/menu/Desserts";
import Drinks from "./pages/menu/Drinks";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* MENU */}
          <Route path="/menu" element={<Menu />}>
            
            {/* DEFAULT MENU PAGE = ALL ITEMS */}
            <Route index element={<All />} />

            <Route path="all" element={<All />} />
            <Route path="starters" element={<Starters />} />
            <Route path="main-course" element={<MainCourse />} />
            <Route path="desserts" element={<Desserts />} />
            <Route path="drinks" element={<Drinks />} />

          </Route>

          

          {/* OTHER PAGES */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />

          {/* FOOD MANAGEMENT */}
          <Route
            path="/food-management"
            element={<FoodManagement />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;