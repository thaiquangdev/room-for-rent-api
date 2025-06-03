import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { Response } from "express";

export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<any> {
        const httpResponse = context.switchToHttp().getResponse<Response>();
        return next.handle().pipe(
            map((data) => ({
                statusCode: httpResponse.statusCode,
                message: "Thành công",
                data
            }))
        );
    }
}