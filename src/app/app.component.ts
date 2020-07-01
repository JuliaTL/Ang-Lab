import { Component } from '@angular/core';
import { ShoppingService } from "./services/shopping.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ShoppingService]
})
export class AppComponent {
  title = 'hometask #6';
  shoppingList:  { itemName: string, itemAmount: string }[] = [];

  constructor(private shoppingService: ShoppingService) {
    this.shoppingList = this.shoppingService.shoppingList;
  }
}
