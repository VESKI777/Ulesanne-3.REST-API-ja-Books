"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const uuid_1 = require("uuid");
const books_1 = require("../data/books");
const authors_1 = require("../data/authors");
const publishers_1 = require("../data/publishers");
const genres_1 = require("../data/genres");
const reviews_1 = require("../data/reviews");
class BookService {
    // Получить все книги с фильтрацией, сортировкой и пагинацией
    static getAllBooks(query) {
        let filteredBooks = [...books_1.books];
        // Фильтрация по title
        if (query.title) {
            filteredBooks = filteredBooks.filter(book => book.title.toLowerCase().includes(query.title.toLowerCase()));
        }
        // Фильтрация по author (поиск по имени автора)
        if (query.author) {
            filteredBooks = filteredBooks.filter(book => {
                const author = authors_1.authors.find(a => a.id === book.authorId);
                return author && (author.firstName.toLowerCase().includes(query.author.toLowerCase()) ||
                    author.lastName.toLowerCase().includes(query.author.toLowerCase()));
            });
        }
        // Фильтрация по genre
        if (query.genre) {
            filteredBooks = filteredBooks.filter(book => book.genres.some(g => g.name.toLowerCase() === query.genre.toLowerCase()));
        }
        // Фильтрация по language
        if (query.language) {
            filteredBooks = filteredBooks.filter(book => book.language.toLowerCase() === query.language.toLowerCase());
        }
        // Фильтрация по year
        if (query.year) {
            filteredBooks = filteredBooks.filter(book => book.publishedYear === parseInt(query.year));
        }
        // Фильтрация по publisher
        if (query.publisher) {
            filteredBooks = filteredBooks.filter(book => {
                const publisher = publishers_1.publishers.find(p => p.id === book.publisherId);
                return publisher && publisher.name.toLowerCase().includes(query.publisher.toLowerCase());
            });
        }
        // Сортировка
        if (query.sortBy) {
            filteredBooks.sort((a, b) => {
                let comparison = 0;
                if (query.sortBy === 'title') {
                    comparison = a.title.localeCompare(b.title);
                }
                else if (query.sortBy === 'publishedYear') {
                    comparison = a.publishedYear - b.publishedYear;
                }
                return query.order === 'asc' ? comparison : -comparison;
            });
        }
        // Пагинация
        const page = parseInt(query.page);
        const limit = parseInt(query.limit);
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedBooks = filteredBooks.slice(startIndex, endIndex);
        // Добавляем детали автора и издателя
        const booksWithDetails = paginatedBooks.map(book => {
            const author = authors_1.authors.find(a => a.id === book.authorId);
            const publisher = publishers_1.publishers.find(p => p.id === book.publisherId);
            return { ...book, author, publisher };
        });
        return {
            data: booksWithDetails,
            total: filteredBooks.length
        };
    }
    // Получить книгу по ID
    static getBookById(id) {
        const book = books_1.books.find(b => b.id === id);
        if (!book)
            return null;
        const author = authors_1.authors.find(a => a.id === book.authorId);
        const publisher = publishers_1.publishers.find(p => p.id === book.publisherId);
        return { ...book, author, publisher };
    }
    // Создать новую книгу
    static createBook(data) {
        const selectedGenres = genres_1.genres.filter(g => data.genreIds.includes(g.id));
        const newBook = {
            id: (0, uuid_1.v4)(),
            title: data.title,
            isbn: data.isbn,
            publishedYear: data.publishedYear,
            pageCount: data.pageCount,
            language: data.language,
            description: data.description,
            coverImage: data.coverImage,
            authorId: data.authorId,
            publisherId: data.publisherId,
            genres: selectedGenres,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        books_1.books.push(newBook);
        const author = authors_1.authors.find(a => a.id === newBook.authorId);
        const publisher = publishers_1.publishers.find(p => p.id === newBook.publisherId);
        return { ...newBook, author, publisher };
    }
    // Обновить книгу
    static updateBook(id, data) {
        const bookIndex = books_1.books.findIndex(b => b.id === id);
        if (bookIndex === -1)
            return null;
        const existingBook = books_1.books[bookIndex];
        // Обновляем жанры если переданы
        let updatedGenres = existingBook.genres;
        if (data.genreIds) {
            updatedGenres = genres_1.genres.filter(g => data.genreIds.includes(g.id));
        }
        const updatedBook = {
            ...existingBook,
            title: data.title ?? existingBook.title,
            isbn: data.isbn ?? existingBook.isbn,
            publishedYear: data.publishedYear ?? existingBook.publishedYear,
            pageCount: data.pageCount ?? existingBook.pageCount,
            language: data.language ?? existingBook.language,
            description: data.description ?? existingBook.description,
            coverImage: data.coverImage ?? existingBook.coverImage,
            authorId: data.authorId ?? existingBook.authorId,
            publisherId: data.publisherId ?? existingBook.publisherId,
            genres: updatedGenres,
            updatedAt: new Date()
        };
        books_1.books[bookIndex] = updatedBook;
        const author = authors_1.authors.find(a => a.id === updatedBook.authorId);
        const publisher = publishers_1.publishers.find(p => p.id === updatedBook.publisherId);
        return { ...updatedBook, author, publisher };
    }
    // Удалить книгу
    static deleteBook(id) {
        const bookIndex = books_1.books.findIndex(b => b.id === id);
        if (bookIndex === -1)
            return false;
        books_1.books.splice(bookIndex, 1);
        return true;
    }
    // Получить отзывы книги
    static getBookReviews(bookId) {
        return reviews_1.reviews.filter(r => r.bookId === bookId);
    }
    // Получить средний рейтинг книги
    static getAverageRating(bookId) {
        const bookReviews = reviews_1.reviews.filter(r => r.bookId === bookId);
        if (bookReviews.length === 0)
            return 0;
        const sum = bookReviews.reduce((acc, review) => acc + review.rating, 0);
        return parseFloat((sum / bookReviews.length).toFixed(1));
    }
    // Проверить существование автора
    static checkAuthorExists(authorId) {
        return authors_1.authors.some(a => a.id === authorId);
    }
    // Проверить существование издателя
    static checkPublisherExists(publisherId) {
        return publishers_1.publishers.some(p => p.id === publisherId);
    }
}
exports.BookService = BookService;
