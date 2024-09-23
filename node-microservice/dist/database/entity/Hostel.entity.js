"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostelCredential = void 0;
const typeorm_1 = require("typeorm");
const HotelLocation_1 = require("./HotelLocation");
const User_entity_1 = require("./User.entity");
let HostelCredential = class HostelCredential extends typeorm_1.BaseEntity {
};
exports.HostelCredential = HostelCredential;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], HostelCredential.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HostelCredential.prototype, "hostel_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unique: true, default: 0 }),
    __metadata("design:type", Number)
], HostelCredential.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'number', default: 0 }),
    __metadata("design:type", Number)
], HostelCredential.prototype, "user_ratings_total", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'string' }),
    __metadata("design:type", Number)
], HostelCredential.prototype, "hostel_phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], HostelCredential.prototype, "opening_hours", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => HotelLocation_1.HostelLocation),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", HotelLocation_1.HostelLocation)
], HostelCredential.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => User_entity_1.User, (user) => user.hostel),
    __metadata("design:type", User_entity_1.User)
], HostelCredential.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], HostelCredential.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], HostelCredential.prototype, "updated_at", void 0);
exports.HostelCredential = HostelCredential = __decorate([
    (0, typeorm_1.Entity)()
], HostelCredential);
//# sourceMappingURL=Hostel.entity.js.map