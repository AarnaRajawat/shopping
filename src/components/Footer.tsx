import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box sx={{ mt: 4, py: 2, backgroundColor: "#f0f0f0", textAlign: "center" }}>
      <Typography variant="body2">© 2025 Shopping Cart. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
