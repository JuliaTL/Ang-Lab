import { Component, ViewChild } from '@angular/core';
import { LoggingService } from "../services/logging.service";
import { ShoppingService } from "../services/shopping.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-create-shopping-item',
  templateUrl: './create-shopping-item.component.html',
  styleUrls: ['./create-shopping-item.component.scss'],
  providers: [LoggingService]
})
export class CreateShoppingItemComponent {
  @ViewChild('itemNameInput') itemNameInput;
  @ViewChild('itemAmountInput') itemAmountInput;

  constructor(private loggingService: LoggingService, private shoppingService: ShoppingService, public router: Router,
              private route: ActivatedRoute) { }

  createItem(itemNameInput, itemAmountInput) {
    this.shoppingService.addItem({itemName: itemNameInput.value,
        itemAmount: itemAmountInput.value});
    this.router.navigate(['../view-shopping-list'], {relativeTo: this.route});
  }
}
