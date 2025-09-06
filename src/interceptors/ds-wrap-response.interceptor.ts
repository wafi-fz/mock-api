import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @Sangbyte
 * 
 * Interceptor that wraps the response in a standard format.
 * This is specifically for DS Service related responses.
 */

@Injectable()
export default class DsWrapResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((...args) => {
        const response = context.switchToHttp().getResponse();
        const data = args[0];
        const result: any = {
          status: data?.status,
          message: data?.message,
          data: data?.data,
        };

        // Include any additional fields that are not date, status, or metadata
        if (typeof data === 'object' && data !== null) {
          Object.keys(data).forEach((key) => {
            if (!['entries', 'status', 'metadata'].includes(key)) {
              result[key] = data[key];
            }
          });
        }

        return result;
      }),
    );
  }
}
