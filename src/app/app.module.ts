import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { CreateShoppingItemComponent } from './create-shopping-item/create-shopping-item.component';
import { FormsModule } from "@angular/forms";
import { LoggingService } from "./services/logging.service";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ViewShoppingListComponent } from './view-shopping-list/view-shopping-list.component';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';
import { ViewShoppingItemComponent } from './view-shopping-item/view-shopping-item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-shopping-list', component: ViewShoppingListComponent },
  { path: 'view-shopping-list/:itemName/:itemAmount', component: ViewShoppingListComponent},
  { path: 'view-shopping-item', component: ViewShoppingItemComponent},
  { path: 'add-purchase', component: AddPurchaseComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    CreateShoppingItemComponent,
    HomeComponent,
    ViewShoppingListComponent,
    AddPurchaseComponent,
    ViewShoppingItemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule.forRoot(routes),
    ],
  exports: [RouterModule],
  providers: [ LoggingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
