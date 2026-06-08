import { Router } from 'express';
import { BookController } from '../controllers';
import { ReviewController } from '../controllers'; // Добавляем импорт ReviewController

const router = Router();

// GET /api/v1/books - получить все книги
router.get('/', BookController.getAllBooks);

// POST /api/v1/books - создать новую книгу
router.post('/', BookController.createBook);

// GET /api/v1/books/:id/reviews - получить отзывы книги
router.get('/:id/reviews', BookController.getBookReviews);

// POST /api/v1/books/:id/reviews - создать отзыв для книги (ДОБАВЛЯЕМ!)
router.post('/:id/reviews', ReviewController.createReview);

// GET /api/v1/books/:id/average-rating - получить средний рейтинг
router.get('/:id/average-rating', BookController.getAverageRating);

// GET /api/v1/books/:id - получить книгу по ID
router.get('/:id', BookController.getBookById);

// PUT /api/v1/books/:id - обновить книгу
router.put('/:id', BookController.updateBook);

// DELETE /api/v1/books/:id - удалить книгу
router.delete('/:id', BookController.deleteBook);

export default router;