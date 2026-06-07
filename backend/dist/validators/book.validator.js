"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookQuerySchema = exports.updateBookSchema = exports.createBookSchema = void 0;
const zod_1 = require("zod");
// Схема для создания книги
exports.createBookSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Название обязательно').max(200, 'Слишком длинное название'),
    isbn: zod_1.z.string().regex(/^\d{10}|\d{13}$/, 'ISBN должен содержать 10 или 13 цифр'),
    publishedYear: zod_1.z.number()
        .min(1450, 'Год должен быть не ранее 1450')
        .max(new Date().getFullYear(), 'Год не может быть в будущем'),
    pageCount: zod_1.z.number().min(1, 'Количество страниц должно быть не менее 1').max(10000),
    language: zod_1.z.string().min(1, 'Язык обязателен'),
    description: zod_1.z.string().min(10, 'Описание слишком короткое').max(5000),
    coverImage: zod_1.z.string().url('Должен быть действительный URL').optional(),
    authorId: zod_1.z.string().min(1, 'ID автора обязателен'),
    publisherId: zod_1.z.string().min(1, 'ID издателя обязателен'),
    genreIds: zod_1.z.array(zod_1.z.string()).min(1, 'Необходимо указать хотя бы один жанр')
});
// Схема для обновления книги (все поля опциональны)
exports.updateBookSchema = exports.createBookSchema.partial();
// Схема для query параметров (фильтрация, сортировка, пагинация)
exports.bookQuerySchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    author: zod_1.z.string().optional(),
    genre: zod_1.z.string().optional(),
    language: zod_1.z.string().optional(),
    year: zod_1.z.string().regex(/^\d+$/, 'Год должен быть числом').optional(),
    publisher: zod_1.z.string().optional(),
    sortBy: zod_1.z.enum(['title', 'publishedYear']).optional(),
    order: zod_1.z.enum(['asc', 'desc']).optional().default('asc'),
    page: zod_1.z.string().regex(/^\d+$/, 'Страница должна быть числом').optional().default('1'),
    limit: zod_1.z.string().regex(/^\d+$/, 'Лимит должен быть числом').optional().default('10')
});
