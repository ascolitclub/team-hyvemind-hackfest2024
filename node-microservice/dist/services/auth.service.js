"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("../exceptions");
const bcrypt_1 = __importDefault(require("bcrypt"));
const auth_repo_1 = __importDefault(require("../repositories/auth.repo"));
const jwt_utils_1 = require("../utils/jwt.utils");
const connect_1 = require("../mongo/connect");
class AuthService {
}
_a = AuthService;
AuthService.registerUser = async (data) => {
    console.log('This is the register user', data);
    const db = (0, connect_1.initializeMongoDbUser)();
    const checkData = Object.values(data).length === 0;
    if (checkData) {
        throw new exceptions_1.BadRequestException(null, 'Data Object Is Empty');
    }
    const existingDocument = await (await db).findOne({
        $and: [{ email: data.email }, { phoneNumber: data.phoneNumber }],
    });
    if (existingDocument) {
        throw new exceptions_1.BadRequestException(null, 'Phone Number or Email is Already Exists');
    }
    const genSalt = bcrypt_1.default.genSaltSync(10);
    const hashPassword = bcrypt_1.default.hashSync(data.password, genSalt);
    const dataToSaved = {
        username: data.username,
        email: data.email,
        password: hashPassword,
        phoneNumber: data.phoneNumber,
    };
    const savedData = await auth_repo_1.default.insertData(dataToSaved);
    return savedData;
};
AuthService.loginUser = async (data) => {
    const db = (0, connect_1.initializeMongoDbUser)();
    const checkUser = await (await db).findOne({
        username: data.username,
    });
    console.log(checkUser);
    if (!checkUser) {
        throw new exceptions_1.DatabaseException(null, `User name does not exists`);
    }
    const verifyPassword = bcrypt_1.default.compareSync(data.password, checkUser.password);
    if (typeof verifyPassword === 'boolean' && !verifyPassword) {
        throw new exceptions_1.DatabaseException(null, 'Password Does Not Match, Please Try Again');
    }
    const id = checkUser._id;
    const userData = {
        email: checkUser.email,
        userId: id,
        username: checkUser.username,
    };
    console.log('User data', userData);
    const accessToken = await (0, jwt_utils_1.createAccessToken)(userData);
    console.log(accessToken);
    return {
        accessToken,
        email: checkUser.email,
        userId: checkUser.id,
        username: checkUser.username,
        phoneNumber: checkUser.phoneNumber,
    };
};
exports.default = AuthService;
//# sourceMappingURL=auth.service.js.map