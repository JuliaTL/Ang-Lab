import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ShoppingService } from "../services/shopping.service";

@Component({
  selector: 'app-view-shopping-item',
  templateUrl: './view-shopping-item.component.html',
  styleUrls: ['./view-shopping-item.component.scss']
})
export class ViewShoppingItemComponent implements OnInit, OnDestroy {
  itemName;
  itemAmount;
  item;
  id: any;
  subscriber: any;
  constructor(public route: ActivatedRoute,
              public shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.subscriber = this.route.params.subscribe((params)=> {
      this.itemName = params['itemName'];
      this.itemAmount = params['itemAmount'];
      this.item = this.shoppingService.getItem(params['id'])
    });
  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
