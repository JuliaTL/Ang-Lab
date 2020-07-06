import {Component, OnInit} from '@angular/core';
import { ShoppingService } from "../../services/shopping.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss']
})
export class ShoppingListItemComponent implements OnInit{
  item: { itemName: string, itemAmount: string };
  itemName:  string;
  itemAmount: string;
  id: number;
  updateItem: boolean = false;

  constructor(public shoppingService: ShoppingService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.item = this.shoppingService.getItem(+this.id);
    });
    }

}
