import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchCategoriesThunk } from "../redux/slices/categoriesSlice";
import { RootState, useAppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const CategoriesNav: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { categories, loading, error } = useSelector(
    (state: RootState) => state.categories
  );

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

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={3} key={category}>
            <Paper
              sx={{
                padding: 2,
                textAlign: "center",
                cursor: "pointer",
                "&:hover": { bgcolor: "action.hover" },
              }}
              onClick={() => navigate(`/category/${category}`)}
            >
              <Typography variant="body1">{category}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoriesNav;




