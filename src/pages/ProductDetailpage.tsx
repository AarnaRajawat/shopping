import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/productsApi"; // Ensure this function returns a Product type
import ProductDetail from "../components/ProductDetail";
import { Product } from "../types";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract product ID from URL
  const [product, setProduct] = useState<Product | null>(null); // State for product data
  const [isLoading, setIsLoading] = useState<boolean>(true); // State for loading state
  const [error, setError] = useState<string>(""); // State for error messages

  useEffect(() => {
    const loadProduct = async () => {
      try {
        if (id) {
          const productData = await fetchProductById(Number(id)); // Fetch product by ID
          setProduct(productData); // Set product state with fetched data
        }
      } catch (err) {
        setError("Failed to load product details. Please try again.");
      } finally {
        setIsLoading(false); // End loading state
      }
    };

    loadProduct(); // Call the function to load the product on component mount
  }, [id]); // Re-fetch the product if ID changes

  if (isLoading) {
    return <p>Loading product details...</p>; // You could replace this with a loading spinner
  }

  if (error) {
    return <p>{error}</p>; // Display error if any occurs
  }

  if (!product) {
    return <p>No product found.</p>; // Display message if no product is found
  }

  // Pass the full product object to ProductDetail component
  return <ProductDetail product={product} />;
};

export default ProductDetailPage;