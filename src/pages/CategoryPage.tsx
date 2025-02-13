import React from "react";
import CategoriesNav from "../components/CategoriesNav";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const CategoriesPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Categories
      </Typography>
      <CategoriesNav />


    </Container>
  );
};

export default CategoriesPage;
