"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookQuerySchema = exports.updateBookSchema = exports.createBookSchema = void 0;
const zod_1 = require("zod");
// Схема для создания книги
exports.createBookSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Title is required').max(200, 'Title too long'),
    isbn: zod_1.z.string().regex(/^\d{10}|\d{13}$/, 'ISBN must be 10 or 13 digits'),
    publishedYear: zod_1.z.number()
        .min(1450, 'Year must be at least 1450')
        .max(new Date().getFullYear(), 'Year cannot be in the future'),
    pageCount: zod_1.z.number().min(1, 'Page count must be at least 1').max(10000),
    language: zod_1.z.string().min(1, 'Language is required'),
    description: zod_1.z.string().min(10, 'Description too short').max(5000),
    coverImage: zod_1.z.string().url('Must be a valid URL').optional(),
    authorId: zod_1.z.string().min(1, 'Author ID is required'),
    publisherId: zod_1.z.string().min(1, 'Publisher ID is required'),
    genreIds: zod_1.z.array(zod_1.z.string()).min(1, 'At least one genre is required')
});
// Схема для обновления книги (все поля опциональны)
exports.updateBookSchema = exports.createBookSchema.partial();
// Схема для query параметров (фильтрация, сортировка, пагинация)
exports.bookQuerySchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    author: zod_1.z.string().optional(),
    genre: zod_1.z.string().optional(),
    language: zod_1.z.string().optional(),
    year: zod_1.z.string().regex(/^\d+$/, 'Year must be a number').optional(),
    publisher: zod_1.z.string().optional(),
    sortBy: zod_1.z.enum(['title', 'publishedYear']).optional(),
    order: zod_1.z.enum(['asc', 'desc']).optional().default('asc'),
    page: zod_1.z.string().regex(/^\d+$/, 'Page must be a number').optional().default('1'),
    limit: zod_1.z.string().regex(/^\d+$/, 'Limit must be a number').optional().default('10')
});
