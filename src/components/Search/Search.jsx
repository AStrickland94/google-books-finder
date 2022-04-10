import { useState } from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch }) => {
    const [searchValue, setSearchValue] = useState("");
    const handleSearch = () => setSearch(searchValue);

    const handleChange = (e) => setSearchValue(e.target.value);

    return (
        <div className={styles.Search}>
            <label className={styles.Search__label} htmlFor="search">
                Find the perfect book:
            </label>
            <input
                type="text"
                name="search"
                id="search"
                className={styles.Search__input}
                onChange={handleChange}
            />
            <button className={styles.Search__btn} onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default Search;
