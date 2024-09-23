"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccessToken = exports.createAccessToken = void 0;
const jsonwebtoken_1 = __importStar(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const exceptions_1 = require("../exceptions");
dotenv_1.default.config();
const createAccessToken = async (data) => {
    return new Promise((resolve, reject) => {
        const payload = {
            username: data.username,
            email: data.email,
            userId: data.userId,
            payload_created_at: new Date(),
        };
        const options = {
            issuer: 'hyvemind',
            expiresIn: '365d',
        };
        jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY, options, (err, token) => {
            if (err) {
                if (err instanceof jsonwebtoken_1.JsonWebTokenError) {
                    throw new exceptions_1.JsonWebTokenErrorException(null, err.message);
                }
                throw new exceptions_1.BadRequestException(null, 'Bad Gateway Exception');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.createAccessToken = createAccessToken;
const verifyAccessToken = (token) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (err, payload) => {
            if (err) {
                if (err instanceof jsonwebtoken_1.JsonWebTokenError) {
                    throw new exceptions_1.JsonWebTokenErrorException(null, err.message);
                }
                throw new exceptions_1.BadRequestException(null, 'Bad Gateway Exception');
            }
            else {
                resolve(payload);
            }
        });
    });
};
exports.verifyAccessToken = verifyAccessToken;
//# sourceMappingURL=jwt.utils.js.map