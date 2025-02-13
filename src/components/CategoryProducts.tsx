import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { getProducts, getProductsByCategory } from "../redux/slices/productsSlice";
import ProductCard from "./ProductCard";
import { Box, CircularProgress, Grid, Alert, Typography } from "@mui/material";

const CategoryProducts: React.FC = () => {
  const { category } = useParams<{ category?: string }>(); // Get category from URL
  const dispatch = useAppDispatch();
  const { products, categoryProducts, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (category) {
      dispatch(getProductsByCategory(category));
    } else {
      dispatch(getProducts()); // Fetch all products if no category is provided
    }
  }, [dispatch, category]);

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Alert severity="error" sx={{ m: 2 }}>
        Error loading products: {error}
      </Alert>
    );

  // Decide which product list to display
  const displayedProducts = category ? categoryProducts : products;

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, textTransform: "capitalize" }}>
        {category ? `${category} Products` : "All Products"}
      </Typography>
      <Grid container spacing={2}>
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard product={product} onAddToCart={() => {}} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center", width: "100%", mt: 2 }}>
            No products found.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default CategoryProducts;


