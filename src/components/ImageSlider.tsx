import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { getProducts } from "../redux/slices/productsSlice";
import { Box, Card } from "@mui/material";
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
        width: "100%",
        my: 6,
        padding: "40px 0",
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
        interval={3000} // Auto-rotate every 3 seconds
        stopOnHover={true} // Stops autoplay when hovered
        showThumbs={false} // Hide thumbnail images
        showStatus={false} // Hide the current slide status (e.g., 1/4)
        dynamicHeight={false} // Fix height
        swipeable={true} // Enable swipe on mobile devices
        emulateTouch={true} // Enable touch functionality
        renderArrowPrev={(clickHandler) => (
          <div
            onClick={clickHandler}
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              backgroundColor: "#2874f0",
              color: "white",
              padding: "10px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            &#8592;
          </div>
        )}
        renderArrowNext={(clickHandler) => (
          <div
            onClick={clickHandler}
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              backgroundColor: "#2874f0",
              color: "white",
              padding: "10px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            &#8594;
          </div>
        )}
      >
        {visibleProducts.map((product) => (
          <div key={product.id}>
            <Card
              sx={{
                width: "100%",
                boxShadow: 6,
                borderRadius: "12px",
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 12,
                },
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "400px", // Adjust for better aspect ratio
                  objectFit: "cover",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
            </Card>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageSlider;
