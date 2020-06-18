import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
@Input() shoppingList: { itemName: string, itemAmount: string }[];
@Output('deleteItem') onDeleteItem = new EventEmitter<{ item: number }>();
@Output('duplicateItem') onDuplicateItem = new EventEmitter<{ itemName: string, itemAmount: string }>();

constructor() {}

  ngOnInit(): void {
  }

  duplicateItem(itemName, itemAmount ) {
  this.onDuplicateItem.emit( {
    itemName,
    itemAmount
  });
  }
  deleteItem(item) {
   this.onDeleteItem.emit({
     item
   });
  }
}
