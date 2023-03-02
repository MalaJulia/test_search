import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Box from "@mui/material/Box";
import { Pagination } from "@mui/material";

import queryParams from "../../constants/queryParams";

const Footer = ({ count, isLoading }) => {
  const [query, setQuery] = useSearchParams(queryParams);
  const [page, setPage] = useState(0);

  useEffect(() => setPage(+query.get("page")), [query]);

  const newPage = (event, pageNew) => {
    const queryData = Object.fromEntries([...query]);
    setQuery(() => ({
      ...queryData,
      page: pageNew,
    }));
  };

  return (
    <Box
      sx={{
        backgroundColor: "#7282ef",
        height: "50px",
        marginTop: " auto",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          disabled={isLoading}
          count={Math.ceil(count / 30)}
          onChange={newPage}
          page={page}
        />
      </Box>
    </Box>
  );
};

export default Footer;
