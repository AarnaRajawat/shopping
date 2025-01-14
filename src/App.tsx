import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import ImageSlider from "./components/ImageSlider";  // Make sure ImageSlider is correctly imported
import { Provider } from "react-redux";
import store from "./redux/store";
import SearchBar from "./components/SearchBar";

const AppContent: React.FC = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header />
      {/* Conditionally render SearchBar only on the homepage */}
      {location.pathname === "/" && (
        <div style={{ marginTop: "20px", padding: "0 20px" }}>
          <SearchBar onSearch={setSearchQuery} />
        </div>
      )}
      {/* Conditionally render ImageSlider only on the homepage */}
      {location.pathname === "/" && (
        <div style={{ marginTop: "20px", padding: "0 20px" }}>
          <ImageSlider />
        </div>
      )}
      <Routes>
        <Route path="/" element={<ProductsPage searchQuery={searchQuery} />} />
        <Route path="/cart" element={<CartPage />} />
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
