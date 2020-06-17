import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
@Input() shoppingList: { itemName: string, itemAmount: string }[];
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.shoppingList);
  }

}
