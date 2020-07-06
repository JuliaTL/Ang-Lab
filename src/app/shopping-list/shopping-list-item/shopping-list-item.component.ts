import { Component, Input, ViewChild } from '@angular/core';
import { ShoppingService } from "../../services/shopping.service";

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss']
})
export class ShoppingListItemComponent {
@Input() item: { itemName: string, itemAmount: string };
@Input() id: number;
@Input() itemName: string;
@Input() itemAmount: string;
@ViewChild('editedItemNameInput') editedItemNameInput;
editItemName: boolean = false;

  constructor(public shoppingService: ShoppingService) {
  }

  onDelete() {
    this.shoppingService.deleteItem(this.id, this.item);
  }

  onChange() {
    this.shoppingService.changeItem(this.id, this.editedItemNameInput.nativeElement.value);
    this.editItemName = false;
  }

  onDuplicate() {
    this.shoppingService.duplicateItem(this.item);
  }
}
