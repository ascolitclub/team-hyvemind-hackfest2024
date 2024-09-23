"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("../exceptions");
const User_entity_1 = require("../database/entity/User.entity");
const bcrypt_1 = __importDefault(require("bcrypt"));
const auth_repo_1 = __importDefault(require("../repositories/auth.repo"));
const jwt_utils_1 = require("../utils/jwt.utils");
class AuthService {
}
_a = AuthService;
AuthService.registerUser = async (data) => {
    console.log('This is the register user', data);
    const checkData = Object.values(data).length === 0;
    if (checkData) {
        throw new exceptions_1.BadRequestException(null, 'Data Object Is Empty');
    }
    const checkUniquqValue = await User_entity_1.User.find({
        where: {
            email: data.email,
            username: data.username,
        },
    });
    const existsingUser = checkUniquqValue.filter((item) => item.email === data.email && item.username === data.username);
    const checkPhoneNumber = checkUniquqValue.find((item) => item.phoneNumber === data.phoneNumber);
    if (checkUniquqValue && existsingUser.length > 0) {
        throw new exceptions_1.BadRequestException(null, 'Username or Email already Exists');
    }
    if (checkPhoneNumber) {
        throw new exceptions_1.BadRequestException(null, 'Phone Number Already Exists');
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
    const checkUser = await User_entity_1.User.findOne({
        where: {
            username: data.username,
        },
    });
    if (!checkUser) {
        throw new exceptions_1.DatabaseException(null, `User name does not exists`);
    }
    const verifyPassword = bcrypt_1.default.compareSync(data.password, checkUser.password);
    if (typeof verifyPassword === 'boolean' && !verifyPassword) {
        throw new exceptions_1.DatabaseException(null, 'Password Does Not Match, Please Try Again');
    }
    const hasId = checkUser.hasId() ? checkUser.id : null;
    const userData = {
        email: checkUser.email,
        userId: hasId,
        username: checkUser.username,
    };
    const accessToken = await (0, jwt_utils_1.createAccessToken)(userData);
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