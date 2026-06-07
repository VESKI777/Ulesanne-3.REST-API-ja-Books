"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_routes_1 = __importDefault(require("./book.routes"));
const review_routes_1 = __importDefault(require("./review.routes"));
const router = (0, express_1.Router)();
// Монтируем маршруты с префиксом /api/v1
router.use('/api/v1/books', book_routes_1.default);
router.use('/api/v1/reviews', review_routes_1.default);
exports.default = router;
