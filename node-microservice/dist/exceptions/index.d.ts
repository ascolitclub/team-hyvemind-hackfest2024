export declare class HttpException extends Error {
    statusCode: number;
    constructor(statusCode: number, message: string);
    getStatusCode(): number;
    getMessage(): string;
}
export declare class UnAuthorizedException extends HttpException {
    constructor(statusCode: number | null, message: string);
}
export declare class NotFoundException extends HttpException {
    constructor(statusCode: number | null, message: string);
}
export declare class BadRequestException extends HttpException {
    constructor(statusCode: number | null, message: string);
}
export declare class RabbitMqExceptions extends HttpException {
    constructor(statusCode: number | null, message: string);
}
export declare class DatabaseException extends HttpException {
    constructor(statusCode: number | null, message: string);
}
export declare class JsonWebTokenErrorException extends HttpException {
    constructor(statusCode: number | null, message: string);
}
//# sourceMappingURL=index.d.ts.map