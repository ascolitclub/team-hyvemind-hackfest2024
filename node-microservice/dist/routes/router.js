"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("./auth"));
const hostel_1 = __importDefault(require("./hostel"));
const serverRouter = (app) => {
    app.use('/api', [auth_1.default, hostel_1.default]);
};
exports.default = serverRouter;
//# sourceMappingURL=router.js.map