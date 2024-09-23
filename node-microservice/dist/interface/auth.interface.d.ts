import { RolesConstant } from '../database/entity/User.entity';
export interface RegisterUserBody {
    email: string;
    username: string;
    password: string;
    phoneNumber: string;
    role: RolesConstant;
}
export interface LoginUserBody {
    username: string;
    password: string;
}
export interface userPayload {
    username: string;
    email: string;
    userId: number;
}
//# sourceMappingURL=auth.interface.d.ts.map