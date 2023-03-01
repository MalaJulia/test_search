import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#7282ef",
        paddingY: 1,
      }}
      display="flex"
      alignItems="center"
      justifyContent="space-around"
    >
      <Typography variant="overline">Search repositories GitHub</Typography>
      <SearchBar />
    </Box>
  );
};
export { Header };
