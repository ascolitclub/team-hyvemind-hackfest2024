import { RegisterUserBody } from '../interface/auth.interface';
declare class AuthRepository {
    static insertData(data: Partial<RegisterUserBody | any>): Promise<boolean>;
}
export default AuthRepository;
//# sourceMappingURL=auth.repo.d.ts.map