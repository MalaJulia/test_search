import logo from './logo.svg';
import {Octokit} from "octokit";
import './App.css';

import {Navigate, Route, Routes} from "react-router-dom";
import {Header} from "./components";
import Repositories from "./components/Repositories/Repositories";
import Repositori from "./components/Repositories/Repositori";
import SearchBar from "./components/SearchBar/SearchBar";




const App = () => {

    return (
<>
    <>
        <SearchBar/>
    </>
        <Routes>

            <Route path={"/"}>
                <Route index element={<Navigate to={"/repositories"} />} />
                <Route path={"/repositories"} element={<Repositories/>} />

                {/*<Route path={"/users"} element={<UsersPage />} />*/}
            </Route>

        </Routes>
    </>
    );
};

export default App;
// let octokit = new Octokit({
//     auth: `Basic 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`
//
// })
//      const o2 = await octokit.request('GET /repositories', {
//         headers: {
//             'X-GitHub-Api-Version': '2022-11-28'
//         }
//
//     } )


//     let url_2 = `https://api.github.com/repositories`;
//     fetch(url_2, {
//         method: 'GET',
//         headers: {
//             'Authorization': `Basic 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`
//         }
//     })
//         .then(x => x.json())
//         .then(x => {
//             console.log(x)
//         });