import { LoginUserBody, RegisterUserBody } from '../interface/auth.interface';
declare class AuthService {
    static registerUser: (data: Partial<RegisterUserBody>) => Promise<import("mongoose").Document<unknown, {}, {
        username: string;
        password: string;
        email: string;
        phoneNumber: string;
        user_status: "pending" | "not_apply" | "approved";
        user_hostel?: import("mongoose").Types.ObjectId | null | undefined;
    }> & {
        username: string;
        password: string;
        email: string;
        phoneNumber: string;
        user_status: "pending" | "not_apply" | "approved";
        user_hostel?: import("mongoose").Types.ObjectId | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    static loginUser: (data: Required<LoginUserBody>) => Promise<{
        accessToken: unknown;
        email: string;
        userId: any;
        username: string;
        phoneNumber: string;
    }>;
}
export default AuthService;
//# sourceMappingURL=auth.service.d.ts.map