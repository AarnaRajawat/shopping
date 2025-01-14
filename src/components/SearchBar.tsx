import React, { useState } from "react";
import { TextField } from "@mui/material";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      value={query}
      onChange={handleSearch}
      style={{ marginBottom: "20px", width: "100%" }}
    />
  );
};

export default SearchBar;
