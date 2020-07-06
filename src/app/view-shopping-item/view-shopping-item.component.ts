import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ShoppingService} from "../services/shopping.service";

@Component({
  selector: 'app-view-shopping-item',
  templateUrl: './view-shopping-item.component.html',
  styleUrls: ['./view-shopping-item.component.scss']
})
export class ViewShoppingItemComponent implements OnInit {
  itemName;
  itemAmount;
  item;
  constructor(public route: ActivatedRoute, public shoppingService: ShoppingService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=> {
      this.itemName = params['itemName'];
      this.itemAmount = params['itemAmount'];
      this.item = this.shoppingService.getItem(params['id'])
    });
  }
}
