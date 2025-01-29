import React from "react";
import { Product } from "../types";
import { Button, Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card
      sx={{
        width: 250,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
        borderRadius: "10px",
        cursor: "pointer",
      }}
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        image={product.thumbnail}
        alt={product.title}
        sx={{
          height: 200,
          objectFit: "contain",
         
        }}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "16px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: "14px", height: 40, overflow: "hidden" }}>
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ fontSize: "18px", fontWeight: "bold", marginY: 1 }}>
          ₹{product.price}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fb641b",
            color: "white",
            fontSize: "14px",
            width: "100%",
            "&:hover": { backgroundColor: "#d63600" },
          }}
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
