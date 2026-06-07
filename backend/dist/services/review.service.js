"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const uuid_1 = require("uuid");
const reviews_1 = require("../data/reviews");
class ReviewService {
    // Получить отзывы книги с фильтрацией
    static getBookReviews(bookId, query) {
        let filteredReviews = reviews_1.reviews.filter(r => r.bookId === bookId);
        // Фильтрация по рейтингу (исправлено)
        if (query.rating && query.rating !== '') {
            const ratingNum = parseInt(query.rating, 10);
            filteredReviews = filteredReviews.filter(r => r.rating === ratingNum);
        }
        // Сортировка
        if (query.sortBy === 'createdAt') {
            filteredReviews.sort((a, b) => {
                const comparison = a.createdAt.getTime() - b.createdAt.getTime();
                return query.order === 'asc' ? comparison : -comparison;
            });
        }
        return {
            data: filteredReviews,
            total: filteredReviews.length
        };
    }
    // Получить отзыв по ID
    static getReviewById(id) {
        return reviews_1.reviews.find(r => r.id === id) || null;
    }
    // Создать новый отзыв
    static createReview(bookId, data) {
        const newReview = {
            id: (0, uuid_1.v4)(),
            bookId,
            userName: data.userName,
            rating: data.rating,
            comment: data.comment,
            createdAt: new Date()
        };
        reviews_1.reviews.push(newReview);
        return newReview;
    }
    // Обновить отзыв
    static updateReview(id, data) {
        const reviewIndex = reviews_1.reviews.findIndex(r => r.id === id);
        if (reviewIndex === -1)
            return null;
        const updatedReview = {
            ...reviews_1.reviews[reviewIndex],
            userName: data.userName ?? reviews_1.reviews[reviewIndex].userName,
            rating: data.rating ?? reviews_1.reviews[reviewIndex].rating,
            comment: data.comment ?? reviews_1.reviews[reviewIndex].comment
        };
        reviews_1.reviews[reviewIndex] = updatedReview;
        return updatedReview;
    }
    // Удалить отзыв
    static deleteReview(id) {
        const reviewIndex = reviews_1.reviews.findIndex(r => r.id === id);
        if (reviewIndex === -1)
            return false;
        reviews_1.reviews.splice(reviewIndex, 1);
        return true;
    }
}
exports.ReviewService = ReviewService;
