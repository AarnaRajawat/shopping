// src/pages/ProductDetailPage.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/productsApi";
import ProductDetail from "../components/ProductDetail";
import { Product } from "../types";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract ID from URL params
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        if (id) {
          const productData = await fetchProductById(Number(id)); // Fetch product
          setProduct(productData); // Set product state
        }
      } catch (err) {
        setError("Failed to load product details.");
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (isLoading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>No product found.</p>;

  return <ProductDetail product={product} />;
};

export default ProductDetailPage;
