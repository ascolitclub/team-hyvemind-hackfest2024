import { BaseEntity } from 'typeorm';
import { HostelLocation } from './HotelLocation';
import { User } from './User.entity';
export declare class HostelCredential extends BaseEntity {
    id: number;
    hostel_name: string;
    rating: number;
    user_ratings_total: number;
    hostel_phoneNumber: number;
    opening_hours: boolean;
    location: HostelLocation;
    user: User;
    created_at: Date;
    updated_at: Date;
}
//# sourceMappingURL=Hostel.entity.d.ts.map