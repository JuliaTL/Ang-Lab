import { Component } from '@angular/core';
import { ShoppingService } from "./services/shopping.service";
import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ShoppingService]
})
export class AppComponent {
  title = 'hometask #6';
  shoppingList:  { itemName: string, itemAmount: string }[] = [];
  isLoggedIn;

  constructor(private shoppingService: ShoppingService,
              private authService: AuthService) {
    this.shoppingList = this.shoppingService.shoppingList;
    this.isLoggedIn = authService.isLogged();
  }

  onLogin() {
    this.authService.login();
    this.isLoggedIn = true;
  }
  onLogout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
