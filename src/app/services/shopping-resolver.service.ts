import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {ShoppingService} from "./shopping.service";

@Injectable({
  providedIn: "root"
})
export class ShoppingResolverService implements Resolve<any> {

  constructor(private shoppingService: ShoppingService) {
  }
  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot) {
    this.shoppingService.getItem(+route.params['id']);
  }
}
