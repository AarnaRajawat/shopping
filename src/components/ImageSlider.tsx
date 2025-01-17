import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { getProducts } from "../redux/slices/productsSlice";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

const ImageSlider: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const visibleProducts = products.slice(0, 4); // Take first 4 products

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: "100%", // Full width of the screen
        my: 6,
        padding: "40px 0", // Adjust padding to ensure content is centered
        borderRadius: "12px",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
        backgroundColor: "#fafafa",
        overflow: "hidden",
      }}
    >
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={1000} // Auto-rotate every 3 seconds
        stopOnHover={true} // Stops autoplay when hovered
        showThumbs={false} // Hide thumbnail images
        showStatus={false} // Hide the current slide status (e.g., 1/4)
        dynamicHeight={true} // Adjust height based on the image
      >
        {visibleProducts.map((product) => (
          <div key={product.id}>
            <Card
              sx={{
                maxWidth: "90%", // Set width of the image to 80% of the screen
                boxShadow: 6,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.08)",
                  boxShadow: 12,
                },
                borderRadius: "16px",
                margin: "auto",
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{
                  width: "70%",
                  height: "350px", // Fixed height for better aspect ratio
                  objectFit: "cover",
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                  {product.title}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageSlider;
