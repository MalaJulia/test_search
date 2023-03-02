import { Route, Routes } from "react-router-dom";

import Box from "@mui/material/Box";

import { Header } from "./components";
import Repositories from "./components/Repositories/Repositories";

const App = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        bgcolor={"#bab7b6"}
      >
        <Header />
        <Routes>
          <Route path={"/"} element={<Repositories />}></Route>
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
