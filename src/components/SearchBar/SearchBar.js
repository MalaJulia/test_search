import { useSearchParams } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

import queryParams from "../../constants/queryParams";

const Search = () => {
  const [query, setQuery] = useSearchParams(queryParams);

  const handleSearchSubmit = (document.body.onkeyup = (event) => {
    const { value } = event.target;
    queryParams.q = value;
    if (!value) {
      queryParams.q = "a";
    }

    if (event.key === "Enter") {
      setQuery(() => queryParams);
    }
  });

  return (
    <Box>
      <TextField
        sx={{
          width: 300,
        }}
        id="search"
        placeholder="Search"
        label=<SearchIcon />
        type="search"
        variant="outlined"
        onSubmit={handleSearchSubmit}
        defaultValue={query.get("name")}
      />
    </Box>
  );
};
export default Search;
