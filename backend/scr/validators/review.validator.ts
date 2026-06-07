import { z } from 'zod';

// Схема для создания отзыва
export const createReviewSchema = z.object({
  userName: z.string().min(1, 'Имя пользователя обязательно').max(100),
  rating: z.number().min(1, 'Оценка должна быть от 1 до 5').max(5),
  comment: z.string().min(1, 'Комментарий обязателен').max(1000)
});

// Схема для обновления отзыва
export const updateReviewSchema = createReviewSchema.partial();

// Схема для query параметров отзывов
export const reviewQuerySchema = z.object({
  rating: z.string().regex(/^[1-5]$/, 'Оценка должна быть от 1 до 5').optional(),
  sortBy: z.enum(['createdAt']).optional(),
  order: z.enum(['asc', 'desc']).optional().default('desc')
});

// Типы для использования в сервисах и контроллерах
export type CreateReviewInput = z.infer<typeof createReviewSchema>;
export type UpdateReviewInput = z.infer<typeof updateReviewSchema>;
export type ReviewQueryInput = z.infer<typeof reviewQuerySchema>;