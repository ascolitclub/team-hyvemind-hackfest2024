"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const auth_service_1 = __importDefault(require("../services/auth.service"));
const registerUser = async (req, res, next) => {
    try {
        const { email, username, password, phoneNumber, } = req.body;
        console.log(email, username);
        const userCredential = {
            email,
            username,
            password,
            phoneNumber,
        };
        const response = await auth_service_1.default.registerUser(userCredential);
        return res.status(201).json({
            message: 'Register Successfully',
            response,
        });
    }
    catch (err) {
        next(err);
    }
};
exports.registerUser = registerUser;
const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const userCredential = {
            email,
            password,
        };
        const response = await auth_service_1.default.loginUser(userCredential);
        return res.status(201).json({
            message: `User Logged In SuccessFully`,
            data: response,
        });
    }
    catch (err) {
        next(err);
    }
};
exports.loginUser = loginUser;
//# sourceMappingURL=auth.controller.js.map