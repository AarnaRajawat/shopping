import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './redux/store'; 

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailpage";
import CategoryPage from "./components/CategoriesNav"; // Import CategoryPage
import ImageSlider from "./components/ImageSlider";
import "slick-carousel/slick/slick.css"; // Carousel styles
import "slick-carousel/slick/slick-theme.css"; // Carousel theme styles

const AppContent: React.FC = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header onSearch={setSearchQuery} />
      <div>
        <CategoryPage /> {/* This will be rendered on all pages */}
      </div>

      {/* Conditionally render ImageSlider only on the homepage */}
      {location.pathname === "/" && (
        <div style={{ marginTop: "20px", padding: "0 20px" }}>
          <ImageSlider />
        </div>
      )}

      {/* Categories Section (will appear after navbar) */}
     

      <Routes>
        <Route path="/" element={<ProductsPage searchQuery={searchQuery} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>

      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
};

export default App;
