"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
// GET /api/v1/books/:bookId/reviews - получить отзывы книги
router.get('/books/:bookId/reviews', controllers_1.ReviewController.getBookReviews);
// POST /api/v1/books/:bookId/reviews - создать отзыв для книги
router.post('/books/:bookId/reviews', controllers_1.ReviewController.createReview);
// GET /api/v1/reviews/:id - получить отзыв по ID
router.get('/:id', controllers_1.ReviewController.getReviewById);
// PUT /api/v1/reviews/:id - обновить отзыв
router.put('/:id', controllers_1.ReviewController.updateReview);
// DELETE /api/v1/reviews/:id - удалить отзыв
router.delete('/:id', controllers_1.ReviewController.deleteReview);
exports.default = router;
