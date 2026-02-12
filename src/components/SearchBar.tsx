import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  placeholder?: string;
  onSearch?: (searchTerm: string) => void;
};

export default function SearchBar({ placeholder, onSearch }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onSearch) {
      onSearch?.(searchTerm);
    }
  };

  const handleClick = () => {
    onSearch?.(searchTerm);
  };

  return (
    <TextField
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder={placeholder}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleClick}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      onKeyDown={handleKeyDown}
      variant="outlined"
      fullWidth
    />
  );
}
