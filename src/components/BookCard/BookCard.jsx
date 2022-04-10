import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
    const image = book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : require("./../../assets/img/no_cover.png");

    const title = book.volumeInfo.title
        ? book.volumeInfo.title
        : "Title not found";

    const authors = book.volumeInfo.authors
        ? book.volumeInfo.authors.join(", ")
        : "Authors not found";

    const description = book.volumeInfo.description
        ? book.volumeInfo.description.split(" ").slice(0, 20).join(" ") + " ..."
        : "Description not found";

    return (
        <div className={styles.BookCard}>
            <img src={image} alt="The book" className={styles.BookCard__img} />
            <h3>{title}</h3>
            <p>Authors: {authors}</p>
            <p>{description}</p>
        </div>
    );
};

export default BookCard;
