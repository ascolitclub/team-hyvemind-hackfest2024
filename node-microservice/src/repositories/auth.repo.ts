import { User } from '../database/entity/User.entity';
import { DatabaseException } from '../exceptions';
import { RegisterUserBody } from '../interface/auth.interface';
import { initializeMongoDbUser } from '../mongo/connect';

class AuthRepository {
  static async insertData(data: Partial<RegisterUserBody | any>) {
    try {
      const db = initializeMongoDbUser();
      (await db).insertOne(data);
      return true;
    } catch (err) {
      console.log(err);
      throw new DatabaseException(null, 'Error in inserting the database');
    }
  }
}

export default AuthRepository;
