import { useSearchParams } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

import queryParams from "../../constants/queryParams";

const Search = () => {
  const [query, setQuery] = useSearchParams(queryParams);

  let interval;

  console.log(queryParams.q);

  const handleSearchChange = (event) => {
    interval = setTimeout(() => {
      const { value } = event.target;
      queryParams.q = value;
      if (!value) {
        queryParams.q = "a";
      }
      setQuery(() => queryParams);
    }, 300);
  };

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
        onChange={handleSearchChange}
        defaultValue={query.get("name")}
      />
    </Box>
  );
};
export default Search;
