import {Injectable} from "@angular/core";
import {ICanComponentDeactivate} from "../utils/auth.interface";
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<ICanComponentDeactivate> {
    canDeactivate(component: ICanComponentDeactivate,
                  currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot,
                  nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return component.canDeactivate();
    }
}
