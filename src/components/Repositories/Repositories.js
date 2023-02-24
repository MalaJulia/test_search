import {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import {searchService} from "../../service";
import Repositori from "./Repositori";
import queryParams from "../../constants/queryParams";
import SearchBar from "../SearchBar/SearchBar";

const Repositories= () => {

    const [ repositories, setRepositories] = useState([])
    const [query, setQuery] = useSearchParams(queryParams )

    useEffect(() => {
        const queryData = Object.fromEntries([...query]);
        console.log(queryData, "data");


        searchService
            .Search(queryData)
            .then(({ data }) => {
                setRepositories(data.items);
                console.log(data.items, 'data')

            })
            .catch((error) => {
                console.log(error, "Error in request");
            });
    }, [query]);

return (


    repositories.map((repositori) => (<Repositori key={repositori.id} repositori={repositori}/>))

)
}

export default Repositories;