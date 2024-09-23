"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const db_config_1 = require("../config/db.config");
const DatabaseDataSource = new typeorm_1.DataSource((0, db_config_1.getdbConfig)());
exports.default = DatabaseDataSource;
//# sourceMappingURL=connect.js.map