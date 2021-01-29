"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.dbUrl = void 0;
exports.dbUrl = process.env.DATABASE_URL ? process.env.DATABASE_URL : '';
exports.port = process.env.PORT ? process.env.PORT : '0000';
