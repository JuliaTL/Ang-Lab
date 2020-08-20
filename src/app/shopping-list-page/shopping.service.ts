import { Injectable } from '@angular/core';
import { IShopItem } from "./shopItem.model";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { apiBaseShoppingItems } from "../utils/api";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  shoppingList: IShopItem[] = [];
  isLoading = false;

  constructor(private http: HttpClient) { }

  addItem(itemData: IShopItem) {
      this.http.post(apiBaseShoppingItems, itemData)
        .subscribe( res => console.log(res));
  }
  getShoppingItems(){
    this.isLoading = true;
    this.http.get<{[key:string]: IShopItem}>(apiBaseShoppingItems)
      .pipe(
        map((res) => {
          const shoppingList = [];
          for( const key in res){
            if(res.hasOwnProperty(key)){
              shoppingList.push({...res[key], id: key})
            }
          }
      return shoppingList;
    } ))
      .subscribe(items => {
        this.isLoading = false;
        this.shoppingList = items;
      });
  }
  deleteAllItems() {
      this.http.delete(apiBaseShoppingItems)
        .subscribe();
  }
}

