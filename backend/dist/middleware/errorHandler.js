"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = exports.errorHandler = exports.AppError = void 0;
const zod_1 = require("zod");
class AppError extends Error {
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.AppError = AppError;
const errorHandler = (err, req, res, next) => {
    // Ошибки валидации Zod
    if (err instanceof zod_1.ZodError) {
        return res.status(400).json({
            error: 'Ошибка валидации',
            details: err.issues.map(e => ({
                field: e.path.join('.'),
                message: e.message
            }))
        });
    }
    // Наши кастомные ошибки
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            error: err.message
        });
    }
    // Непредвиденные ошибки
    console.error('Непредвиденная ошибка:', err);
    return res.status(500).json({
        error: 'Внутренняя ошибка сервера'
    });
};
exports.errorHandler = errorHandler;
// Middleware для обработки 404
const notFoundHandler = (req, res) => {
    res.status(404).json({
        error: `Маршрут ${req.method} ${req.url} не найден`
    });
};
exports.notFoundHandler = notFoundHandler;
