"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
class AuthController {
    static setCookie(res, user) {
        const authToken = AuthController.getToken(user);
        res.cookie("authToken", authToken, {
            maxAge: 1000 * 60 * 24,
        });
    }
    static getToken(user) {
        var _a;
        const jwtSecret = (_a = process.env.JWT_SECRET) !== null && _a !== void 0 ? _a : "";
        if (!jwtSecret) {
            throw new Error("jwt secret is not defined");
        }
        return jsonwebtoken_1.default.sign({
            userId: user._id,
        }, jwtSecret, {
            expiresIn: "1d",
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                if (!email || !password) {
                    res.status(401).send({
                        error: "Email or password are incorrect",
                    });
                    return;
                }
                const user = yield user_model_1.UserModel.findOne({ email });
                if (!user) {
                    res.status(401).send({
                        error: "email or password are incorrect",
                    });
                    return;
                }
                const isCorrectPassword = bcrypt_1.default.compareSync(password, user.password);
                if (!isCorrectPassword) {
                    res.status(401).send({
                        error: "email or password are incorrect",
                    });
                    return;
                }
                const authToken = AuthController.getToken(user);
                user.password = "";
                res.status(200).send({ authToken, user });
            }
            catch (error) {
                console.log(error);
                res.status(500).send({ error: error === null || error === void 0 ? void 0 : error.message });
            }
        });
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, email, password } = req.body;
                if (!username || !email || !password) {
                    res.status(400).send({
                        error: "missing properties",
                    });
                    return;
                }
                const salt = bcrypt_1.default.genSaltSync(10);
                const hashPassword = bcrypt_1.default.hashSync(password, salt);
                const user = yield user_model_1.UserModel.create({
                    email,
                    password: hashPassword,
                    username,
                });
                const authToken = AuthController.getToken(user);
                user.password = "";
                res.status(201).send({ authToken, user });
            }
            catch (error) {
                console.log(error);
                res.status(500).send({ error: error === null || error === void 0 ? void 0 : error.message });
            }
        });
    }
}
exports.AuthController = AuthController;
