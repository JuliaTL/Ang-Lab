import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingService } from "../../../../services/shopping.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss']
})
export class ShoppingListItemComponent implements OnInit, OnDestroy {
  item: { itemName: string, itemAmount: string };
  itemName:  string;
  id: number;
  subscriber: any;

  constructor(public shoppingService: ShoppingService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.subscriber = this.route.params.subscribe((params: Params)=>{
      this.id = params['id'];
      this.item = {...this.shoppingService.getItem(+this.id)};
    });
    }

  ngOnDestroy(): void {
      this.subscriber.unsubscribe();
    }

  onEdit() {
      this.router.navigate(['edit'], {
        relativeTo: this.route,
        preserveQueryParams: true
      });
  }
}
