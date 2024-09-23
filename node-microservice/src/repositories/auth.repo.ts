import User from '../mongo/models/User.model';
import { DatabaseException } from '../exceptions';
import { RegisterUserBody } from '../interface/auth.interface';

class AuthRepository {
  static async insertData(data: Partial<RegisterUserBody | any>) {
    try {
      const newUser = new User({
        username: data.username,
        password: data.password,
        email: data.email,
        phoneNumber: data.phoneNumber,
      });
      const datas = await newUser.save();
      return datas;
    } catch (err) {
      console.log(err);
      throw new DatabaseException(null, 'Error in inserting the database');
    }
  }
}

export default AuthRepository;
