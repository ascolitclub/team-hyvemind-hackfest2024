"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("../exceptions");
const connect_1 = require("../mongo/connect");
class AuthRepository {
    static async insertData(data) {
        try {
            const db = (0, connect_1.initializeMongoDbUser)();
            (await db).insertOne(data);
            return true;
        }
        catch (err) {
            console.log(err);
            throw new exceptions_1.DatabaseException(null, 'Error in inserting the database');
        }
    }
}
exports.default = AuthRepository;
//# sourceMappingURL=auth.repo.js.map