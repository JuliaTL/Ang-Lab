import {HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {switchMap, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }
  intercept(req: HttpRequest<any>,
            next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      switchMap(user => {
        if(!user) {
          return next.handle(req);
        }
        const newReq = req.clone({
          params: new HttpParams().set('auth', user.token)
        });
        return next.handle(newReq);
      }));
  }
}
