import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { getProducts } from "../redux/slices/productsSlice";
import { Box, Button } from "@mui/material";

const ImageSlider: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.products);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.min(products.length, 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.min(products.length, 4)) % Math.min(products.length, 4));
  };

  const visibleProducts = products.slice(0, 4);

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", my: 4 }}>
      <Button onClick={prevSlide}>{"<"}</Button>
      {visibleProducts.map((product, index) => (
        <Box
          key={product.id}
          sx={{
            display: index === currentIndex ? "block" : "none",
            textAlign: "center",
            mx: 2,
          }}
        >
          <img src={product.thumbnail} alt={product.title} style={{ width: "200px", height: "200px" }} />
          <p>{product.title}</p>
        </Box>
      ))}
      <Button onClick={nextSlide}>{">"}</Button>
    </Box>
  );
};

export default ImageSlider;
