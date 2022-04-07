import { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import BookList from "./containers/BookList/BookList";

function App() {
    const [search, setSearch] = useState("");

    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${search}`,
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
        <>
            <Search setSearch={setSearch} />
            <BookList books={books} />
        </>
    );
}

export default App;
