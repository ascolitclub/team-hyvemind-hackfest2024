import { RegisterUserBody } from '../interface/auth.interface';
declare class AuthRepository {
    static insertData(data: Partial<RegisterUserBody | any>): Promise<import("mongoose").Document<unknown, {}, {
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
}
export default AuthRepository;
//# sourceMappingURL=auth.repo.d.ts.map