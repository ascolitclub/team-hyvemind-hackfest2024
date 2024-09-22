import { BadRequestException, DatabaseException } from '../exceptions';
import { LoginUserBody, RegisterUserBody } from '../interface/auth.interface';
import { User } from '../database/entity/User.entity';
import bcrypt from 'bcrypt';
import AuthRepository from '../repositories/auth.repo';
import { createAccessToken } from '../utils/jwt.utils';
import { Check } from 'typeorm';

class AuthService {
  static registerUser = async (data: Partial<RegisterUserBody>) => {
    const checkData = Object.values(data).length === 0;
    if (checkData) {
      throw new BadRequestException(null, 'Data Object Is Empty');
    }

    const checkUniquqValue = await User.find({
      where: {
        email: data.email,
        username: data.username,
      },
    });

    const existsingUser = checkUniquqValue.filter(
      (item) => item.email === data.email && item.username === data.username
    );

    const checkPhoneNumber = checkUniquqValue.find(
      (item) => item.phoneNumber === data.phoneNumber
    );

    if (checkUniquqValue && existsingUser.length > 0) {
      throw new BadRequestException(null, 'Username or Email already Exists');
    }

    if (checkPhoneNumber) {
      throw new BadRequestException(null, 'Phone Number Already Exists');
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
      where: {
        username: data.username,
      },
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
    const hasId = checkUser.hasId() ? checkUser.id : null;
    const userData = {
      email: checkUser.email,
      userId: hasId as number,
      username: checkUser.username,
    };
    const accessToken = await createAccessToken(userData);
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
