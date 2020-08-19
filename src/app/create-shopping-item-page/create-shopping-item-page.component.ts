import { Component, ViewChild } from '@angular/core';
import { ShoppingService } from '../shopping-list-page/shopping.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-shopping-item-page',
  templateUrl: './create-shopping-item-page.component.html',
  styleUrls: ['./create-shopping-item-page.component.scss']
})
export class CreateShoppingItemPageComponent {
  @ViewChild('itemNameInput') itemNameInput;
  @ViewChild('itemAmountInput') itemAmountInput;

  constructor(private shoppingService: ShoppingService,
              public router: Router,
              private route: ActivatedRoute) { }

  createItem(itemNameInput, itemAmountInput) {
    this.shoppingService.addItem({itemName: itemNameInput.value,
      itemAmount: itemAmountInput.value});
    this.router.navigate(['../view-shopping-list'], {relativeTo: this.route});
  }

}
