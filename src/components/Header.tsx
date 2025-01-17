import React from "react";
import { AppBar, Toolbar, Typography, Badge, IconButton, Button, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { items = [] } = useSelector((state: RootState) => state.cart);

  return (
    <AppBar position="sticky" sx={{ boxShadow: 4, backgroundColor: "#3f51b5" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px" }}>
        {/* Logo/Brand Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            letterSpacing: "2px",
            color: "#fff",
            fontSize: "26px",
            textTransform: "uppercase",
          }}
        >
          ShopEase
        </Typography>

        {/* Navigation */}
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button
            component={Link}
            to="/"
            sx={{
              color: "#fff",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/cart"
            sx={{
              color: "#fff",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Cart
          </Button>
        </Box>

        {/* Shopping Cart Icon */}
        <IconButton
          component={Link}
          to="/cart"
          color="inherit"
          sx={{
            position: "relative",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          <Badge
            badgeContent={items.length}
            color="error"
            aria-label={`${items.length} items in cart`}
          >
            <ShoppingCartIcon sx={{ fontSize: 30 }} />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

