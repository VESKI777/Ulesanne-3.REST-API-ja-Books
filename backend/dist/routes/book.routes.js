"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
// GET /api/v1/books - получить все книги (с фильтрацией, сортировкой, пагинацией)
router.get('/', controllers_1.BookController.getAllBooks);
// GET /api/v1/books/:id - получить книгу по ID
router.get('/:id', controllers_1.BookController.getBookById);
// POST /api/v1/books - создать новую книгу
router.post('/', controllers_1.BookController.createBook);
// PUT /api/v1/books/:id - обновить книгу
router.put('/:id', controllers_1.BookController.updateBook);
// DELETE /api/v1/books/:id - удалить книгу
router.delete('/:id', controllers_1.BookController.deleteBook);
// GET /api/v1/books/:id/reviews - получить отзывы книги
router.get('/:id/reviews', controllers_1.BookController.getBookReviews);
// GET /api/v1/books/:id/average-rating - получить средний рейтинг книги
router.get('/:id/average-rating', controllers_1.BookController.getAverageRating);
exports.default = router;
