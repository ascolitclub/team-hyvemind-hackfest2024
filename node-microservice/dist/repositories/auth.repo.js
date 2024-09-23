"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_model_1 = __importDefault(require("../mongo/models/User.model"));
const exceptions_1 = require("../exceptions");
class AuthRepository {
    static async insertData(data) {
        try {
            const newUser = new User_model_1.default({
                username: data.username,
                password: data.password,
                email: data.email,
                phoneNumber: data.phoneNumber,
            });
            const datas = await newUser.save();
            return datas;
        }
        catch (err) {
            console.log(err);
            throw new exceptions_1.DatabaseException(null, 'Error in inserting the database');
        }
    }
}
exports.default = AuthRepository;
//# sourceMappingURL=auth.repo.js.map