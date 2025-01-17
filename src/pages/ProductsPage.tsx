import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { getProducts } from "../redux/slices/productsSlice";
import ProductCard from "../components/ProductCard";
import { addToCart } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import {Grid,Container, Paper } from "@mui/material";

interface ProductsPageProps {
  searchQuery: string;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ searchQuery }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.products);

  // State to track how many times each product is added to the cart
  const [addCount, setAddCount] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));

    // Track the count for each product
    setAddCount((prev) => {
      const count = prev[product.id] || 0;
      const newCount = count + 1;

      // Notify user when product is added
      toast.success(`${product.title} added to cart!`, {
        position: "top-right",
        autoClose: 2000,
      });

      return { ...prev, [product.id]: newCount };
    });
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Grid container spacing={3}>
        {filteredProducts.map((product) => {
          const isBlurred = addCount[product.id] >= 2; // Apply blur if added twice

          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Paper
                elevation={3}
                style={{
                  transition: "filter 0.3s ease-in-out",
                  filter: isBlurred ? "blur(5px)" : "none", // Apply blur effect
                }}
              >
                <ProductCard
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ProductsPage;
