import React from "react";
import { AppBar, Toolbar, Typography, Badge, IconButton, Button, Box, useMediaQuery } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"; // Import the SearchBar component
import MenuIcon from "@mui/icons-material/Menu"; // For mobile menu icon

interface HeaderProps {
  onSearch: (query: string) => void; // Prop for the search functionality
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const { items = [] } = useSelector((state: RootState) => state.cart);
  const isMobile = useMediaQuery("(max-width:600px)"); // Breakpoint for mobile screens

  return (
    <AppBar position="sticky" sx={{ boxShadow: 4, backgroundColor: "#2874f0", padding: "0 10px" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontWeight: "bold",
              letterSpacing: "1px",
              fontSize: "24px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Flipkart
          </Typography>
          {!isMobile && (
            <Typography
              sx={{
                fontSize: "12px",
                color: "white",
                marginLeft: "-5px",
                fontStyle: "italic",
              }}
            >
              Explore <span style={{ color: "#ffe500", fontWeight: "bold" }}>Plus</span>
            </Typography>
          )}
        </Box>

        {/* Search Bar */}
        {!isMobile && (
          <Box
            sx={{
              flex: 1,
              maxWidth: "600px",
              marginLeft: "20px",
            }}
          >
            <SearchBar onSearch={onSearch} />
          </Box>
        )}

        {/* Navigation Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Menu Icon for Mobile */}
          {isMobile && (
            <IconButton
              sx={{ color: "white" }}
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Login Button */}
          {!isMobile && (
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#2874f0",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              Login
            </Button>
          )}

          {/* More Dropdown (Placeholder) */}
          {!isMobile && (
            <Typography
              sx={{
                fontSize: "14px",
                color: "white",
                fontWeight: "500",
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              More
            </Typography>
          )}

          {/* Shopping Cart Icon */}
          <IconButton
            component={Link}
            to="/cart"
            sx={{
              color: "white",
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
        </Box>
      </Toolbar>

      {/* Search Bar for Mobile */}
      {isMobile && (
        <Box
          sx={{
            marginTop: "10px",
            padding: "0 10px",
          }}
        >
          <SearchBar onSearch={onSearch} />
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
