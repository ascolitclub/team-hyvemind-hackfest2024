"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getdbConfig = getdbConfig;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
function getdbConfig() {
    return {
        type: 'mysql',
        host: 'localhost', // Use the service name defined in docker-compose
        port: 3306, // MySQL default port
        username: 'root',
        password: 'r0bonepal77@',
        database: 'hackathon',
        migrationsTableName: 'migrations',
        synchronize: false,
        logging: false,
        migrations: [path_1.default.resolve(__dirname, '../database/migrations/*.{ts,js}')],
        entities: [path_1.default.resolve(__dirname, '../database/entity/*.{ts,js}')],
    };
}
//# sourceMappingURL=db.config.js.map