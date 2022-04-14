import styles from "./BookModal.module.scss";

const bookModal = ({ book }) => {
    const image = book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : require("./../../assets/img/no_cover.png");

    const title = book.volumeInfo.title
        ? book.volumeInfo.title
        : "Title not found";

    const authors = book.volumeInfo.authors
        ? book.volumeInfo.authors.join(", ")
        : "Authors not found";

    const genres = book.volumeInfo.categories
        ? book.volumeInfo.categories.join(", ")
        : "Publish date not found";

    const publishDate = book.volumeInfo.publishedDate
        ? book.volumeInfo.publishedDate
        : "Publish date not found";

    const language = book.volumeInfo.language
        ? book.volumeInfo.language
        : "Language not found";

    const description = book.volumeInfo.description
        ? book.volumeInfo.description
        : "Description not found";

    return (
        <div className={styles.BookModal}>
            <img src={image} alt="The book" className={styles.BookModal__img} />
            <h2>{title}</h2>
            <p>
                <strong>Authors:</strong> {authors}
            </p>
            <p>
                <strong>Genres:</strong> {genres}
            </p>
            <p>{publishDate}</p>
            <p>{language}</p>
            <p>{description}</p>
        </div>
    );
};

export default bookModal;
