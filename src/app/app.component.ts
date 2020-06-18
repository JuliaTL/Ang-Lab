import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hometask #4';
  shoppingList:  { itemName: string, itemAmount: string }[] = [ { itemName: 'cheese', itemAmount: '200gr' }];

  onCreateItem(newItem: {itemName: string; itemAmount: string}) {
    this.shoppingList.push(newItem);
  }

  onDeleteItem(item) {
    this.shoppingList.splice(
      this.shoppingList.findIndex(i => i.itemName === item.itemName) , 1);
  }

  onDuplicateItem(duplicateItem: {itemName: string; itemAmount: string}) {
    this.shoppingList.push(duplicateItem);
  }
}
