"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAuthorSchema = exports.createAuthorSchema = void 0;
const zod_1 = require("zod");
exports.createAuthorSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1).max(100),
    lastName: zod_1.z.string().min(1).max(100),
    birthYear: zod_1.z.number().min(500).max(new Date().getFullYear()),
    nationality: zod_1.z.string().min(1),
    biography: zod_1.z.string().max(5000).optional()
});
exports.updateAuthorSchema = exports.createAuthorSchema.partial();
