"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const authRouter = express_1.default.Router();
authRouter
    // .post("/register", authController.register)
    .post("/login", controllers_1.authController.login);
exports.default = authRouter;
