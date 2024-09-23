import { BaseEntity } from 'typeorm';
export declare class HostelCredential extends BaseEntity {
    id: Number;
    hostel_name: String;
    rating: Number;
    user_ratings_total: Number;
    hostel_phoneNumber: Number;
    opening_hours: Boolean;
    lat: Number;
    lng: Number;
    address: String;
    photos: String;
    place_id: String;
    created_at: Date;
    updated_at: Date;
}
//# sourceMappingURL=Hostel.entity.d.ts.map