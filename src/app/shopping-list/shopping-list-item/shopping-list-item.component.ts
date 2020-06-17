import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss']
})
export class ShoppingListItemComponent implements OnInit {
@Input() item: { itemName: string, itemAmount: string };
  constructor() { }

  ngOnInit(): void {
  }

}
