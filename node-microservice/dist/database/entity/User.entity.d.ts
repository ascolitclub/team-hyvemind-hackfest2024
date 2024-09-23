import { BaseEntity } from 'typeorm';
export declare enum RolesConstant {
    USER = "user",
    HOSTEL_OWNER = "hostel_owner",
    ADMIN = "admin"
}
export declare class User extends BaseEntity {
    id: number;
    username: string;
    password: string;
    email: string;
    phoneNumber: string;
    role: string;
    created_at: Date;
    updated_at: Date;
}
//# sourceMappingURL=User.entity.d.ts.map