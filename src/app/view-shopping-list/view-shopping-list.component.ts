import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ShoppingService} from "../services/shopping.service";

@Component({
  selector: 'app-view-shopping-list',
  templateUrl: './view-shopping-list.component.html',
  styleUrls: ['./view-shopping-list.component.scss']
})
export class ViewShoppingListComponent implements OnInit {

  itemName;
  itemAmount;

  constructor(public router: Router, public route: ActivatedRoute, public shoppingService: ShoppingService) { }

  ngOnInit(): void {
    // this.itemName = this.route.snapshot.params['itemName'];
    // this.itemAmount = this.route.snapshot.params['itemAmount'];

    this.route.params.subscribe((params)=> {
      this.itemName = params['itemName'];
      this.itemAmount = params['itemAmount'];
    })
  }

}
