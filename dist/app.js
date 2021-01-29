"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
// configurationa
dotenv_1.default.config();
var config_1 = require("./config");
var logger_1 = __importDefault(require("./logger"));
require("./database");
var app = express_1.default();
// routes
// middleware
app.use(helmet_1.default());
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.listen(config_1.port, function () {
    logger_1.default.info("Server Start Up On Port " + config_1.port + " ");
});
