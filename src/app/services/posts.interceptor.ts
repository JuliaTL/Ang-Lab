import {Injectable} from "@angular/core";
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable()

export class PostsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('hello from interceptor');
    const newRequest = req.clone({
      headers: req.headers.append('post', 'withToken')
    });
    return next.handle(newRequest).pipe(tap(event => {
        if(event.type === HttpEventType.Response) {
          console.log('Response came');
        }
      }
    ));
  }

}
