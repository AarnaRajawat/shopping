import React from "react";
import { TextField, Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <Box
      sx={{
        flex: 1,
        maxWidth: "400px",
        marginLeft: "20px",
        backgroundColor: "whitesmoke",
        border: "1px solid #e0e0e0",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        padding: "2px 10px",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <TextField
        variant="standard"
        placeholder="Search for products, brands, and more"
        fullWidth
        InputProps={{
          disableUnderline: true, // Removes the underline
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#757575" }} />
            </InputAdornment>
          ),
          sx: {
            fontSize: "14px",
            padding: "5px 10px",
            "& input::placeholder": {
              color: "#9e9e9e",
              fontSize: "14px",
            },
          },
        }}
        onChange={handleSearchChange}
      />
    </Box>
  );
};

export default SearchBar;