import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchCategoriesThunk } from "../redux/slices/categoriesSlice";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { Category } from "../types";

// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import FolderIcon from "@mui/icons-material/Folder";
import Grid from "@mui/material/Grid"; // Use Grid for horizontal layout
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const CategoriesNav: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categories, loading, error } = useSelector(
    (state: RootState) => state.categories
  );
  const [visibleCategories, setVisibleCategories] = useState(4); // Track the number of visible categories

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Alert severity="error" sx={{ m: 2 }}>
        Error loading categories: {error}
      </Alert>
    );

  const handleShowMore = () => {
    setVisibleCategories((prev) => prev + 4); // Increase the number of categories shown
  };

  return (
    <Box>
      {/* Categories Section */}
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 2,
          p: 2,
          boxShadow: 3,
          marginTop: 3,
        }}
      >
        <Typography variant="h6" component="div" sx={{ px: 2, py: 1, fontWeight: 'bold' }}>
          Product Categories
        </Typography>
        <Grid container spacing={2}>
          {categories.slice(0, visibleCategories).map((category: Category) => (
            <Grid item xs={12} sm={6} md={3} key={category.slug}>
              <Paper
                sx={{
                  padding: 2,
                  borderRadius: 2,
                  boxShadow: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "action.hover",
                  },
                }}
              >
                <Link
                  to={category.url}
                  target="_blank"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "inherit",
                    width: "100%", // Make Link take the full width
                    padding: "8px", // Add padding for better clicking area
                  }}
                >
                  <FolderIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {category.name}
                  </Typography>
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Show More Button */}
        {visibleCategories < categories.length && (
          <Box sx={{ textAlign: "center", marginTop: 2 }}>
            <Button  color="primary" onClick={handleShowMore}>
              Show More
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CategoriesNav;
