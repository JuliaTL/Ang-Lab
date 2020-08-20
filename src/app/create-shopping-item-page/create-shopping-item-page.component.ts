import { Component } from '@angular/core';
import { ShoppingService } from '../shopping-list-page/shopping.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IShopItem } from "../shopping-list-page/shopItem.model";

@Component({
  selector: 'app-create-shopping-item-page',
  templateUrl: './create-shopping-item-page.component.html',
  styleUrls: ['./create-shopping-item-page.component.scss']
})
export class CreateShoppingItemPageComponent {

  constructor(private shoppingService: ShoppingService,
              public router: Router,
              private route: ActivatedRoute) { }

  onCreateShopItem(itemData: IShopItem) {
    this.shoppingService.addItem(itemData);
    this.shoppingService.getShoppingItems();
    this.router.navigate(['../shopping-list'], {relativeTo: this.route});
  }
}
