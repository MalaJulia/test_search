import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Box from "@mui/material/Box";
import { LinearProgress, Pagination } from "@mui/material";

import { searchService } from "../../service";
import queryParams from "../../constants/queryParams";
import Repository from "./Repository";

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [query, setQuery] = useSearchParams(queryParams);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0)

  useEffect(() => {
    setIsLoading(true);
    const queryData = Object.fromEntries([...query]);
    console.log(queryData, "data");

    searchService
      .Search(queryData)
      .then(({ data }) => {
        setRepositories(data.items);
        setCount(data.total_count);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error, "Error in request");
      });
  }, [query]);

  const newPage = (event, pageNew) => {
    console.log(event.target.value, "ev");
    console.log(pageNew, "pn");

    const queryData = Object.fromEntries([...query]);
    setPage(()=> (pageNew))
    setQuery(() => ({
      ...queryData,
      page: pageNew,
    }
    ));

  };

  return (
    <Box marginX={10} marginTop={5} bgcolor="#f2f1ef" borderRadius={5}>
      <>
        {isLoading && <LinearProgress />}
        {repositories.map((repository) => (
          <Repository key={repository.id} repository={repository} />
        ))}
      </>

      {!isLoading && (
        <Pagination count={Math.ceil(count / 30)} onChange={newPage} page={page}/>
      )}
    </Box>
  );
};

export default Repositories;
