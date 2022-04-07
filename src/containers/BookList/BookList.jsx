import styles from "./BookList.module.scss";
import BookCard from "../../components/BookCard/";

const BookList = ({ books }) => {
    return books.length !== 0 ? (
        <div>
            <div>
                {books.map((book) => {
                    return <BookCard key={book.id} book={book} />;
                })}
            </div>
        </div>
    ) : (
        console.log("no books")
    );
};

export default BookList;
