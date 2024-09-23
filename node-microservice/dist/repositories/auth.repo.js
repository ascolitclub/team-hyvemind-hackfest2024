"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_entity_1 = require("../database/entity/User.entity");
const exceptions_1 = require("../exceptions");
class AuthRepository {
    static async insertData(data) {
        try {
            console.log('database data', data);
            await User_entity_1.User.createQueryBuilder()
                .insert()
                .into(User_entity_1.User)
                .values([data])
                .execute();
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