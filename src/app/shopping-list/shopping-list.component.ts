import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
@Input() shoppingList: { itemName: string, itemAmount: string }[];
@Output('deleteItem') onDeleteItem = new EventEmitter<{ item: number }>();

constructor() {}

  ngOnInit(): void {
  }

  deleteItem() {
   this.onDeleteItem.emit();
  }
}
