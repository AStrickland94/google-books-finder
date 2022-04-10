import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Search from "./components/Search/Search";
import BookList from "./containers/BookList/BookList";

function App() {
    const [search, setSearch] = useState("");

    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=12`,
        );
        const data = await response.json();
        setBooks(data.items);
    };

    useEffect(() => {
        if (search) {
            getBooks();
        }
    }, [search]);

    console.log(books);
    return (
        <div className={styles.App}>
            <h1 className={styles.App__title}>Google Books Search</h1>
            <Search setSearch={setSearch} />
            <BookList books={books} />
        </div>
    );
}

export default App;
