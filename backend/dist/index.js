"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const middleware_1 = require("./middleware");
// Загружаем переменные окружения
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Логирование запросов (для отладки)
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
// Маршруты API
app.use('/', routes_1.default);
// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date() });
});
// Обработка 404 (не найденные маршруты)
app.use(middleware_1.notFoundHandler);
// Глобальный обработчик ошибок
app.use(middleware_1.errorHandler);
// Запуск сервера
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📚 Library API is ready!`);
    console.log(`\nAvailable endpoints:`);
    console.log(`  GET    /api/v1/books`);
    console.log(`  GET    /api/v1/books/:id`);
    console.log(`  POST   /api/v1/books`);
    console.log(`  PUT    /api/v1/books/:id`);
    console.log(`  DELETE /api/v1/books/:id`);
    console.log(`  GET    /api/v1/books/:id/reviews`);
    console.log(`  GET    /api/v1/books/:id/average-rating`);
    console.log(`  GET    /api/v1/reviews/:id`);
    console.log(`  POST   /api/v1/books/:bookId/reviews`);
    console.log(`  PUT    /api/v1/reviews/:id`);
    console.log(`  DELETE /api/v1/reviews/:id`);
});
