"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAuthenticated = void 0;
const jwt_utils_1 = require("../utils/jwt.utils");
const verifyAuthenticated = async (req, res, next) => {
    const token = req.headers['authorization'] ?? req.headers.authorization;
    if (!token || token.length === 0) {
        return res.status(403).json({
            message: 'User is not authenticated, Please Try Again',
        });
    }
    const authToken = token.startsWith('B') ? token.split(' ')[1] : token;
    const decodedPayload = await (0, jwt_utils_1.verifyAccessToken)(authToken);
    const checkDecodedToken = Object.entries(decodedPayload).length > 0;
    if (checkDecodedToken) {
        req.user = decodedPayload;
        next();
    }
    else {
        return res.status(403).json({
            message: 'Access Token is not valid and does not match',
        });
    }
};
exports.verifyAuthenticated = verifyAuthenticated;
//# sourceMappingURL=auth.middleware.js.map