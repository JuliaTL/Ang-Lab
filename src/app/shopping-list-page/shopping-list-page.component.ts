import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: ['./shopping-list-page.component.scss']
})
export class ShoppingListPageComponent implements OnInit {

  constructor(public shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

}
