import { userPayload } from '../interface/auth.interface';
declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}
export declare const createAccessToken: (data: Required<userPayload>) => Promise<unknown>;
export declare const verifyAccessToken: (token: string) => Promise<unknown>;
//# sourceMappingURL=jwt.utils.d.ts.map