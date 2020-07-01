import { Injectable } from '@angular/core';
import { LoggingService } from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  shoppingList:  { itemName: string, itemAmount: string }[] = [ { itemName: 'cheese', itemAmount: '200gr' }];

  constructor(private loggingService: LoggingService) { }

  addItem(item: {itemName: string, itemAmount: string}) {
    this.loggingService.logAdd(item.itemName);
    this.shoppingList.push(item);
  }
  deleteItem(id: number, item: {itemName: string, itemAmount: string}) {
    this.loggingService.logDelete(item.itemName);
    this.shoppingList.splice(id, 1);
  }
  changeItem(id: number, itemName: string) {
    this.shoppingList[id].itemName = itemName;
  }
  duplicateItem(item: {itemName: string, itemAmount: string}) {
    this.shoppingList.push(item);
  }
}
