import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Box from "@mui/material/Box";
import { LinearProgress, Typography } from "@mui/material";

import { searchService } from "../../service";
import queryParams from "../../constants/queryParams";
import Repository from "./Repository";
import Footer from "../Footer/Footer";

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [query, setQuery] = useSearchParams(queryParams);
  const [isLoading, setIsLoading] = useState(false);
  const [pos, setPos] = useState(false);
  const [count, setCount] = useState(0);

  const ref = useRef();

  const handleTop = () => {
    ref.current.scrollTop = 0;
    setPos(false);
  };

  useEffect(() => {
    setIsLoading(true);
    handleTop();
    const queryData = Object.fromEntries([...query]);
    searchService
      .Search(queryData)
      .then(({ data }) => {
        setRepositories(data.items);
        setIsLoading(false);
        setCount(data.total_count);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error, "Error in request");
      });
  }, [query]);

  return (
    <>
      <Box
        flex={1}
        paddingX={3}
        overflow="auto"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"row"}
      >
        <Box
          ref={ref}
          maxWidth="sm"
          sx={{
            minWidth: isLoading || repositories.length === 0 ? "600px" : "0px",
            height: "90%",
            overflow: "auto",
            background: "#f2f1ef",
            borderRadius: 5,
          }}
        >
          <>
            {isLoading && <LinearProgress />}
            {repositories.map((repository) => (
              <Repository key={repository.id} repository={repository} />
            ))}
          </>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {!repositories.length && (
              <Typography variant="h6" component="h2">
                No repositories
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
      <Footer isLoading={isLoading} count={count} />
    </>
  );
};

export default Repositories;
