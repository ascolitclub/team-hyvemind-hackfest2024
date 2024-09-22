"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHotels = void 0;
const axios_1 = __importDefault(require("axios"));
const GOOGLE_MAPS_API_KEY = 'AIzaSyChRHG8gb0TwMq2YOdf_djXNkDxtokdAJI';
const getHotels = async (lat, lng, radius) => {
    try {
        const response = await axios_1.default.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
            params: {
                location: `${lat},${lng}`,
                radius: radius,
                type: 'lodging',
                keyword: 'hostel',
                key: GOOGLE_MAPS_API_KEY,
            },
        });
        return response.data.result;
    }
    catch (err) {
        throw new Error('Google Map Error');
    }
};
exports.getHotels = getHotels;
//# sourceMappingURL=map.js.map