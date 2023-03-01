import { Navigate, Route, Routes } from "react-router-dom";

import Box from "@mui/material/Box";

import { Header } from "./components";
import Repositories from "./components/Repositories/Repositories";
import Footer from "./components/Footer/Footer";

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
          <Route path={"/"} element={<Repositories />}>
          </Route>
        </Routes>
        <Footer />
      </Box>
    </Box>
  );
};

export default App;
