"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth.controller");
const authRouter = (0, express_1.Router)();
authRouter.post('/user/register', auth_controller_1.registerUser);
authRouter.post('/user/login', auth_controller_1.loginUser);
exports.default = authRouter;
//# sourceMappingURL=auth.js.map