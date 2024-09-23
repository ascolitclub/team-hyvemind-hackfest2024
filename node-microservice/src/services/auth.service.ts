import { BadRequestException, DatabaseException } from '../exceptions';
import { LoginUserBody, RegisterUserBody } from '../interface/auth.interface';
import User from '../mongo/models/User.model';
import bcrypt from 'bcrypt';
import AuthRepository from '../repositories/auth.repo';
import { createAccessToken } from '../utils/jwt.utils';
import { Check } from 'typeorm';

class AuthService {
  static registerUser = async (data: Partial<RegisterUserBody>) => {
    console.log('This is the register user', data);
    const checkData = Object.values(data).length === 0;
    if (checkData) {
      throw new BadRequestException(null, 'Data Object Is Empty');
    }

    const existingDocument = await User.findOne({
      $and: [
        {
          username: data.username,
        },
        {
          phoneNumber: data.phoneNumber,
        },
      ],
    });

    if (existingDocument) {
      throw new BadRequestException(
        null,
        'Phone Number or Email is Already Exists'
      );
    }

    const genSalt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(data.password as string, genSalt);

    const dataToSaved = {
      username: data.username,
      email: data.email,
      password: hashPassword,
      phoneNumber: data.phoneNumber,
    };

    const savedData = await AuthRepository.insertData(dataToSaved);
    return savedData;
  };

  static loginUser = async (data: Required<LoginUserBody>) => {
    const checkUser = await User.findOne({
      email: data.email,
    });

    if (!checkUser) {
      throw new DatabaseException(null, `User name does not exists`);
    }

    const verifyPassword = bcrypt.compareSync(
      data.password,
      checkUser.password
    );

    if (typeof verifyPassword === 'boolean' && !verifyPassword) {
      throw new DatabaseException(
        null,
        'Password Does Not Match, Please Try Again'
      );
    }
    const id = checkUser._id;
    const userData = {
      email: checkUser.email,
      userId: id,
      username: checkUser.username,
    };

    console.log('User data', userData);
    const accessToken = await createAccessToken(userData);
    console.log(accessToken);
    return {
      accessToken,
      email: checkUser.email,
      userId: checkUser.id,
      username: checkUser.username,
      phoneNumber: checkUser.phoneNumber,
    };
  };
}

export default AuthService;
