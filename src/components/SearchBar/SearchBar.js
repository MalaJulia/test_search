import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {useSearchParams} from "react-router-dom";
import queryParams from "../../constants/queryParams";

const Search = () => {
    const [query, setQuery] = useSearchParams(queryParams);

    console.log(queryParams.q)
    const handleSubmit = (e) => e.preventDefault();

    const handleSearchChange = (event) => {
        const { value } = event.target;
        console.log(value, "value");
        console.log(event, 'event')
        queryParams.q =value;
        if (!value) {
        }

        setQuery(() => queryParams);
    };

    return (
        <Box>
            <TextField
                id="name"
                label="Name"
                type="search"
                variant="standard"
                onChange={handleSearchChange}
                onSubmit={handleSubmit}
                defaultValue={query.get("name")}
            />
            </Box>
        )}
export default Search