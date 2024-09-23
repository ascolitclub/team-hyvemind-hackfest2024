import { BaseEntity } from 'typeorm';
import { HostelCredential } from './Hostel.entity';
export declare enum RolesConstant {
    USER = "user",
    HOSTEL_OWNER = "hostel_owner",
    ADMIN = "admin"
}
export declare enum StatusConstant {
    PENDING = "pending",
    NOT_APPLY = "not_apply",
    APPROVED = "approved"
}
export declare class User extends BaseEntity {
    id: number;
    username: string;
    password: string;
    email: string;
    phoneNumber: string;
    role: string;
    status: string;
    hostel: HostelCredential;
    created_at: Date;
    updated_at: Date;
}
//# sourceMappingURL=User.entity.d.ts.map