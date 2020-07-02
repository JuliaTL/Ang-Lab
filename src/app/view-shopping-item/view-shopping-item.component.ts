import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ShoppingService} from "../services/shopping.service";

@Component({
  selector: 'app-view-shopping-item',
  templateUrl: './view-shopping-item.component.html',
  styleUrls: ['./view-shopping-item.component.scss']
})
export class ViewShoppingItemComponent implements OnInit {
  itemName: string;
  itemAmount: string;
  constructor(public route: ActivatedRoute, public shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=> {
      this.itemName = params['itemName'];
      this.itemAmount = params['itemAmount'];
    })
  }

}
