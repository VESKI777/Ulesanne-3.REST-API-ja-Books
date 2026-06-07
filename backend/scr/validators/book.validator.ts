import { z } from 'zod';

// Схема для создания книги
export const createBookSchema = z.object({
  title: z.string().min(1, 'Название обязательно').max(200, 'Слишком длинное название'),
  isbn: z.string().regex(/^\d{10}|\d{13}$/, 'ISBN должен содержать 10 или 13 цифр'),
  publishedYear: z.number()
    .min(1450, 'Год должен быть не ранее 1450')
    .max(new Date().getFullYear(), 'Год не может быть в будущем'),
  pageCount: z.number().min(1, 'Количество страниц должно быть не менее 1').max(10000),
  language: z.string().min(1, 'Язык обязателен'),
  description: z.string().min(10, 'Описание слишком короткое').max(5000),
  coverImage: z.string().url('Должен быть действительный URL').optional(),
  authorId: z.string().min(1, 'ID автора обязателен'),
  publisherId: z.string().min(1, 'ID издателя обязателен'),
  genreIds: z.array(z.string()).min(1, 'Необходимо указать хотя бы один жанр')
});

// Схема для обновления книги (все поля опциональны)
export const updateBookSchema = createBookSchema.partial();

// Схема для query параметров (фильтрация, сортировка, пагинация)
export const bookQuerySchema = z.object({
  title: z.string().optional(),
  author: z.string().optional(),
  genre: z.string().optional(),
  language: z.string().optional(),
  year: z.string().regex(/^\d+$/, 'Год должен быть числом').optional(),
  publisher: z.string().optional(),
  sortBy: z.enum(['title', 'publishedYear']).optional(),
  order: z.enum(['asc', 'desc']).optional().default('asc'),
  page: z.string().regex(/^\d+$/, 'Страница должна быть числом').optional().default('1'),
  limit: z.string().regex(/^\d+$/, 'Лимит должен быть числом').optional().default('10')
});

export type CreateBookInput = z.infer<typeof createBookSchema>;
export type UpdateBookInput = z.infer<typeof updateBookSchema>;
export type BookQueryInput = z.infer<typeof bookQuerySchema>;