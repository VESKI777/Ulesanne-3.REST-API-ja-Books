import { Router } from 'express';
import bookRoutes from './book.routes';
import reviewRoutes from './review.routes';

const router = Router();

// Монтируем маршруты с префиксом /api/v1
router.use('/api/v1/books', bookRoutes);
router.use('/api/v1/reviews', reviewRoutes);

export default router;