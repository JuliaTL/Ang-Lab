import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()

export class PostsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('hello from interceptor');
    const newRequest = req.clone({
      headers: req.headers.append('post', 'withToken')
    });
    return next.handle(newRequest);
  }

}
