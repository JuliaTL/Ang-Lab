import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListPageComponent } from "./shopping-list-page.component";
import { SharedModule } from "../shared/shared.module";
import { ShoplistRoutingModule } from "./shoplist-routing.module";

@NgModule({
  declarations: [ShoppingListPageComponent],
  exports: [ShoppingListPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShoplistRoutingModule,
  ]
})
export class ShoplistModule { }
