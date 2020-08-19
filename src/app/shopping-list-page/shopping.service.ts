import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  shoppingList:  { itemName: string, itemAmount: string }[] = [
    { itemName: 'cheese', itemAmount: '200gr' },
    { itemName: 'tomato', itemAmount: '2kg' },
    { itemName: 'cucumber', itemAmount: '3kg' },
    { itemName: 'eggs', itemAmount: '20e' },
    { itemName: 'milk', itemAmount: '2l' },
    { itemName: 'fish', itemAmount: '2kg' },
    { itemName: 'meat', itemAmount: '800gr' },
  ];

  constructor() { }

  addItem(item: {itemName: string, itemAmount: string}) {
    this.shoppingList.push(item);
  }

  changeItem(id: number, itemName: string, itemAmount: string) {
    this.shoppingList[id].itemName = itemName;
    this.shoppingList[id].itemAmount = itemAmount;
  }

  getItem (id:number) {
    return this.shoppingList[id];
  }
}
