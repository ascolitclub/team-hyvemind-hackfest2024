declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}
export declare const createAccessToken: (data: Required<any>) => Promise<unknown>;
export declare const verifyAccessToken: (token: string) => Promise<unknown>;
//# sourceMappingURL=jwt.utils.d.ts.map