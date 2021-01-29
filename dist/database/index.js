"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = require("../config");
var logger_1 = __importDefault(require("../logger"));
exports.default = mongoose_1.default.connect(config_1.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function () {
    logger_1.default.info('Database connection successful');
})
    .catch(function (e) {
    logger_1.default.error("Exception connecting to database " + e);
});
