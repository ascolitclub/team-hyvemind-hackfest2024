import { LoginUserBody, RegisterUserBody } from '../interface/auth.interface';
declare class AuthService {
    static registerUser: (data: Partial<RegisterUserBody>) => Promise<boolean>;
    static loginUser: (data: Required<LoginUserBody>) => Promise<{
        accessToken: unknown;
        email: string;
        userId: number;
        username: string;
        phoneNumber: string;
    }>;
}
export default AuthService;
//# sourceMappingURL=auth.service.d.ts.map