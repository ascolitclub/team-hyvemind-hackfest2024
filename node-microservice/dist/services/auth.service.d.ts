import { LoginUserBody, RegisterUserBody } from '../interface/auth.interface';
declare class AuthService {
    static registerUser: (data: Partial<RegisterUserBody>) => Promise<boolean>;
    static loginUser: (data: Required<LoginUserBody>) => Promise<{
        accessToken: unknown;
        email: any;
        userId: any;
        username: any;
        phoneNumber: any;
    }>;
}
export default AuthService;
//# sourceMappingURL=auth.service.d.ts.map