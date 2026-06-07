import { Router } from 'express';
import { ReviewController } from '../controllers';

const router = Router();

// GET /api/v1/books/:bookId/reviews - получить отзывы книги
router.get('/books/:bookId/reviews', ReviewController.getBookReviews);

// POST /api/v1/books/:bookId/reviews - создать отзыв для книги
router.post('/books/:bookId/reviews', ReviewController.createReview);

// GET /api/v1/reviews/:id - получить отзыв по ID
router.get('/:id', ReviewController.getReviewById);

// PUT /api/v1/reviews/:id - обновить отзыв
router.put('/:id', ReviewController.updateReview);

// DELETE /api/v1/reviews/:id - удалить отзыв
router.delete('/:id', ReviewController.deleteReview);

export default router;