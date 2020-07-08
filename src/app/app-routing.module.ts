import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ViewShoppingListComponent } from "./view-shopping-list/view-shopping-list.component";
import { ViewShoppingItemComponent } from "./view-shopping-item/view-shopping-item.component";
import { AddPurchaseComponent } from "./add-purchase/add-purchase.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditShoppingItemComponent } from "./edit-shopping-item/edit-shopping-item.component";


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'view-shopping-list', component: ViewShoppingListComponent,
   children: [
      { path: ':view-shopping-item/:id', component: ViewShoppingItemComponent },
      { path: ':view-shopping-item/:id/:edit', component: EditShoppingItemComponent },
  ]},
  { path: 'add-purchase', component: AddPurchaseComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
