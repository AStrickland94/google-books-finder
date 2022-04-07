import { useState } from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch }) => {
    const [searchValue, setSearchValue] = useState("");
    const handleSearch = () => setSearch(searchValue);

    const handleChange = (e) => setSearchValue(e.target.value);

    return (
        <div className={styles.Search}>
            <label htmlFor="search">Find the perfect book:</label>
            <input
                type="text"
                name="search"
                id="search"
                onChange={handleChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Search;
