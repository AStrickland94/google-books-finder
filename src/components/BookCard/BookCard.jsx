import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
    console.log(book.volumeInfo.authors);

    const image = book.volumeInfo.imageLinks.thumbnail
        ? book.volumeInfo.imageLinks.thumbnail
        : "";

    const title = book.volumeInfo.title
        ? book.volumeInfo.title
        : "Title not found";

    const authors = book.volumeInfo.authors
        ? book.volumeInfo.authors.join(", ")
        : "Authors not found";

    const description = book.volumeInfo.description
        ? book.volumeInfo.description.length > 100
            ? book.volumeInfo.description.slice(0, 100) + " ..."
            : book.volumeInfo.description
        : "Description not found";

    return (
        <div>
            <img src={image} />
            <h3>Title: {title}</h3>
            <p>Author: {authors}</p>
            <p>Description: {description}</p>
        </div>
    );
};

export default BookCard;
