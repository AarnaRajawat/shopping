import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { Product } from "../types";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        flexDirection:"row",
        width: "100vw",
        height: "100vh", // Full viewport height for vertical centering
        backgroundColor: "#f4f4f4", // Optional background color for contrast
      }}
    >
      <Card
        style={{
          maxWidth: 600, // Increased width for a larger card
          padding: "1rem", // Optional padding for spacing inside the card
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow for better appearance
          borderRadius: "8px", // Rounded corners
         
       
        }}
      >
        <CardMedia
          component="img"
          height="240" // Increased height for the image
          image={product.thumbnail}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="h4" style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ marginBottom: "1rem" }}>
            {product.category}
          </Typography>
          <Typography variant="h6" color="text.primary" style={{ marginBottom: "1rem" }}>
            ${product.price}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {product.description}
          </Typography>
          <Typography>
            {product.discountPercentage}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetail;
