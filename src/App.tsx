import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store"; 

import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryPage from "./components/CategoriesNav"; 
import ImageSlider from "./components/ImageSlider";

// Lazy-loaded components
const ProductsPage = lazy(() => import("./pages/ProductPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailpage"));
const CategoryProducts = lazy(() => import("./components/CategoryProducts"));

const AppContent: React.FC = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header onSearch={setSearchQuery} />
      <CategoryPage />

      {/* Show ImageSlider only on the home page */}
      {location.pathname === "/" && (
        <div style={{ marginTop: "20px", padding: "0 20px" }}>
          <ImageSlider />
        </div>
      )}

      {/* Suspense for lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ProductsPage searchQuery={searchQuery} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/category/:category" element={<CategoryProducts />} />
        </Routes>
      </Suspense>

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
