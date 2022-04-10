import styles from "./BookList.module.scss";
import BookCard from "../../components/BookCard/";

const BookList = ({ books }) => {
    if (books === undefined) {
        return (
            <div>
                <h1 className={styles.comment}>
                    No books found! Maybe try refining your search?
                </h1>
            </div>
        );
    }
    if (books.length !== 0) {
        return (
            <div className={styles.BookList}>
                <div className={styles.BookList__grid}>
                    {books.map((book) => {
                        return <BookCard key={book.id} book={book} />;
                    })}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h1 className={styles.comment}>
                    Use the searchbar above to begin your search!
                </h1>
            </div>
        );
    }
};

export default BookList;
