import './App.css';

import {Navigate, Route, Routes} from "react-router-dom";
import {Header} from "./components";
import Repositories from "./components/Repositories/Repositories";


const App = () => {

    return (
      <div className={"container"}>
        <Header />
        <Routes>
          <Route path={"/"}>
            <Route index element={<Navigate to={"/repositories"} />} />
            <Route path={"/repositories"} element={<Repositories />} />
          </Route>
        </Routes>
      </div>
    );
};

export default App;
