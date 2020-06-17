import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { CreateShoppingItemComponent } from './create-shopping-item/create-shopping-item.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    CreateShoppingItemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
