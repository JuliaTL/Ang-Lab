import {Component, OnDestroy, OnInit} from '@angular/core';
import { ShoppingService } from "../services/shopping.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit-shopping-item',
  templateUrl: './edit-shopping-item.component.html',
  styleUrls: ['./edit-shopping-item.component.scss']
})
export class EditShoppingItemComponent implements OnInit, OnDestroy {
  item: { itemName: string, itemAmount: string };
  itemName:  string;
  itemAmount: string;
  id: number;
  subscriber: any;

  constructor(public shoppingService: ShoppingService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.subscriber = this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.item = this.shoppingService.getItem(+this.id);
      this.itemName = this.item.itemName;
      this.itemAmount = this.item.itemAmount;
    });
  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
  onChange() {
    this.shoppingService.changeItem(this.id, this.itemName, this.itemAmount);
    this.router.navigate(['/view-shopping-list']);
  }
}
