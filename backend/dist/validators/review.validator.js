"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewQuerySchema = exports.updateReviewSchema = exports.createReviewSchema = void 0;
const zod_1 = require("zod");
// Схема для создания отзыва
exports.createReviewSchema = zod_1.z.object({
    userName: zod_1.z.string().min(1, 'Имя пользователя обязательно').max(100),
    rating: zod_1.z.number().min(1, 'Оценка должна быть от 1 до 5').max(5),
    comment: zod_1.z.string().min(1, 'Комментарий обязателен').max(1000)
});
// Схема для обновления отзыва
exports.updateReviewSchema = exports.createReviewSchema.partial();
// Схема для query параметров отзывов
exports.reviewQuerySchema = zod_1.z.object({
    rating: zod_1.z.string().regex(/^[1-5]$/, 'Оценка должна быть от 1 до 5').optional(),
    sortBy: zod_1.z.enum(['createdAt']).optional(),
    order: zod_1.z.enum(['asc', 'desc']).optional().default('desc')
});
