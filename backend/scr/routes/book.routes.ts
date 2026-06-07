import { Router } from 'express';
import { BookController } from '../controllers';

const router = Router();

// GET /api/v1/books - получить все книги (с фильтрацией, сортировкой, пагинацией)
router.get('/', BookController.getAllBooks);

// GET /api/v1/books/:id - получить книгу по ID
router.get('/:id', BookController.getBookById);

// POST /api/v1/books - создать новую книгу
router.post('/', BookController.createBook);

// PUT /api/v1/books/:id - обновить книгу
router.put('/:id', BookController.updateBook);

// DELETE /api/v1/books/:id - удалить книгу
router.delete('/:id', BookController.deleteBook);

// GET /api/v1/books/:id/reviews - получить отзывы книги
router.get('/:id/reviews', BookController.getBookReviews);

// GET /api/v1/books/:id/average-rating - получить средний рейтинг книги
router.get('/:id/average-rating', BookController.getAverageRating);

export default router;