import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingService} from "../../services/shopping.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ICanComponentDeactivate} from "../../utils/auth.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-shopping-item',
  templateUrl: './edit-shopping-item.component.html',
  styleUrls: ['./edit-shopping-item.component.scss']
})
export class EditShoppingItemComponent implements OnInit, OnDestroy, ICanComponentDeactivate {
  item: { itemName: string, itemAmount: string };
  itemName:  string;
  itemAmount: string;
  id: number;
  subscriber: any;
  editsubscriber: any;
  allowEdit: boolean;
  isValueChanged: boolean = false;

  constructor(public shoppingService: ShoppingService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.allowEdit = params['allowEdit'] === '1';
    });
    this.subscriber = this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.item = this.shoppingService.getItem(+this.id);
      this.itemName = this.item.itemName;
      this.itemAmount = this.item.itemAmount;
    });
  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
    this.editsubscriber.unsubscribe();
  }
  onChange() {
    this.shoppingService.changeItem(this.id, this.itemName, this.itemAmount);
    this.isValueChanged = true;
    this.router.navigate(['../'], {relativeTo: this.route, preserveQueryParams: true});
  }

  canDeactivate(): (Observable<boolean> | Promise<boolean> | boolean) {
    if(!this.allowEdit) {
      return true;
    }
    if(this.itemName !== this.item.itemName || this.itemAmount !== this.item.itemAmount) {
      return confirm('Are you sure you want to leave this page??');
    }
    return true;
  }
}
