import React from "react";
import { Product } from "../types";
import { Button, Card, CardContent, Typography, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleCardMediaClick = () => {
    // Navigate to ProductDetailPage with the product ID
    navigate(`/product/${product.id}`);
  };

  return (
    <Card>
      {/* Make CardMedia clickable */}
      <CardMedia
        component="img"
        height="140"
        image={product.thumbnail}
        alt={product.title}
        style={{ cursor: "pointer" }} // Add cursor pointer for better UX
        onClick={handleCardMediaClick} // Handle click event
      />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body2">{product.description}</Typography>
        <Typography variant="h6">${product.price}</Typography>
        <Button variant="contained" onClick={() => onAddToCart(product)}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
