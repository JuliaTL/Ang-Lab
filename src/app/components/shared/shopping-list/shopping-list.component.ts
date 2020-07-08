import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
@Input() shoppingList: { itemName: string, itemAmount: string }[];

constructor() {}
}
