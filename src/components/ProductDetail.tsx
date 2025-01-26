import React from "react";
import { Product } from "../types";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Chip,Rating } from "@mui/material";

// Helper function to format the date (if needed)
const formatDate = (date: string) => {
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString();
};

interface ProductDetailProps {
  product: Product; // The full product object, including reviews and metadata
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  // Destructure properties from the product object
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    image,
    weight,
    dimensions,
    additionalInfo,
    reviews = [],
    meta,
  } = product;

  return (
    <Box sx={{ maxWidth: "1200px", margin: "20px auto", padding: 3 }}>
      {/* Product Title and Description */}
      <Typography variant="h3" align="center" sx={{ mb: 2, fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 3, color: "text.secondary" }}>
        {description}
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Product Image */}
        <Grid item xs={12} md={6}>
          <Card sx={{ width: "100%", maxWidth: 400, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="300"
              image={thumbnail}
              alt={title}
              sx={{ borderRadius: 2 }}
            />
            {image && (
              <CardMedia
                component="img"
                height="300"
                image={image}
                alt={`${title} Full Image`}
                sx={{ borderTop: "1px solid #ddd", borderRadius: "0 0 8px 8px" }}
              />
            )}
          </Card>
        </Grid>

        {/* Product Information */}
        <Grid item xs={12} md={6}>
          <Card sx={{ width: "100%", maxWidth: 400, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
                Price: ${price}
              </Typography>
              <Chip
                label={`${discountPercentage}% OFF`}
                color="error"
                size="small"
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography variant="body1" sx={{ mr: 1 }}>
                  Rating:
                </Typography>
                <Rating value={rating} readOnly precision={0.5} />
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Stock: {stock} items available
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Brand: {brand}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Category: {category}
              </Typography>
              {weight && (
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Weight: {weight} kg
                </Typography>
              )}
              {dimensions && (
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Dimensions:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Width: {dimensions.width} cm
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Height: {dimensions.height} cm
                  </Typography>
                </Box>
              )}
              {additionalInfo && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2 }}
                >
                  Additional Info: {additionalInfo}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Reviews Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" color="primary" sx={{ mb: 3 }}>
          Reviews
        </Typography>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <Box
              key={index}
              sx={{
                mt: 3,
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: 2,
                boxShadow: 2,
              }}
            >
              <Typography variant="h6">{review.reviewerName}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {review.comment}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Reviewed on: {formatDate(review.date)}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography>No reviews yet.</Typography>
        )}
      </Box>

      {/* Meta Info Section */}
      <Box
        sx={{
          mt: 5,
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "background.paper",
        }}
      >
        <Typography
          variant="h5"
          color="primary"
          sx={{ textAlign: "center", mb: 3 }}
        >
          Product Metadata
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="body1">
            <strong>Created At:</strong> {formatDate(meta.createdAt)}
          </Typography>
          <Typography variant="body1">
            <strong>Updated At:</strong> {formatDate(meta.updatedAt)}
          </Typography>
          <Typography variant="body1">
            <strong>Barcode:</strong> {meta.barcode}
          </Typography>
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontWeight: "bold", fontSize: "1.2rem" }}
            >
              QR Code
            </Typography>
            <Box
              sx={{
                p: 2,
                border: "3px dashed",
                borderColor: "primary.main",
                borderRadius: 4,
                display: "inline-block",
                boxShadow: 5,
                bgcolor: "background.default",
              }}
            >
              <Box
                component="img"
                src={meta.qrCode}
                alt="QR Code"
                sx={{
                  width: 200,
                  height: 200,
                  objectFit: "contain",
                  borderRadius: 2,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
