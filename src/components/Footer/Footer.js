import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Box from "@mui/material/Box";
import { Pagination } from "@mui/material";

import { searchService } from "../../service";
import queryParams from "../../constants/queryParams";

const Footer = () => {
  const [query, setQuery] = useSearchParams(queryParams);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    const queryData = Object.fromEntries([...query]);

    searchService
      .Search(queryData)
      .then(({ data }) => {
        setCount(data.total_count);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error, "Error in request");
      });
  }, [query]);

  const newPage = (event, pageNew) => {
    const queryData = Object.fromEntries([...query]);
    setPage(() => pageNew);
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
