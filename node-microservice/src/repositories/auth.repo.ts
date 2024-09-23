import { User } from '../database/entity/User.entity';
import { DatabaseException } from '../exceptions';
import { RegisterUserBody } from '../interface/auth.interface';

class AuthRepository {
  static async insertData(data: Partial<RegisterUserBody | any>) {
    try {
      console.log('database data', data);
      await User.createQueryBuilder()
        .insert()
        .into(User)
        .values([data])
        .execute();
      return true;
    } catch (err) {
      console.log(err);
      throw new DatabaseException(null, 'Error in inserting the database');
    }
  }
}

export default AuthRepository;
